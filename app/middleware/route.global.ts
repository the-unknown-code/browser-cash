import useAppStore from '~/store/useAppStore';

export default defineNuxtRouteMiddleware(to => {
	const $store = useAppStore();
	$store.setTheme(to.name === 'enterprise' ? 'theme-dark' : 'theme-light');
});
