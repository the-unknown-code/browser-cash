<template>
	<section class="home-tasks">
		<div ref="$tasks">
			<ui-text-block :block="block" />
		</div>
	</section>
	<div class="home-tasks__spacer" />
</template>

<script setup lang="ts">
import { EVENTS } from '~/libs/constants/event';
import { BUTTON_TYPES } from '~/libs/constants/ui';

const block = {
	title: 'Browsers worldwide performing real AI tasks in harmony',
	description: null,
	cta: [
		{
			label: 'Download extension',
			href: '/extension',
			type: BUTTON_TYPES.PRIMARY,
		},
	],
};

const { $emit } = useNuxtApp();
const $tasks = ref<HTMLElement | null>(null);
const { y } = useElementBounding($tasks);
const { height } = useWindowSize();
const scope = effectScope();

scope.run(async () => {
	watch(y, () => {
		if (y.value < height.value / 2 && y.value > 0) {
			$emit(EVENTS.PLAY_RIVE_TRIGGER, {
				identifier: 'main',
				trigger: 'tr_05',
			});
		} else if (y.value > height.value / 2 && y.value < height.value) {
			$emit(EVENTS.PLAY_RIVE_TRIGGER, {
				identifier: 'main',
				trigger: 'tr_03',
			});
		}
	});
});
</script>

<style lang="scss" scoped>
.home-tasks {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		justify-content: center;
	}

	&__spacer {
		position: relative;
		height: 100lvh;
	}
}
</style>
