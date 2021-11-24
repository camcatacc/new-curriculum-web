// Modules
import React from "react";
import { fireEvent, render } from "@testing-library/react";

// Elements
import MenuElement from "components/atoms/MenuElement/MenuElement";

// Styling
import { primary } from "styles/customColors";

// Definitions
import type { MenuElementProps } from "components/atoms/MenuElement/MenuElement";

// Default Props
const defaultProps: MenuElementProps = {
	onClicked: jest.fn(),
	selected: false,
	title: "Home"
};

// Rendering
const renderComponent = (props = {}) => {
	const combinedProps = { ...defaultProps, ...props };
	return render(<MenuElement {...combinedProps} />);
};

// Tests
describe("MenuElement", () => {
	it("Renders as expected", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	it("If selected is not true, the color is white", () => {
		const { getByRole } = renderComponent({ selected: false });
		const link = getByRole("link");
		expect(link).toHaveStyle("color: rgb(255,255,255)");
	});

	it("If selected is true, the color is primary", () => {
		const { getByRole } = renderComponent({ selected: true });
		const link = getByRole("link");
		expect(link).toHaveStyle(`color: ${primary}`);
	});

	it("If clicked, call the onClick function", () => {
		const { getByRole } = renderComponent();
		const link = getByRole("link");
		fireEvent.click(link);
		expect(defaultProps.onClicked).toHaveBeenCalled();
	});
});
