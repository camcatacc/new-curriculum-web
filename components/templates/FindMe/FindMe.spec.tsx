// Modules
import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

// Test Modules
import { customRender } from "utils/tests";

// Accessibility Tests
import { axe, toHaveNoViolations } from "jest-axe";

// Components
import FindMe, { FindMeProps } from "components/templates/FindMe/FindMe";
import { fireEvent } from "@testing-library/dom";

// APIs to be mocked
import emailService from "services/api/email";
import { act } from "@testing-library/react";

// Accessibility extension
expect.extend(toHaveNoViolations);

// Mocks
jest.mock("services/api/email");

const mockedEmailService = emailService as jest.Mock;

// Default Components
const defaultProps: FindMeProps = {
	title: "Find Me",
	text: {
		nodeType: BLOCKS.DOCUMENT,
		data: {},
		content: [
			{
				nodeType: BLOCKS.PARAGRAPH,
				content: [
					{
						nodeType: "text",
						value: "Do you want to work on a project with me or have any kind of doubt?",
						marks: [],
						data: {}
					}
				],
				data: {}
			},
			{
				nodeType: BLOCKS.PARAGRAPH,
				content: [
					{
						nodeType: "text",
						value: "You can find me in ",
						marks: [],
						data: {}
					},
					{
						nodeType: INLINES.HYPERLINK,
						content: [
							{
								nodeType: "text",
								value: "contact@gmail.com",
								marks: [],
								data: {}
							}
						],
						data: {
							uri: "mailto:contact@gmail.com"
						}
					},
					{
						nodeType: "text",
						value: ".",
						marks: [],
						data: {}
					}
				],
				data: {}
			}
		]
	}
};

// Custom rendering
function renderComponent(newProps?: object) {
	const props = { ...defaultProps, ...newProps };
	return customRender(<FindMe {...props} />);
}

describe("FindMe", () => {
	beforeEach(() => {
		mockedEmailService.mockReset().mockResolvedValue({ status: 200 });
	});
	it("Snapshot and accessibility tests", async () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	it("On Button click, the modal is opened and its content is rendered well", async () => {
		const { container, getByRole } = renderComponent();

		const button = getByRole("button");
		fireEvent.click(button);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	describe("On Form Change...", () => {
		it("On Form Change, values change", () => {
			const { container, getByRole, getByLabelText } = renderComponent();

			const modalButton = getByRole("button");

			fireEvent.click(modalButton);

			const nameInput = getByLabelText("Name") as HTMLInputElement;
			fireEvent.change(nameInput, { target: { value: "David" } });

			expect(nameInput.value).toBe("David");
			expect(container).toMatchSnapshot();
		});

		it("On Form Change, if cancel button is pressed, values are not saved", () => {
			const { container, getByRole, getByLabelText, getByText } = renderComponent();

			const modalButton = getByRole("button");

			fireEvent.click(modalButton);

			const nameInput = getByLabelText("Name") as HTMLInputElement;
			fireEvent.change(nameInput, { target: { value: "David" } });

			const cancelButton = getByText("Cancel");
			fireEvent.click(cancelButton);
			fireEvent.click(modalButton);

			expect(nameInput.value).toBe("");
			expect(container).toMatchSnapshot();
		});

		it("On Form Change, if SAVE button is pressed, values are saved", () => {
			const { container, getByRole, getByLabelText, getByText } = renderComponent();

			const modalButton = getByRole("button");

			fireEvent.click(modalButton);

			const nameInput = getByLabelText("Name") as HTMLInputElement;
			fireEvent.change(nameInput, { target: { value: "David" } });

			const saveButton = getByText("Finish it later");
			fireEvent.click(saveButton);
			fireEvent.click(modalButton);

			expect(nameInput.value).toBe("David");
			expect(container).toMatchSnapshot();
		});

		it("On Form Change, if SEND WITH ERROR button is pressed, an error appears", async () => {
			const { container, getByRole, findByText } = renderComponent();

			const modalButton = getByRole("button");

			fireEvent.click(modalButton);

			const errorButton = await findByText("Send with error");
			fireEvent.click(errorButton);

			const errorText = await findByText("This request fails after one second");

			expect(errorText).toBeInTheDocument();
			expect(container).toMatchSnapshot();
		});

		it("On Form Change, if SEND button is pressed and the request succeeds, the modal is closed", async () => {
			const { container, findByRole, findByText } = renderComponent();

			const modalButton = await findByRole("button");
			fireEvent.click(modalButton);

			const sendButton = await findByText("Send");
			fireEvent.click(sendButton);

			await act(async () => {
				await new Promise((resolve) => setTimeout(resolve, 500));
			});

			expect(sendButton).not.toBeInTheDocument();
			expect(container).toMatchSnapshot();
		});
	});
});
