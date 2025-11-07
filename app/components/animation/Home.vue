<template>
	<div class="animation-home">
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
import { Fit, Layout, type Rive } from '@rive-app/canvas-lite';

const $rive = ref<HTMLCanvasElement | null>(null);
const riveInstance: Ref<Rive | null> = ref(null);

tryOnMounted(async () => {
	await nextTick();
	//@ts-expect-error - riveInstance is not typed
	riveInstance.value = $rive.value?.riveInstance as Rive;
});
</script>

<style lang="scss" scoped>
.animation-home {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: -1;
}
</style>
