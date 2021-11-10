import React, { useEffect, useState } from "react";

export default function useOnScreen(commonRef: React.MutableRefObject<(HTMLElement | null)[]>) {
	const [intersectingRefs, setIntersectingRefs] = useState<boolean[]>([true]);

	useEffect(() => {
		const observers = commonRef.current.map((_, i) => {
			return new IntersectionObserver(([entry]) => {
				setIntersectingRefs((current) => {
					const copyCurrent = [...current];
					copyCurrent[i] = entry.isIntersecting;
					return copyCurrent;
				});
			});
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
