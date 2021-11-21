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
	menuElements: [{ name: "Home", onClick: onClickMock }]
};

// Tests
describe("ListMenuElements", () => {
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
