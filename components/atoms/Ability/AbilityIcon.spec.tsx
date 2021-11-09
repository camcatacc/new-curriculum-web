// Modules
import { render } from "@testing-library/react";
import React from "react";

// Elements
import { InsertChartOutlinedTwoTone } from "@material-ui/icons";
import AbilityIcon from "components/atoms/Ability/AbilityIcon";

// Tests
describe("AbilityIcon", () => {
	it("Renders as expected", () => {
		const { container } = render(<AbilityIcon icon={InsertChartOutlinedTwoTone} />);
		expect(container).toMatchSnapshot();
	});
});
