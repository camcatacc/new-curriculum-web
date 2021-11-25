// Modules
import React from "react";
import { fireEvent, render } from "@testing-library/react";

// Elements
import ListMenuElements from "components/molecules/ListMenuElements/ListMenuElements";

// Definitions
import type { ListMenuElementsProps } from "components/molecules/ListMenuElements/ListMenuElements";

// Mocks
const onClickMock = jest.fn();

// Default Props
const defaultProps: ListMenuElementsProps = {
	menuElements: [{ name: "Home", onClick: onClickMock, id: "home>" }],
	selectedId: "home"
};

// Tests
describe("ListMenuElements", () => {
	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn()
			}))
		});
	});

	it("Renders as expected", () => {
		const { container } = render(<ListMenuElements {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it("Calls onClick function", () => {
		const { getByText } = render(<ListMenuElements {...defaultProps} />);
		const home = getByText("Home");
		fireEvent.click(home);

		expect(onClickMock).toHaveBeenCalled();
	});
});
