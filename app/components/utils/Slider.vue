<template>
	<div ref="$slider" class="utils-slider" data-slider>
		<slot />
	</div>
</template>

<script setup lang="ts">
import Core, { type CoreConfig, damp } from 'smooothy';
import Tempus from 'tempus';

const { options } = defineProps({
	options: {
		type: Object as PropType<CoreConfig>,
		required: false,
		default: () => ({}),
	},
});

const $slider = ref<HTMLElement | null>(null);
let slider: Core | null = null;
let unsubscribe: (() => void) | undefined = undefined;

const animate = () => {
	if (!slider) return;
	slider.update();
};

const initialize = () => {
	if (!$slider.value) return;

	const $parallax = $slider.value.querySelectorAll(
		'[data-parallax]'
	) as NodeListOf<HTMLElement>;

	slider = new Core($slider.value, {
		...options,

		// @ts-expect-error - lerpedSpeed is not typed
		onUpdate({
			speed,
			deltaTime,
			parallaxValues,
		}: {
			speed: number;
			deltaTime: number;
			parallaxValues: number[];
		}) {
			// @ts-expect-error - lerpedSpeed is not typed
			this.lerpedSpeed = damp(
				// @ts-expect-error - lerpedSpeed is not typed
				this.lerpedSpeed || 0,
				speed,
				7, // Damping factor
				deltaTime
			);

			$parallax.forEach((element: HTMLElement, i: number) => {
				// @ts-expect-error - parallaxValues is not typed
				const offset = parallaxValues[i] * Math.abs(this.lerpedSpeed) * 20;
				element.style.transform = `translate3d(${offset}%, ${offset}px, 0)`;
				element.style.setProperty(
					'--offset',
					//@ts-expect-error - lerpedSpeed is not typed
					(parallaxValues[i] * -this.lerpedSpeed * 20).toString()
				);
			});
		},
	});

	unsubscribe = Tempus.add(animate, { priority: 0 });
};

tryOnMounted(async () => {
	await nextTick();
	initialize();
});

tryOnBeforeUnmount(() => {
	unsubscribe?.();
	slider?.destroy();
});
</script>

<style lang="scss" scoped>
.utils-slider {
	position: relative;
	width: 100%;
}
</style>
