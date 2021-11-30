import getMotionFlipOptions, { getMotionFlipVariants } from "utils/getMotionFlipOptions";

describe("getMotionFlipVariants", () => {
	it("Returns empty object if animated is false", () => {
		expect(getMotionFlipVariants(false)).toEqual({});
	});
	it("Returns correct object if animated is true", () => {
		expect(getMotionFlipVariants(true, 100)).toEqual({
			offscreen: {
				rotateY: 90,
				opacity: 0
			},
			onscreen: { rotateY: 0, opacity: 1, transition: { duration: 0.5, delay: 100 } }
		});
	});
});

describe("getMotionFlipOptions", () => {
	it("Returns empty object if animated is false", () => {
		expect(getMotionFlipOptions(false, {})).toEqual({});
	});
	it("Returns correct object if animated is true", () => {
		expect(getMotionFlipOptions(true, { amount: 100, delay: 100 })).toEqual({
			variants: getMotionFlipVariants(true, 100),
			viewport: {
				amount: 100,
				once: true
			},
			initial: "offscreen",
			whileInView: "onscreen"
		});
	});
});
