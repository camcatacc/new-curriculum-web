// Modules
import React, { useEffect, useState } from "react";

// Definitions
import { UseOnScreenOptions } from "utils/hooks/useOnScreen/interface";

// Hook
function useMultipleOnScreen(commonRef: React.MutableRefObject<(HTMLElement | null)[]>, options?: UseOnScreenOptions) {
	const [intersectingRefs, setIntersectingRefs] = useState<boolean[]>([true]);

	useEffect(() => {
		const observers = commonRef.current.map((_, i) => {
			return new IntersectionObserver(([entry]) => {
				setIntersectingRefs((current) => {
					const copyCurrent = [...current];
					copyCurrent[i] = entry.isIntersecting;
					return copyCurrent;
				});
			}, options);
		});

		observers.forEach((obs, i) => {
			let ref = commonRef.current[i];
			ref && obs.observe(ref);
		});

		return () => {
			observers.forEach((obs) => obs.disconnect());
		};
	}, []);

	return intersectingRefs;
}

export default useMultipleOnScreen;
