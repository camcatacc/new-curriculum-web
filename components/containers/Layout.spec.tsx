// Modules
import React from "react";

// Test Modules
import { customRender } from "utils/tests";

// Accessibility Tests
import { axe, toHaveNoViolations } from "jest-axe";

// Components
import Layout from "components/containers/Layout";

// Accessibility extension
expect.extend(toHaveNoViolations);

// Default Components
const defaultProps = {
	children: <p>This is the children component</p>,
	name: "Curriculum Web"
};

// Custom rendering
function renderComponent(newProps?: object) {
	const props = { ...defaultProps, ...newProps };
	return customRender(<Layout {...props} />);
}

describe("Layout", () => {
	it("Snapshot and accessibility tests", async () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
