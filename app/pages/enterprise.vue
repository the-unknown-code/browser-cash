<template>
	<storyblok-wrapper url="enterprise">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-enterprise layout-block">
				<enterprise-hero />
				<layout-companies enterprise :block="parseCompanies(story)" />
				<enterprise-grid />
				<enterprise-accuracy />
				<enterprise-pricing />
				<enterprise-ready />
				<layout-faq :theme="THEMES.DARK" />
				<enterprise-form />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import { THEMES } from '~/libs/constants/ui';
import { parseCompanies } from '~/libs/storyblok/parser';
</script>

<style lang="scss" scoped></style>
