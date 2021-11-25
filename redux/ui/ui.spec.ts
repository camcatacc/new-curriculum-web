// Redux modules
import uiReducer, { initialState, isNightModeSelector, switchNightMode } from "redux/ui/ui";
import { defaultTestRootState } from "redux/store.test";

// Tests
describe("ui slice", () => {
	describe("reducer, actions and selectors", () => {
		it("should return the initial state on first run", () => {
			const nextState = initialState;
			const result = uiReducer(undefined, { type: "@@redux/init" });

			expect(result).toEqual(nextState);
		});

		it("should getIsNightMode", () => {
			expect(isNightModeSelector(defaultTestRootState)).toEqual(false);
		});

		it("switchNightMode should change", () => {
			expect(uiReducer(defaultTestRootState.ui, switchNightMode(true))).toEqual({ nightMode: true });
		});
	});
});
