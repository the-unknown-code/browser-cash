<template>
	<div ref="$section" class="animation-home">
		<canvas-rive
			ref="$rive"
			:identifier="'main'"
			:params="{
				stateMachines: ['State Machine 1'],
				animations: ['01', '02', '03', '04', '05'],
				src: '/rive/main_updated.riv',
				layout: new Layout({ fit: Fit.Cover }),
			}"
		/>
	</div>
</template>

<script setup lang="ts">
import gsap from 'gsap/all';
import { Fit, Layout, type Rive } from '@rive-app/canvas-lite';
import type { Handler } from 'mitt';
import { EVENTS } from '~/libs/constants/event';

const { $on, $off } = useNuxtApp();
const $section = ref<HTMLElement | null>(null);
const $rive = ref<HTMLCanvasElement | null>(null);
const riveInstance: Ref<Rive | null> = ref(null);

const animate = (scroll: number) => {
	gsap.killTweensOf($section.value);
	gsap.to($section.value, { y: scroll, ease: 'expo.out', duration: 0.25 });
};

tryOnMounted(async () => {
	await nextTick();
	//@ts-expect-error - riveInstance is not typed
	riveInstance.value = $rive.value?.riveInstance as Rive;
	$on(EVENTS.SPACER_SCROLL, animate as Handler);
});

tryOnBeforeUnmount(() => {
	$off(EVENTS.SPACER_SCROLL, animate as Handler);
});
</script>

<style lang="scss" scoped>
.animation-home {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	pointer-events: none;
	z-index: -1;
}
</style>
