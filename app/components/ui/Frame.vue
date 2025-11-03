<script setup lang="ts"></script>

<template>
	<div class="ui-frame">
		<div />
	</div>
</template>

<style lang="scss" scoped>
.ui-frame {
	@include fill(fixed);
	min-height: 100lvh;
	padding: var(--spacer-16);
	pointer-events: none;
	z-index: 9999;

	> div {
		@include fill(relative);
		width: 100%;
		height: 100%;
		border: 1px solid var(--black);
	}
}
</style>
