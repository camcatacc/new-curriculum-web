// Modules
import createCache from "@emotion/cache";

// Functions
export default function createEmotionCache() {
	return createCache({ key: "css" });
}
