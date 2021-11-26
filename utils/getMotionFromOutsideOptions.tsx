// Definitions
import type { MotionProps, Variants } from "framer-motion";

export type AnimatedDirection = "fromLeft" | "fromRight" | "fromBottom";

// Functions
export function getOnScrollMotionFromOutsideOptions(animated: boolean, animatedDirection: AnimatedDirection, delay?: number): MotionProps {
	if (!animated) return {};

	const { initial, animation } = getMotionFromOutsideVariants(animatedDirection, delay);

	const variants: Variants = {
		offscreen: initial,
		onscreen: animation
	};

	return {
		variants,
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: { once: true, amount: 0.6 }
	};
}

export function getMotionFromOutsideVariants(animatedDirection: AnimatedDirection, delay?: number): Variants {
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
	return {
		initial: { x: initialX, y: initialY, opacity: 0 },
		animation: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 1,
				delay: delay,
				when: "beforeChildren"
			}
		}
	};
}

export default getOnScrollMotionFromOutsideOptions;
