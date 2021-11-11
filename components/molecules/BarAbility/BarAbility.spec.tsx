// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import BarAbility from "components/molecules/BarAbility/BarAbility";

// Definitions
import type { BarAbilityProps } from "components/molecules/BarAbility/BarAbility";

// Default Props
const defaultProps: BarAbilityProps = {
	barStyle: { backgroundColor: "red" },
	percentage: 80,
	title: "Important ability",
	titleStyle: { backgroundColor: "orange", fontColor: "white" }
};

// Tests
describe("BarAbility", () => {
	it("Renders as expected", () => {
		const { container } = render(<BarAbility {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});