// Modules
import React from "react";
import { render } from "@testing-library/react";
import { BLOCKS } from "@contentful/rich-text-types";

// Elements
import Ability from "components/molecules/Ability/Ability";

// Definitions
import type { AbilityProps } from "components/molecules/Ability/Ability";

// Default Props
const defaultProps: AbilityProps = {
	description: {
		nodeType: BLOCKS.DOCUMENT,
		data: {},
		content: [
			{
				nodeType: BLOCKS.PARAGRAPH, // Can be paragraphs, images, lists, embedded entries
				data: {},
				content: [
					{
						nodeType: "text",
						value: "This text is ",
						data: {},
						marks: []
					},
					{
						nodeType: "text",
						value: "important",
						data: {},
						marks: []
					}
				]
			}
		]
	},
	icon: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z",
	title: "Best ability"
};

// Tests
describe("Ability", () => {
	it("Renders as expected", () => {
		const { container } = render(<Ability {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
