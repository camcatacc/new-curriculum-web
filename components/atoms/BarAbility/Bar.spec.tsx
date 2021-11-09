// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import Bar from "components/atoms/BarAbility/Bar";

// Definitions
import type { BarProps } from "components/atoms/BarAbility/Bar";

// Default Props
const defaultProps: BarProps = {
	percentage: 40,
	color: "red"
};

// Tests
describe("Bar", () => {
	it("Renders as expected", () => {
		const { container } = render(<Bar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
