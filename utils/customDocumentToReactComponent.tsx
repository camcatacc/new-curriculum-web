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
import type { PropTypes, Theme, TypographyVariant } from "@material-ui/core";

export interface CustomDocumentToReactComponentOptions {
	theme?: Theme;
	boldColor?: boolean;
	marginBottom?: 1 | 2 | 3 | 4 | 6 | 8 | 10;
	align?: PropTypes.Alignment;
	variant?: TypographyVariant;
}

// Function
function customDocumentToReactComponent(document: Document, { boldColor, marginBottom, align, variant, theme }: CustomDocumentToReactComponentOptions) {
	let options: Options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (_: any, children: any) => (
				<div className={marginBottom ? `mb-${marginBottom}` : ""}>
					<Paragraph variant={variant} align={align}>
						{children}
					</Paragraph>
				</div>
			)
		}
	};

	if (boldColor) {
		if (!options.renderMark) options = { ...options, renderMark: {} };
		options.renderMark![MARKS.BOLD] = (text) => <b style={{ color: theme ? theme.palette.secondary[theme.palette.type] : secondary }}>{text}</b>;
	}

	return documentToReactComponents(document, options);
}

export default customDocumentToReactComponent;
