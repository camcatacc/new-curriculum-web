// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import Paragraph from "components/atoms/Paragraph/Paragraph";

// Definitions
import type { ParagraphProps } from "components/atoms/Paragraph/Paragraph";

// Default props
const defaultProps: ParagraphProps = {
	children: <p>Bu</p>
};

// Tests
describe("Paragraph", () => {
	it("Renders as expected", () => {
		const { container } = render(<Paragraph {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
