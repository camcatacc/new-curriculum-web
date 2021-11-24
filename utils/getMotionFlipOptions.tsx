// Definitions
import type { MotionProps, Variants } from "framer-motion";

export interface GetMotionFlipOptionsOptions {
	amount?: number;
	delay?: number;
}

// Functions
function getMotionFlipOptions(animated: boolean, { amount, delay }: GetMotionFlipOptionsOptions): MotionProps {
	if (!animated) return {};
	const variants = getMotionFlipVariants(animated, delay);
	return {
		variants: variants,
		viewport: {
			amount,
			once: true
		},
		initial: "offscreen",
		whileInView: "onscreen"
	};
}

export function getMotionFlipVariants(animated: boolean, delay?: number): Variants {
	if (!animated) return {};
	return {
		offscreen: {
			rotateY: 90,
			opacity: 0
		},
		onscreen: { rotateY: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
	};
}

export default getMotionFlipOptions;
