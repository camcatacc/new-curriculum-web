// Modules
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";

// Test Modules
import { customRender } from "utils/tests";

// Accessibility Tests
import { axe, toHaveNoViolations } from "jest-axe";

// Components
import Abilities, { AbilitiesProps } from "components/templates/Abilities/Abilities";

// Accessibility extension
expect.extend(toHaveNoViolations);

// Default Components
const defaultProps: AbilitiesProps = {
	abilitiesLists: [
		{
			abilities: [
				{
					metadata: {
						tags: []
					},
					sys: {
						space: {
							sys: {
								type: "Link",
								linkType: "Space",
								id: "or8z0a5f48r5"
							}
						},
						id: "2wDwDei4PJ7P5Op07sWj4d",
						type: "Entry",
						createdAt: "2021-11-08T16:55:45.542Z",
						updatedAt: "2021-11-11T09:03:51.947Z",
						environment: {
							sys: {
								id: "master",
								type: "Link",
								linkType: "Environment"
							}
						},
						revision: 3,
						contentType: {
							sys: {
								type: "Link",
								linkType: "ContentType",
								id: "ability"
							}
						},
						locale: "en-US"
					},
					fields: {
						title: "Perfectionist",
						text: {
							data: {},
							content: [
								{
									data: {},
									content: [
										{
											data: {},
											marks: [],
											value: "From responsive designs to error absence, nothing is irrelevant.",
											nodeType: "text"
										}
									],
									nodeType: BLOCKS.PARAGRAPH
								}
							],
							nodeType: BLOCKS.DOCUMENT
						},
						icon: "M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z"
					}
				},
				{
					metadata: {
						tags: []
					},
					sys: {
						space: {
							sys: {
								type: "Link",
								linkType: "Space",
								id: "or8z0a5f48r5"
							}
						},
						id: "6ObHPjfR0K6hlcC7XGwqun",
						type: "Entry",
						createdAt: "2021-11-08T16:54:33.124Z",
						updatedAt: "2021-11-11T09:05:17.748Z",
						environment: {
							sys: {
								id: "master",
								type: "Link",
								linkType: "Environment"
							}
						},
						revision: 2,
						contentType: {
							sys: {
								type: "Link",
								linkType: "ContentType",
								id: "ability"
							}
						},
						locale: "en-US"
					},
					fields: {
						title: "Agile Team Player",
						text: {
							data: {},
							content: [
								{
									data: {},
									content: [
										{
											data: {},
											marks: [],
											value: "I know and apply ",
											nodeType: "text"
										},
										{
											data: {},
											marks: [
												{
													type: "bold"
												}
											],
											value: "Agile methodologies",
											nodeType: "text"
										},
										{
											data: {},
											marks: [],
											value: " and consider teamworking of utmost importance.",
											nodeType: "text"
										}
									],
									nodeType: BLOCKS.PARAGRAPH
								}
							],
							nodeType: BLOCKS.DOCUMENT
						},
						icon: "M11 6H14L17.29 2.7A1 1 0 0 1 18.71 2.7L21.29 5.29A1 1 0 0 1 21.29 6.7L19 9H11V11A1 1 0 0 1 10 12A1 1 0 0 1 9 11V8A2 2 0 0 1 11 6M5 11V15L2.71 17.29A1 1 0 0 0 2.71 18.7L5.29 21.29A1 1 0 0 0 6.71 21.29L11 17H15A1 1 0 0 0 16 16V15H17A1 1 0 0 0 18 14V13H19A1 1 0 0 0 20 12V11H13V12A2 2 0 0 1 11 14H9A2 2 0 0 1 7 12V9Z"
					}
				}
			],
			title: "Main Abilities",
			type: "AbilitiesList"
		},
		{
			title: "Main Bar Abilities",
			type: "GroupBarAbilitiesList",
			abilitiesGroups: [
				{
					metadata: {
						tags: []
					},
					sys: {
						space: {
							sys: {
								type: "Link",
								linkType: "Space",
								id: "or8z0a5f48r5"
							}
						},
						id: "1b0UZLfybdSOMege5FmMUc",
						type: "Entry",
						createdAt: "2021-11-11T10:21:46.014Z",
						updatedAt: "2021-11-11T10:29:13.447Z",
						environment: {
							sys: {
								id: "master",
								type: "Link",
								linkType: "Environment"
							}
						},
						revision: 3,
						contentType: {
							sys: {
								type: "Link",
								linkType: "ContentType",
								id: "groupBarAbilities"
							}
						},
						locale: "en-US"
					},
					fields: {
						title: "Web",
						abilities: [
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "1prQS4NyURnS3j8nvyG9Wg",
									type: "Entry",
									createdAt: "2021-11-11T10:27:33.656Z",
									updatedAt: "2021-11-11T10:27:33.656Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "HTML",
									percentage: 80
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "RA9KLKu6wk8pVPnMpZ9OM",
									type: "Entry",
									createdAt: "2021-11-11T10:27:54.316Z",
									updatedAt: "2021-11-11T10:27:54.316Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "CSS",
									percentage: 80
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "5HcwsqorvoWEokKMuwZeH7",
									type: "Entry",
									createdAt: "2021-11-11T10:28:16.211Z",
									updatedAt: "2021-11-11T10:28:16.211Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "JavaScript",
									percentage: 90
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "6z3VBKdxFfhxnFTFVfbx18",
									type: "Entry",
									createdAt: "2021-11-11T10:28:32.546Z",
									updatedAt: "2021-11-11T10:28:32.546Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "TypeScript",
									percentage: 90
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "xr5X272NShacIVBBd33YN",
									type: "Entry",
									createdAt: "2021-11-11T10:28:46.102Z",
									updatedAt: "2021-11-11T10:28:46.102Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "React",
									percentage: 90
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "1hPM9hF78cX5kmOvQusAuF",
									type: "Entry",
									createdAt: "2021-11-11T10:28:57.886Z",
									updatedAt: "2021-11-11T10:28:57.886Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "Angular",
									percentage: 30
								}
							}
						],
						titleColor: "#E25487",
						barColor: "#B2436B"
					}
				},
				{
					metadata: {
						tags: []
					},
					sys: {
						space: {
							sys: {
								type: "Link",
								linkType: "Space",
								id: "or8z0a5f48r5"
							}
						},
						id: "2Pr95TGtfllGTQ62uqOwUX",
						type: "Entry",
						createdAt: "2021-11-11T10:32:09.060Z",
						updatedAt: "2021-11-11T10:32:09.060Z",
						environment: {
							sys: {
								id: "master",
								type: "Link",
								linkType: "Environment"
							}
						},
						revision: 1,
						contentType: {
							sys: {
								type: "Link",
								linkType: "ContentType",
								id: "groupBarAbilities"
							}
						},
						locale: "en-US"
					},
					fields: {
						title: "Mobile",
						abilities: [
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "1jE6B4GvzIkg3r3HeavClM",
									type: "Entry",
									createdAt: "2021-11-11T10:30:32.538Z",
									updatedAt: "2021-11-11T10:30:32.538Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "React Native",
									percentage: 90
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "4soF5A1IaF8SmxKgbKlmbn",
									type: "Entry",
									createdAt: "2021-11-11T10:30:45.207Z",
									updatedAt: "2021-11-11T10:30:45.207Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "Flutter",
									percentage: 70
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "73kK6Yv6Kr29PiF1jgxXUQ",
									type: "Entry",
									createdAt: "2021-11-11T10:31:00.082Z",
									updatedAt: "2021-11-11T10:31:00.082Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "Ionic",
									percentage: 60
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "2mMd4hW1VTAThwaSzLEkXg",
									type: "Entry",
									createdAt: "2021-11-11T10:31:28.373Z",
									updatedAt: "2021-11-11T10:31:28.373Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "Android Dev.",
									percentage: 50
								}
							},
							{
								metadata: {
									tags: []
								},
								sys: {
									space: {
										sys: {
											type: "Link",
											linkType: "Space",
											id: "or8z0a5f48r5"
										}
									},
									id: "7inyS7pHOL00hBrOduSyGx",
									type: "Entry",
									createdAt: "2021-11-11T10:31:42.759Z",
									updatedAt: "2021-11-11T10:31:42.759Z",
									environment: {
										sys: {
											id: "master",
											type: "Link",
											linkType: "Environment"
										}
									},
									revision: 1,
									contentType: {
										sys: {
											type: "Link",
											linkType: "ContentType",
											id: "barAbility"
										}
									},
									locale: "en-US"
								},
								fields: {
									name: "iOS Dev.",
									percentage: 50
								}
							}
						],
						titleColor: "#70C541",
						barColor: "#60A13C"
					}
				}
			]
		}
	],
	title: "Abilities"
};

// Custom rendering
function renderComponent(newProps?: object) {
	const props = { ...defaultProps, ...newProps };
	return customRender(<Abilities {...props} />);
}

describe("Abilities", () => {
	it("Snapshot and accessibility tests", async () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
