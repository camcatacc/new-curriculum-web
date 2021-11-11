import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { black, darkGrey, primary, secondary, white } from "./customColors";

export const appTheme = createTheme({
	palette: {
		primary: {
			main: primary
		},
		secondary: {
			main: secondary
		},
		text: {
			primary: darkGrey,
			secondary: white
		}
	},
	typography: {
		fontFamily: ['"Segoe UI"'].join(","),
		h2: {
			fontWeight: 700,
			fontSize: "2rem",
			color: black
		},
		h3: {
			fontWeight: 600,
			fontSize: "1.2rem",
			color: black
		},
		body1: {
			fontWeight: 400,
			fontSize: "1.2rem",
			color: darkGrey
		},
		body2: {
			fontWeight: 200,
			fontSize: "1.2rem",
			color: darkGrey
		}
	}
});
