// Modules
import React, { ReactElement } from "react";

// Testing modules
import { render, RenderOptions, RenderResult } from "@testing-library/react";

// Redux Modules
import { configureStore } from "@reduxjs/toolkit";

// Redux Components
import rootReducer from "redux/rootReducer";
import { Provider } from "react-redux";
import { defaultTestRootState } from "redux/store.test";

// Definitions
import type { RootState } from "redux/types";

// Functions
export const customRender = (ui: ReactElement, state: Partial<RootState> = defaultTestRootState, renderOptions?: RenderOptions): RenderResult => {
	const Wrapper: React.FC = ({ children }) => {
		const store = configureStore({
			reducer: rootReducer,
			preloadedState: state
		});

		return <Provider store={store}>{children}</Provider>;
	};

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
