<template>
	<section class="home-actions">
		<div ref="$actions">
			<ui-text-block :block="block" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { EVENTS } from '~/libs/constants/event';
import { BUTTON_TYPES } from '~/libs/constants/ui';

const block = {
	title: 'Your browser powers real AI actions',
	description:
		'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history.',
	cta: [
		{
			label: 'Download extension',
			href: '/extension',
			type: BUTTON_TYPES.PRIMARY,
		},
		{
			label: 'Learn about airdrop',
			href: 'https://www.google.com',
			type: BUTTON_TYPES.SECONDARY,
		},
	],
};

const { $emit } = useNuxtApp();
const $actions = ref<HTMLElement | null>(null);
const { y } = useElementBounding($actions);
const { height } = useWindowSize();
const scope = effectScope();

scope.run(async () => {
	watch(y, () => {
		if (y.value < height.value / 2 && y.value > 0) {
			$emit(EVENTS.PLAY_RIVE_TRIGGER, {
				identifier: 'main',
				trigger: 'tr_03',
			});
		} else if (y.value > height.value / 2 && y.value < height.value) {
			$emit(EVENTS.PLAY_RIVE_TRIGGER, {
				identifier: 'main',
				trigger: 'tr_01',
			});
		}
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});
</script>

<style lang="scss" scoped>
.home-actions {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		justify-content: center;
	}
}
</style>
