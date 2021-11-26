// Modules
import React, { useEffect, useState } from "react";

// Definitions
import { UseOnScreenOptions } from "utils/hooks/useOnScreen/interface";

// Hook
function useMultipleOnScreen(ref: React.MutableRefObject<HTMLElement | null>, options?: UseOnScreenOptions) {
	const [intersectingRefs, setIntersectingRefs] = useState<boolean>(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIntersectingRefs(entry.isIntersecting), options);

		ref.current && observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return intersectingRefs;
}

export default useMultipleOnScreen;
