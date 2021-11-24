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
		{ percentage: 80, name: "Cool" },
		{ percentage: 80, name: "Cool 2" }
	],
	barColor: "white",
	title: "Coolest abilities",
	titleColor: "red"
};

// Tests
describe("GroupBarAbilities", () => {
	it("Renders as expected", () => {
		const { container } = render(<GroupBarAbilities {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
