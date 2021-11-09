// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import AbilityDescription from "components/atoms/Ability/AbilityDescription";

// Tests
describe("AbilityDescription", () => {
	it("Renders as expected", () => {
		const { container } = render(<AbilityDescription>Hello, hello</AbilityDescription>);
		expect(container).toMatchSnapshot();
	});
});
