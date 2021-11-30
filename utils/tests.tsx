// Modules
import React, { ReactElement } from "react";
import { ThemeProvider } from "@material-ui/styles";

// Testing modules
import { render, RenderOptions, RenderResult } from "@testing-library/react";

// Redux Modules
import { configureStore } from "@reduxjs/toolkit";

// Redux Components
import rootReducer from "redux/rootReducer";
import { Provider } from "react-redux";
import { defaultTestRootState } from "redux/store.test";

// Auxiliary functions
import { getMaterialTheme } from "styles/materialUi";

// Definitions
import type { RootState } from "redux/types";

// Functions
export const customRender = (ui: ReactElement, state: Partial<RootState> = defaultTestRootState, renderOptions?: RenderOptions & { darkMode?: boolean }): RenderResult => {
	const Wrapper: React.FC = ({ children }) => {
		const store = configureStore({
			reducer: rootReducer,
			preloadedState: state
		});

		return (
			<ThemeProvider theme={getMaterialTheme(renderOptions?.darkMode ? "dark" : "light")}>
				<Provider store={store}>{children}</Provider>
			</ThemeProvider>
		);
	};

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
