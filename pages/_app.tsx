// Styles
import "tailwindcss/tailwind.css";

// Modules
import React from "react";
import { appWithTranslation } from "next-i18next";

// Redux
import { Provider } from "react-redux";
import { store } from "redux/store";

// Definitions
import type { AppProps } from "next/app";

// App
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default appWithTranslation(MyApp);
