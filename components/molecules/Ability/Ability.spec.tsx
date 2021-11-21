// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import Ability from "components/molecules/Ability/Ability";
import { ImportContactsSharp } from "@material-ui/icons";

// Definitions
import type { AbilityProps } from "components/molecules/Ability/Ability";

// Default Props
const defaultProps: AbilityProps = {
	description: "This ability is the best",
	icon: ImportContactsSharp,
	title: "Best ability"
};

// Tests
describe("Ability", () => {
	it("Renders as expected", () => {
		const { container } = render(<Ability {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
