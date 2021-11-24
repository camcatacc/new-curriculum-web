import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
export default appWithTranslation(MyApp);
