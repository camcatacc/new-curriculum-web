// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import GroupAbilities from "components/organisms/GroupAbilities/GroupAbilities";
import { ImportContactsSharp } from "@material-ui/icons";

// Definitions
import type { GroupAbilitiesProps } from "components/organisms/GroupAbilities/GroupAbilities";

// Default Props
const defaultProps: GroupAbilitiesProps = {
	abilities: [
		{ description: "This ability is the best", icon: ImportContactsSharp, title: "Best ability" },
		{ description: "This ability is the 2 best", icon: ImportContactsSharp, title: "Best ability 2" }
	]
};

// Tests
describe("GroupAbilities", () => {
	it("Renders as expected", () => {
		const { container } = render(<GroupAbilities {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
