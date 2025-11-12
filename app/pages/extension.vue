<template>
	<storyblok-wrapper url="extension">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-extension layout-block">
				<extension-hero />
				<home-airdrop />
				<home-reward />
				<layout-companies :block="parseCompanies(story)" />
				<layout-faq :block="parseFaq(story)" />
				<extension-pre-footer />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import { parseCompanies, parseFaq } from '~/libs/storyblok/parser';
</script>

<style lang="scss" scoped></style>
