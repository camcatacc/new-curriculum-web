// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import MenuBar from "components/organisms/MenuBar/MenuBar";

// Definitions
import type { MenuBarProps } from "components/organisms/MenuBar/MenuBar";

// Default Props
const defaultProps: MenuBarProps = {
	elements: [
		{ name: "Home", onClick: jest.fn(), id: "home" },
		{ name: "About", onClick: jest.fn(), id: "about" }
	],
	selectedId: "home"
};

// Tests
describe("MenuBar", () => {
	it("Renders as expected", () => {
		const { container } = render(<MenuBar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
