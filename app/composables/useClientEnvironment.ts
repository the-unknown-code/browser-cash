export const useClientEnvironment = () => {
	if (import.meta.server) {
		// We're on the server during SSR — return safe defaults
		return {
			isChrome: false,
			isWindows: false,
			isLinux: false,
			ua: '',
		};
	}

	const ua = navigator.userAgent.toLowerCase();

	const isChrome = /chrome/.test(ua) && !/edge|edg|opera/.test(ua); // exclude Edge & Opera which also contain "chrome"
	const isWindows = /windows/.test(ua);
	const isLinux = /linux/.test(ua) && !/android/.test(ua);

	return {
		isChrome,
		isWindows,
		isLinux,
		ua,
	};
};
