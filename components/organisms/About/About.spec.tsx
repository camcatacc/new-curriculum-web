// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import About from "components/organisms/About/About";

// Definitions
import type { AboutProps } from "components/organisms/About/About";

// Default Props
const defaultProps: AboutProps = {
	name: "David",
	surname: "Camacho Cateura",
	paragraphsDoc: {
		data: {},
		content: [
			{
				data: {},
				content: [
					{ data: {}, marks: [], value: "I am a ", nodeType: "text" },
					{ data: {}, marks: [{ type: "bold" }], value: "commited", nodeType: "text" },
					{ data: {}, marks: [], value: ", capable and resolutive person. I have skills, experience and formation as a ", nodeType: "text" },
					{ data: {}, marks: [{ type: "bold" }], value: "developer", nodeType: "text" },
					{ data: {}, marks: [], value: ", which are very well complemented by my ", nodeType: "text" },
					{ data: {}, marks: [{ type: "bold" }], value: "business background", nodeType: "text" },
					{ data: {}, marks: [], value: ".", nodeType: "text" }
				],
				nodeType: "paragraph"
			},
			{
				data: {},
				content: [
					{
						data: {},
						marks: [],
						value: "I led an educational robotics and programming firm for five years. I devoted the last one and a half to ideate, design and develop an ",
						nodeType: "text"
					},
					{ data: {}, marks: [{ type: "bold" }], value: "online solution in the form of a hybrid app", nodeType: "text" },
					{ data: {}, marks: [], value: " and a web platform. ", nodeType: "text" }
				],
				nodeType: "paragraph"
			},
			{
				data: {},
				content: [
					{ data: {}, marks: [], value: "I am currently employed by Accenture as a ", nodeType: "text" },
					{ data: {}, marks: [{ type: "bold" }], value: "full-stack developer", nodeType: "text" },
					{ data: {}, marks: [], value: ".", nodeType: "text" }
				],
				nodeType: "paragraph"
			}
		],
		nodeType: "document"
	} as any
};

// Tests
describe("About", () => {
	it("Renders as expected", () => {
		const { container } = render(<About {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
