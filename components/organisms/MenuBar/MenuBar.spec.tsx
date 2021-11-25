// Modules
import React from "react";

// Testing modules
import { customRender } from "utils/tests";

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
	it("Renders as expected if width > 720", () => {
		const { container } = customRender(<MenuBar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
