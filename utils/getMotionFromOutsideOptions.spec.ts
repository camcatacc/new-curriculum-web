// Modules
import getOnScrollMotionFromOutsideOptions, { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Tests
describe("getMotionFromOutsideVariants", () => {
	const animation = {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 1,
			delay: 100,
			when: "beforeChildren"
		}
	};

	it("fromLeft", () => {
		expect(getMotionFromOutsideVariants("fromLeft", 100)).toEqual({
			animation,
			initial: {
				x: -50,
				y: 0,
				opacity: 0
			}
		});
	});
	it("fromRight", () => {
		expect(getMotionFromOutsideVariants("fromRight", 100)).toEqual({
			animation,
			initial: {
				x: 50,
				y: 0,
				opacity: 0
			}
		});
	});
	it("fromBottom", () => {
		expect(getMotionFromOutsideVariants("fromBottom", 100)).toEqual({
			animation,
			initial: {
				x: 0,
				y: 50,
				opacity: 0
			}
		});
	});
});
describe("getOnScrollMotionFromOutsideOptions", () => {
	it("Returns empty object if animated is false", () => {
		expect(getOnScrollMotionFromOutsideOptions(false, "fromBottom")).toEqual({});
	});
	it("Returns the correct value", () => {
		const options = getOnScrollMotionFromOutsideOptions(true, "fromBottom", 100);
		const variants = getMotionFromOutsideVariants("fromBottom", 100);
		expect(options).toEqual({
			variants: { offscreen: variants.initial, onscreen: variants.animation },
			initial: "offscreen",
			whileInView: "onscreen",
			viewport: { once: true, amount: 0.6 }
		});
	});
});
