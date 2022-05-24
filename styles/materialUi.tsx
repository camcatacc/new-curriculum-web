import { createTheme } from "@material-ui/core/styles";
import { primary, secondary } from "styles/customColors";

export const theme = createTheme({
	palette: {
		type: "light",
		primary: { main: primary },
		secondary: { main: secondary }
	},
	typography: {
		fontFamily: ['"Arial"'].join(","),
		h2: { fontFamily: ['"Segoe UI"'].join(","), fontWeight: 700, fontSize: "1.6rem" },
		h3: { fontWeight: 600, fontSize: "1.1rem" },
		body1: { fontWeight: 400, fontSize: "1.2rem" },
		body2: { fontWeight: 200, fontSize: "1rem" }
	}
});
