// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import SectionTitleDivider from "components/atoms/SectionTitleDivider/SectionTitleDivider";

// Tests
describe("SectionTitleDivider", () => {
	it("Renders as expected", () => {
		const { container } = render(<SectionTitleDivider />);
		expect(container).toMatchSnapshot();
	});
});
