import sendEmail from "services/api/email";

// Mocks
const mockedFunction = jest.fn();
global.fetch = mockedFunction;

const defaultProps = { email: "", messageBody: "", messageSubject: "", name: "", surname: "" };

describe("email service", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it("Returns ok", async () => {
		mockedFunction.mockImplementation(async () => ({ ok: true, status: 200 }));
		return expect(sendEmail(defaultProps)).resolves;
	});
	it("Returns not ok", async () => {
		mockedFunction.mockImplementation(async () => ({ ok: false, status: 500 }));
		return expect(sendEmail(defaultProps)).rejects.toThrow();
	});
});
