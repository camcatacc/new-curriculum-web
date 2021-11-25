// Redux elements
import contactReducer, {
	initialState,
	// Selectors
	emailSelector,
	errorSelector,
	messageBodySelector,
	messageSubjectSelector,
	nameSelector,
	postStatusSelector,
	surnameSelector,
	wholeContactSelector,
	// Actions
	changeEmail,
	changeMessageBody,
	changeMessageSubject,
	changeName,
	changeSurname,
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
			it("should getEmail", () => {
				expect(emailSelector(defaultTestRootState)).toBe("");
			});
			it("should messageBodySelector", () => {
				expect(messageBodySelector(defaultTestRootState)).toBe("");
			});
			it("should messageSubjectSelector", () => {
				expect(messageSubjectSelector(defaultTestRootState)).toBe("");
			});
			it("should nameSelector", () => {
				expect(nameSelector(defaultTestRootState)).toBe("");
			});
			it("should surnameSelector", () => {
				expect(surnameSelector(defaultTestRootState)).toBe("");
			});
			it("should wholeContactSelector", () => {
				expect(wholeContactSelector(defaultTestRootState)).toBe(defaultTestRootState.contact.form);
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
				const newEmail = "a@a.com";
				expect(contactReducer(initialState, changeEmail(newEmail))).toEqual({ form: { ...initialState.form, email: newEmail } });
			});
			it("should changeMessageBody", () => {
				const newMessageBody = "Testing the message Body";
				expect(contactReducer(initialState, changeMessageBody(newMessageBody))).toEqual({ form: { ...initialState.form, messageBody: newMessageBody } });
			});
			it("should changeMessageSubject", () => {
				const newMessageSubject = "Testing the message Subject";
				expect(contactReducer(initialState, changeMessageSubject(newMessageSubject))).toEqual({ form: { ...initialState.form, messageSubject: newMessageSubject } });
			});
			it("should changeName", () => {
				const newName = "Testing the Name";
				expect(contactReducer(initialState, changeName(newName))).toEqual({ form: { ...initialState.form, name: newName } });
			});
			it("should changeSurname", () => {
				const newSurname = "Testing the Surname";
				expect(contactReducer(initialState, changeSurname(newSurname))).toEqual({ form: { ...initialState.form, surname: newSurname } });
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
