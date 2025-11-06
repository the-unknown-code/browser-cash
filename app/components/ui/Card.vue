<template>
	<div class="ui-card">
		<p class="mono">{{ block.description }}</p>
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
}
</style>
