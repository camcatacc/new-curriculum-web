// Modules
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";

// Test Modules
import { customRender } from "utils/tests";

// Accessibility Tests
import { axe, toHaveNoViolations } from "jest-axe";

// Components
import Presentation, { PresentationProps } from "components/templates/Presentation/Presentation";

// Accessibility extension
expect.extend(toHaveNoViolations);

// Default Components
const defaultProps: PresentationProps = {
	name: "David",
	surname: "Camacho",
	title: "About me",
	aboutText: {
		data: {},
		content: [
			{
				data: {},
				content: [
					{
						data: {},
						marks: [],
						value: "I am a ",
						nodeType: "text"
					},
					{
						data: {},
						marks: [
							{
								type: "bold"
							}
						],
						value: "commited",
						nodeType: "text"
					},
					{
						data: {},
						marks: [],
						value: ", capable and resolutive person. I have skills, experience and formation as a ",
						nodeType: "text"
					},
					{
						data: {},
						marks: [
							{
								type: "bold"
							}
						],
						value: "developer",
						nodeType: "text"
					},
					{
						data: {},
						marks: [],
						value: ", which are very well complemented by my ",
						nodeType: "text"
					},
					{
						data: {},
						marks: [
							{
								type: "bold"
							}
						],
						value: "business background",
						nodeType: "text"
					},
					{
						data: {},
						marks: [],
						value: ".",
						nodeType: "text"
					}
				],
				nodeType: BLOCKS.PARAGRAPH
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
					{
						data: {},
						marks: [
							{
								type: "bold"
							}
						],
						value: "online solution in the form of a hybrid app",
						nodeType: "text"
					},
					{
						data: {},
						marks: [],
						value: " and a web platform. ",
						nodeType: "text"
					}
				],
				nodeType: BLOCKS.PARAGRAPH
			},
			{
				data: {},
				content: [
					{
						data: {},
						marks: [],
						value: "I am currently employed by Accenture as a ",
						nodeType: "text"
					},
					{
						data: {},
						marks: [
							{
								type: "bold"
							}
						],
						value: "full-stack developer",
						nodeType: "text"
					},
					{
						data: {},
						marks: [],
						value: ".",
						nodeType: "text"
					}
				],
				nodeType: BLOCKS.PARAGRAPH
			}
		],
		nodeType: BLOCKS.DOCUMENT
	}
};

// Custom rendering
function renderComponent(newProps?: object) {
	const props = { ...defaultProps, ...newProps };
	return customRender(<Presentation {...props} />);
}

describe("Presentation", () => {
	it("Snapshot and accessibility tests", async () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
