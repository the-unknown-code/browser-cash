<template>
	<canvas ref="$canvas" class="canvas-rive"></canvas>
</template>

<script setup lang="ts">
import { Fit, Layout, Rive, type RiveParameters } from '@rive-app/canvas-lite';

const props = defineProps({
	params: {
		type: Object as PropType<RiveParameters>,
		required: true,
	},
});

const $canvas = ref<HTMLCanvasElement | null>(null);
let riveInstance: Rive | null = null;

tryOnMounted(() => {
	riveInstance = new Rive({
		...props.params,
		canvas: $canvas.value as HTMLCanvasElement,
		useOffscreenRenderer: true,
		autoplay: true,
		layout: new Layout({ fit: Fit.Contain }),
		//stateMachines: 'bumpy',
		onLoad: () => {
			riveInstance?.resizeDrawingSurfaceToCanvas();
		},
	});
});
</script>

<style lang="scss" scoped>
.canvas-rive {
	@include fill(absolute);
	width: 100%;
	height: 100%;
	z-index: 0;
}
</style>
