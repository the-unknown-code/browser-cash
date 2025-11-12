<template>
	<div :class="['ui-logo-card', { full: block.full }]">
		<common-svg-mask v-if="!block.full" :svg="block.media.src" />
		<nuxt-img v-else :src="block.media.src" :alt="block.media.alt" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.ui-logo-card {
	position: relative;
	width: 100%;
	aspect-ratio: 1;
	border-radius: var(--spacer-24);
	border: 1.5px solid var(--black);
	background-color: var(--white);
	padding: var(--spacer-16);
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;

	&.full {
		background-color: var(--teal);

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
			padding: var(--spacer-16);
		}
	}

	@include desktop {
		padding: var(--spacer-24);
	}

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--teal);
		transform: translate(0, calc(var(--spacer-8) * 1));
		border-radius: var(--spacer-24);
		border: 1.5px solid var(--black);
		z-index: -1;

		@include desktop {
			transform: translate(
				0,
				calc(var(--spacer-8) * 1 + var(--velocity) * 32px)
			);
		}
	}

	&:deep(.svg-mask) {
		width: 60%;
		aspect-ratio: 1;
		max-width: 160px;
		background-color: var(--black);
	}
}
</style>
