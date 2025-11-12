import gsap from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';
import useAppStore from '~/store/useAppStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
	const equalPath: boolean = to.fullPath === from.fullPath;

	const $store = useAppStore();
	await until(() => $store.isReady).toBe(true);

	await new Promise<void>(resolve => {
		if (import.meta.client) {
			gsap.to('#page-transition', {
				opacity: equalPath ? 0 : 1,
				duration: GSAPDuration.FAST,
				ease: GSAPEase.SLOW_IN_OUT,
				onComplete: () => {
					resolve();
					const $store = useAppStore();
					$store.setTheme(
						to.name === 'enterprise' ? 'theme-dark' : 'theme-light'
					);
				},
			});
		} else {
			resolve();
		}
	});
});
