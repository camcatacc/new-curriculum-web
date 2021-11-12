import type { Variants } from "framer-motion";

export function getMotionFromOutsideOptions(animated: boolean, animatedDirection: "fromLeft" | "fromRight" | "fromBottom") {
	if (!animated) return {};
	let initialX = 0,
		initialY = 0;

	switch (animatedDirection) {
		case "fromLeft":
			initialX = -50;
			break;
		case "fromRight":
			initialX = 50;
			break;
		case "fromBottom":
			initialY = 50;
			break;
	}

	const variants: Variants = {
		offscreen: {
			x: initialX,
			y: initialY,
			opacity: 0
		},
		onscreen: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 1,
				when: "beforeChildren"
			}
		}
	};

	return {
		variants,
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: { once: true, amount: 0.6 }
	};
}

export default getMotionFromOutsideOptions;
