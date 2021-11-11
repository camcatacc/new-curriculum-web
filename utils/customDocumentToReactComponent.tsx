// Modules
import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Styles
import { secondary } from "styles/customColors";

// Elements
import Paragraph from "components/atoms/Paragraph/Paragraph";

// Definitions
import type { Document } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";

export interface CustomDocumentToReactComponentOptions {
	splitParagraph?: boolean;
	boldColor?: boolean;
}

// Function
function customDocumentToReactComponent(document: Document, { splitParagraph, boldColor }: CustomDocumentToReactComponentOptions) {
	let options: Options = {};

	if (splitParagraph) {
		if (!options.renderNode) options = { ...options, renderNode: {} };
		options.renderNode![BLOCKS.PARAGRAPH] = (_: any, children: any) => (
			<div className="mb-8">
				<Paragraph>{children}</Paragraph>
			</div>
		);
	}

	if (boldColor) {
		if (!options.renderMark) options = { ...options, renderMark: {} };
		options.renderMark![MARKS.BOLD] = (text) => <b style={{ color: secondary }}>{text}</b>;
	}

	return documentToReactComponents(document, options);
}

export default customDocumentToReactComponent;
