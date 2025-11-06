<template>
	<div class="ui-logo-card">
		<common-svg-mask :svg="block.media" />
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
	}

	&:deep(.svg-mask) {
		width: 60%;
		aspect-ratio: 1;
		max-width: 160px;
		background-color: var(--black);
	}
}
</style>
