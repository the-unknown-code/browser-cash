<template>
	<span :class="['ui-label']" :style="{ '--color': color }">
		{{ label }}
	</span>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: false,
		default: 'var(--off-white)',
	},
});
</script>

<style lang="scss" scoped>
.ui-label {
	position: relative;
	display: inline-flex;
	padding: var(--spacer-4) var(--spacer-8);
	background-color: var(--color);
	border-radius: var(--spacer-16);
}
</style>
