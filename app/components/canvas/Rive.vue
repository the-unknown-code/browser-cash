<template>
	<canvas ref="$canvas" class="canvas-rive"></canvas>
</template>

<script setup lang="ts">
import {
	Fit,
	Layout,
	Rive,
	type StateMachineInput,
	type RiveParameters,
} from '@rive-app/canvas-lite';
import type { Handler } from 'mitt';
import { EVENTS } from '~/libs/constants/event';

const props = defineProps({
	identifier: {
		type: String,
		required: false,
		default: 'rive',
	},
	params: {
		type: Object as PropType<RiveParameters>,
		required: true,
	},
});

const { $on, $off } = useNuxtApp();
const $canvas = ref<HTMLCanvasElement | null>(null);
let riveInstance: Rive | null = null;
let inputs: StateMachineInput[] = [];
const scope = effectScope();
// let currentTrigger: string = '';

const resizeRive = useDebounceFn(() => {
	riveInstance?.resizeDrawingSurfaceToCanvas();
}, 10);

useResizeObserver($canvas, resizeRive);

const initializeRive = async () => {
	riveInstance = new Rive({
		...props.params,
		canvas: $canvas.value as HTMLCanvasElement,
		useOffscreenRenderer: true,
		autoplay: true,
		layout: props.params.layout || new Layout({ fit: Fit.Contain }),
		onLoad: () => {
			riveInstance?.resizeDrawingSurfaceToCanvas();
			inputs = riveInstance?.stateMachineInputs(
				'State Machine 1'
			) as StateMachineInput[];
		},
	});
};

const onPlayRiveTrigger = ({
	identifier,
	trigger,
}: {
	identifier: string;
	trigger: string;
}) => {
	if (identifier !== props.identifier) return;

	const input = inputs.find(input => input.name === trigger);
	input?.fire();
};

const initializeListeners = () => {
	$on(EVENTS.PLAY_RIVE_TRIGGER, onPlayRiveTrigger as Handler);
};

const visible = useElementVisibility($canvas);
scope.run(async () => {
	watch(
		visible,
		() => {
			if (riveInstance) {
				riveInstance[visible.value ? 'startRendering' : 'stopRendering']();
			}
		},
		{ immediate: true }
	);
});

tryOnMounted(async () => {
	await nextTick();
	initializeRive();
	initializeListeners();
});

tryOnBeforeUnmount(() => {
	$off(EVENTS.PLAY_RIVE_TRIGGER, onPlayRiveTrigger as Handler);
	riveInstance?.cleanup();
});

defineExpose({
	riveInstance,
});
</script>

<style lang="scss" scoped>
.canvas-rive {
	@include fill(absolute);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}
</style>
