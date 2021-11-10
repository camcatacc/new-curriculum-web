// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import GroupBarAbilities from "components/organisms/GroupBarAbilities/GroupBarAbilities";

// Definitions
import type { GroupBarAbilitiesProps } from "components/organisms/GroupBarAbilities/GroupBarAbilities";

// Default Props
const defaultProps: GroupBarAbilitiesProps = {
	abilities: [
		{ barStyle: { backgroundColor: "red" }, percentage: 80, title: "Important ability", titleStyle: { backgroundColor: "orange", fontColor: "white" } },
		{ barStyle: { backgroundColor: "blue" }, percentage: 21, title: "Important ability 2", titleStyle: { backgroundColor: "yellow", fontColor: "black" } }
	]
};

// Tests
describe("GroupBarAbilities", () => {
	it("Renders as expected", () => {
		const { container } = render(<GroupBarAbilities {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
