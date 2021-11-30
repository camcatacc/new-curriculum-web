// Modules

import { fireEvent, render } from "@testing-library/react";
import { ContentfulEntry } from "interfaces/cms/contentful";
import { CmsPage } from "interfaces/cms/pages/Page";
import Home, { getStaticProps } from "pages";
import getEntries from "services/cms/contentful";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { customRender } from "utils/tests";

// Accessibility Tests
import { axe, toHaveNoViolations } from "jest-axe";

// Accessibility extension
expect.extend(toHaveNoViolations);

jest.mock("services/cms/contentful", () => {
	return {
		__esModule: true,
		default: jest.fn(),
		globalExclude: ["dummy_exclude"]
	};
});

const mockedGetEntries = getEntries as jest.Mock;

window.matchMedia = (query) => ({
	matches: false,
	media: query,
	onchange: null,
	addListener: jest.fn(), // Deprecated
	removeListener: jest.fn(), // Deprecated
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	dispatchEvent: jest.fn()
});

const mockedScrollTo = jest.fn();
window.scrollTo = mockedScrollTo;

const defaultPages: ContentfulEntry<CmsPage>[] = [
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
			id: "BnKgas0f3SKrHGHnSovF9",
			type: "Entry",
			createdAt: "2021-11-10T12:26:07.776Z",
			updatedAt: "2021-11-10T14:11:33.529Z",
			environment: {
				sys: {
					id: "master",
					type: "Link",
					linkType: "Environment"
				}
			},
			revision: 4,
			contentType: {
				sys: {
					type: "Link",
					linkType: "ContentType",
					id: "page"
				}
			},
			locale: "en-US"
		},
		fields: {
			id: "presentation",
			name: "Presentation",
			type: "PresentationPage",
			content: {
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
					id: "5YH2zSWaR7Z2QHM00ZWiho",
					type: "Entry",
					createdAt: "2021-11-09T15:16:02.011Z",
					updatedAt: "2021-11-23T10:55:47.641Z",
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
							id: "aboutPage"
						}
					},
					locale: "en-US"
				},
				fields: {
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
					},
					name: "Johan",
					surname: "Pérez Draghi"
				}
			}
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
			id: "4WSogVU1Jn2dARrY3HPfBx",
			type: "Entry",
			createdAt: "2021-11-10T16:40:51.564Z",
			updatedAt: "2021-11-11T14:05:34.301Z",
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
					id: "page"
				}
			},
			locale: "en-US"
		},
		fields: {
			id: "abilities",
			name: "Abilities",
			type: "AbilitiesPage",
			content: {
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
					id: "eL2Xenx3YBpXfG4sPmcZQ",
					type: "Entry",
					createdAt: "2021-11-08T17:13:04.598Z",
					updatedAt: "2021-11-11T10:33:22.801Z",
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
							id: "abilitiesPage"
						}
					},
					locale: "en-US"
				},
				fields: {
					title: "Abilities",
					abilitiesLists: [
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
								id: "13DvWhcKyjUIBqP83UvZnB",
								type: "Entry",
								createdAt: "2021-11-08T17:11:33.650Z",
								updatedAt: "2021-11-11T10:20:11.817Z",
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
										id: "abilitiesList"
									}
								},
								locale: "en-US"
							},
							fields: {
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
											id: "1YElblui3WP6GFu4rxsd6G",
											type: "Entry",
											createdAt: "2021-11-08T16:53:20.012Z",
											updatedAt: "2021-11-11T09:07:16.161Z",
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
											title: "Comunicative",
											text: {
												data: {},
												content: [
													{
														data: {},
														content: [
															{
																data: {},
																marks: [],
																value: "Be it in Catalan, Spanish or English, I have good communication skills.",
																nodeType: "text"
															}
														],
														nodeType: BLOCKS.PARAGRAPH
													}
												],
												nodeType: BLOCKS.DOCUMENT
											},
											icon: "M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"
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
											id: "1GnY4EuaCSfHDNW801nfN3",
											type: "Entry",
											createdAt: "2021-11-08T16:49:33.191Z",
											updatedAt: "2021-11-11T08:59:53.263Z",
											environment: {
												sys: {
													id: "master",
													type: "Link",
													linkType: "Environment"
												}
											},
											revision: 4,
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
											title: "Passion for learning",
											text: {
												data: {},
												content: [
													{
														data: {},
														content: [
															{
																data: {},
																marks: [],
																value: "I love learning and I do it with ease. Any challenge is welcome!",
																nodeType: "text"
															}
														],
														nodeType: BLOCKS.PARAGRAPH
													}
												],
												nodeType: BLOCKS.DOCUMENT
											},
											icon: "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
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
											id: "1YElblui3WP6GFu4rxsd6G",
											type: "Entry",
											createdAt: "2021-11-08T16:53:20.012Z",
											updatedAt: "2021-11-11T09:07:16.161Z",
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
											title: "Comunicative",
											text: {
												data: {},
												content: [
													{
														data: {},
														content: [
															{
																data: {},
																marks: [],
																value: "Be it in Catalan, Spanish or English, I have good communication skills.",
																nodeType: "text"
															}
														],
														nodeType: BLOCKS.PARAGRAPH
													}
												],
												nodeType: BLOCKS.DOCUMENT
											},
											icon: "M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"
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
								id: "d3EYigAI2Y2bwfxgUQDUk",
								type: "Entry",
								createdAt: "2021-11-11T10:33:03.310Z",
								updatedAt: "2021-11-11T10:33:03.310Z",
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
										id: "groupBarAbilitiesList"
									}
								},
								locale: "en-US"
							},
							fields: {
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
											id: "3NEUuOzsxiPN2njEf1U3Cb",
											type: "Entry",
											createdAt: "2021-11-11T10:32:57.086Z",
											updatedAt: "2021-11-11T10:32:57.086Z",
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
											title: "Backend",
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
														id: "1g3A2XEDfAEsjBhKOTE1bJ",
														type: "Entry",
														createdAt: "2021-11-11T10:32:31.953Z",
														updatedAt: "2021-11-11T10:32:31.953Z",
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
														name: "Node.js",
														percentage: 70
													}
												}
											],
											titleColor: "#5487E2",
											barColor: "#406CB9"
										}
									}
								]
							}
						}
					]
				}
			},
			stripe: true
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
			id: "8n6L6DxOfxrxSyQIlOCET",
			type: "Entry",
			createdAt: "2021-11-11T14:29:30.609Z",
			updatedAt: "2021-11-11T14:37:34.974Z",
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
					id: "page"
				}
			},
			locale: "en-US"
		},
		fields: {
			id: "find-me",
			name: "Find me",
			type: "FindMePage",
			content: {
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
					id: "6DsikxcaFjleDhRFaDVpgg",
					type: "Entry",
					createdAt: "2021-11-11T14:28:47.919Z",
					updatedAt: "2021-11-23T10:55:02.657Z",
					environment: {
						sys: {
							id: "master",
							type: "Link",
							linkType: "Environment"
						}
					},
					revision: 7,
					contentType: {
						sys: {
							type: "Link",
							linkType: "ContentType",
							id: "findMePage"
						}
					},
					locale: "en-US"
				},
				fields: {
					title: "Find me",
					text: {
						nodeType: BLOCKS.DOCUMENT,
						data: {},
						content: [
							{
								nodeType: BLOCKS.PARAGRAPH,
								content: [
									{
										nodeType: "text",
										value: "Do you want to work on a project with me or have any kind of doubt?",
										marks: [],
										data: {}
									}
								],
								data: {}
							},
							{
								nodeType: BLOCKS.PARAGRAPH,
								content: [
									{
										nodeType: "text",
										value: "You can find me in ",
										marks: [],
										data: {}
									},
									{
										nodeType: INLINES.HYPERLINK,
										content: [
											{
												nodeType: "text",
												value: "contact@gmail.com",
												marks: [],
												data: {}
											}
										],
										data: {
											uri: "mailto:contact@gmail.com"
										}
									},
									{
										nodeType: "text",
										value: ".",
										marks: [],
										data: {}
									}
								],
								data: {}
							}
						]
					}
				}
			},
			stripe: false
		}
	}
];

beforeEach(() => {
	mockedGetEntries.mockReset();
});

describe("getStaticProps()", () => {
	const locale = "EN-US";
	it("Successful", async () => {
		mockedGetEntries.mockResolvedValue({ pages: defaultPages });
		return expect(getStaticProps({ params: {}, locale })).resolves;
	});
});
describe("Home", () => {
	it("Snapshot and accessibility tests", async () => {
		const { container } = customRender(<Home content={{ pages: defaultPages }} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
	it("Snapshot and accessibility tests after switch to dark mode", async () => {
		const { container, findByRole } = customRender(<Home content={{ pages: defaultPages }} />);

		const switchInput = await findByRole("checkbox");
		fireEvent.click(switchInput);

		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	it("On Menu Element click, the scrollFunction is called", async () => {
		const { findByText } = customRender(<Home content={{ pages: defaultPages }} />);

		const presentationButton = await findByText("Presentation");
		fireEvent.click(presentationButton);

		expect(mockedScrollTo).toHaveBeenCalled();
	});
});
