// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import AvatarName from "components/atoms/AvatarName/AvatarName";

// Tests
describe("AvatarName", () => {
	it("Renders as expected", () => {
		const { container } = render(<AvatarName name="Marco" surname="Polo" />);
		expect(container).toMatchSnapshot();
	});
});
