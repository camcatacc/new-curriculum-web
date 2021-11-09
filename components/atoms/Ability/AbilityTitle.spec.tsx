// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import AbilityTitle from "components/atoms/Ability/AbilityTitle";

// Tests
describe("AbilityTitle", () => {
	it("Renders as expected", () => {
		const { container } = render(<AbilityTitle>Hello, hello</AbilityTitle>);
		expect(container).toMatchSnapshot();
	});
});
