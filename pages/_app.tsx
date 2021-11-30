// Styles
import "tailwindcss/tailwind.css";

// Modules
import React from "react";
import { appWithTranslation } from "next-i18next";
import createEmotionCache from "utils/createEmotionCache";

// Redux
import { Provider } from "react-redux";
import { store } from "redux/store";

// Definitions
import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/utils";
import { CacheProvider } from "@emotion/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// App
function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps & { emotionCache?: EmotionCache }) {
	return (
		<CacheProvider value={emotionCache}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</CacheProvider>
	);
}

export default appWithTranslation(MyApp);
