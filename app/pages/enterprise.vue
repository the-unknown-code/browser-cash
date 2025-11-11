<template>
	<main class="page-enterprise layout-block">
		<enterprise-hero />
		<enterprise-companies />
		<enterprise-grid />
		<enterprise-accuracy />
		<enterprise-pricing />
		<enterprise-ready />
		<layout-faq :theme="THEMES.DARK" />
		<enterprise-form />
	</main>
</template>

<script setup lang="ts">
import { THEMES } from '~/libs/constants/ui';
</script>

<style lang="scss" scoped></style>
