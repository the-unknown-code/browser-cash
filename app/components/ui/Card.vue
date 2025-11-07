<template>
	<div class="ui-card">
		<p class="mono">{{ block.description }}</p>
		<client-only>
			<div :class="['ui-card__rive', { right: block.right }]">
				<canvas-rive :params="{ src: block.rive }" />
			</div>
		</client-only>
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
.ui-card {
	position: relative;
	width: 100%;
	aspect-ratio: 1;
	border-radius: var(--spacer-24);
	border: 1.5px solid var(--black);
	background-color: var(--white);
	padding: var(--spacer-16);
	display: flex;
	align-items: flex-end;
	user-select: none;

	@include desktop {
		padding: var(--spacer-24);
	}

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--yellow);
		transform: translate(
			calc(var(--spacer-8) * -1 + var(--offset) * 1px),
			calc(var(--spacer-8) * 1)
		);
		border-radius: var(--spacer-24);
		border: 1.5px solid var(--black);
		z-index: -1;
	}

	p {
		text-wrap: balance;
		max-width: 320px;
	}

	&__rive {
		position: absolute;
		width: 65%;
		aspect-ratio: 1;
		top: 0;

		&.right {
			right: 0;
			transform: translate(calc(-5% + var(--offset) * 0.25%), -30%);
		}

		&:not(.right) {
			transform: translate(calc(5% - var(--offset) * 0.25%), -30%);
		}
	}
}
</style>
