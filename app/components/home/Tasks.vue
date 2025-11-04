<template>
	<section class="home-tasks">
		<ui-text-block :block="block" />
	</section>
</template>

<script setup lang="ts">
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
}
</style>
