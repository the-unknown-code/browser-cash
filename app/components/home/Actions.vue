<template>
	<section class="home-actions">
		<ui-text-block :block="block" />
	</section>
</template>

<script setup lang="ts">
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
			label: 'Download extension',
			href: '/extension',
			type: BUTTON_TYPES.SECONDARY,
		},
	],
};
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
