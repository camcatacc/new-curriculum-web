// Redux elements
import contactReducer, {
	initialState,
	// Selectors
	formSelector,
	errorSelector,
	postStatusSelector,
	// Actions
	updateForm,
	emptyContact,
	sendEmail
} from "redux/contact/contact";
import { defaultTestRootState } from "redux/store.test";

// APIs to be mocked
import emailService from "services/api/email";

// Mocks
jest.mock("services/api/email");
const mockedEmailService = emailService as jest.Mock;

// Testing
describe("contact slice", () => {
	describe("reducer, actions and selectors", () => {
		describe("reducer", () => {
			it("should return the initial state on first run", () => {
				const nextState = initialState;
				const result = contactReducer(undefined, { type: "@@redux/init" });

				expect(result).toEqual(nextState);
			});
		});

		describe("selectors", () => {
			it("should getForm", () => {
				expect(formSelector(defaultTestRootState)).toBe(initialState.form);
			});
			it("should postStatusSelector", () => {
				expect(postStatusSelector(defaultTestRootState)).toBe(undefined);
			});
			it("should errorSelector", () => {
				expect(errorSelector(defaultTestRootState)).toBe(undefined);
			});
		});

		describe("actions", () => {
			it("should changeEmail", () => {
				const newForm = { ...initialState.form, email: "a@a.com" };
				expect(contactReducer(initialState, updateForm(newForm))).toEqual({ ...initialState, form: newForm });
			});
			it("should emptyContact", () => {
				expect(contactReducer(initialState, emptyContact())).toEqual(initialState);
			});
			describe("shouldSendEmail", () => {
				beforeEach(() => {
					mockedEmailService.mockReset().mockResolvedValue({ status: 200 });
				});
				const dispatch = jest.fn().mockResolvedValue("");
				const getState = jest.fn().mockReturnValue(defaultTestRootState);
				const asyncFunc = sendEmail();

				it("Successful", async () => {
					const result = await asyncFunc(dispatch, getState, {});
					expect(result.meta.requestStatus).toEqual("fulfilled");
					const action = { type: sendEmail.fulfilled.type };
					const state = contactReducer(initialState, action);
					expect(state.status).toBe("succeeded");
				});
				it("Pending", async () => {
					const action = { type: sendEmail.pending.type };
					const state = contactReducer(initialState, action);
					expect(state.status).toBe("loading");
				});
				it("Failed", async () => {
					mockedEmailService.mockReset().mockImplementation(() => {
						throw new Error("Not working");
					});
					const result = await asyncFunc(dispatch, getState, {});
					expect(result.meta.requestStatus).toEqual("rejected");

					const action = { type: sendEmail.rejected.type };
					const state = contactReducer(initialState, action);
					expect(state.status).toBe("failed");
				});
			});
		});
	});
});
