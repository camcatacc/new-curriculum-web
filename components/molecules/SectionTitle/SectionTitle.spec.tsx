// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";

// Definitions
import type { SectionTitleProps } from "components/molecules/SectionTitle/SectionTitle";

// Default Props
const defaultProps: SectionTitleProps = {
	children: "This is a Section Title"
};

// Tests
describe("SectionTitle", () => {
	it("Renders as expected", () => {
		const { container } = render(<SectionTitle {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
