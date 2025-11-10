<template>
	<div :class="['ui-frame', $store.theme]">
		<div />
	</div>
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
</script>

<style lang="scss" scoped>
.ui-frame {
	@include fill(fixed);
	min-height: 100lvh;
	padding: var(--spacer-16);
	pointer-events: none;
	z-index: 9999;
	border: var(--spacer-16) solid var(--white);
	border-collapse: collapse;

	&:where(.theme-dark) {
		border-color: var(--off-white);
	}

	> div {
		@include fill(absolute);
		width: 100%;
		height: 100%;
		border: 1px solid var(--black);
	}
}
</style>
