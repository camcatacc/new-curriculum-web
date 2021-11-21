// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";

// Definitions
import type { PageSizeProps } from "components/atoms/PageSize/PageSize";

// Default PRops
const defaultProps: PageSizeProps = {
	children: <p>Bu</p>
};

// Tests
describe("PageSize", () => {
	it("Renders as expected", () => {
		const { container } = render(<PageSize {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
