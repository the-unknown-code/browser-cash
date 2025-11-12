<template>
	<transition mode="out-in" @enter="onEnter" @before-enter="onBeforeEnter">
		<slot />
	</transition>
	<!-- CUSTOM PAGE TRANSITION -->
	<client-only>
		<teleport to="body">
			<div id="page-transition" ref="$transition" :class="[$store.theme]" />
		</teleport>
	</client-only>
</template>

<script setup lang="ts">
import gsap from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';
import useAppStore from '~/store/useAppStore';

const { hook } = useNuxtApp();
const $transition = ref<HTMLElement | null>(null);
const lenis = useLenis();
const $store = useAppStore();

// ---- TRANSITION HOOKS ----

const onBeforeEnter = async () => {
	$store.enable();

	if (lenis.value) {
		await nextTick();
		lenis.value.scrollTo(0, { immediate: true, force: true });
	}
};

const onEnter = async (e: Element, done: () => void) => {
	$store.enable();
	done();
};

hook('page:start', () => {
	$store.disable();
});

hook('page:finish', () => {
	setTimeout(async () => {
		await nextTick();
		gsap.to($transition.value, {
			opacity: 0,
			duration: GSAPDuration.DEFAULT,
			ease: GSAPEase.SLOW_IN_OUT,
		});
	}, 0);
});
</script>

<style lang="scss" scoped>
#page-transition {
	@include fill(fixed);
	opacity: 1;
	z-index: 9999;
	pointer-events: none;

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--yellow);
		opacity: 1;
		z-index: 1;
		transition: background-color var(--duration-fast) var(--ease-in-out-circ);
	}

	&.theme-dark {
		&::before {
			background-color: var(--teal);
		}
	}
}
</style>
