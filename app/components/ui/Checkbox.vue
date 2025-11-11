<template>
	<div :class="['ui-checkbox', { active }]" @click="active = !active">
		<div class="ui-checkbox--item" />
		<span class="ui-checkbox--label p-tiny" v-html="label" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
});

const active = ref(false);
</script>

<style lang="scss" scoped>
.ui-checkbox {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	gap: var(--spacer-8);
	user-select: none;
	cursor: pointer;

	&.active {
		.ui-checkbox--item {
			&::before {
				opacity: 1;
			}
		}
	}

	&--item {
		position: relative;
		width: 16px;
		height: 16px;
		border: 1px solid var(--black);
		border-radius: var(--spacer-4);

		&::before {
			content: '';
			@include fill(absolute);
			width: 10px;
			height: 10px;
			left: 50%;
			top: 50%;
			transform: translateY(-50%) translateX(-50%);
			background-color: var(--black);
			border-radius: var(--spacer-2);
			opacity: 0;

			transition: opacity var(--duration-fast) var(--ease-in-out-circ);
		}
	}

	&:deep(u) {
		text-decoration: underline;
	}
}
</style>
