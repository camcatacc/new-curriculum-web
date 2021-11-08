import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import { appTheme } from "../styles/materialUi";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={appTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default appWithTranslation(MyApp);
