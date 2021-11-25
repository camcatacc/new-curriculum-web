// Redux
import store from "redux/store";
import { RootState } from "redux/types";
import { initialState as uiInitialState } from "redux/ui/ui";
import { initialState as contactInitialState } from "redux/contact/contact";

// Default Props
export const defaultTestRootState: RootState = {
	ui: uiInitialState,
	contact: contactInitialState
};

// Tests
describe("The redux store", () => {
	it("should initialize the store with set defaults (empty)", () => {
		expect(store.getState()).toStrictEqual(defaultTestRootState);
	});
});
