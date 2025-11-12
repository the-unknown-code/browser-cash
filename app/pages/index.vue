<template>
	<storyblok-wrapper url="home">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-index layout-block">
				<client-only>
					<animation-home />
				</client-only>

				<home-hero />
				<home-actions />
				<home-tasks />
				<home-airdrop />
				<home-reward />
				<lazy-layout-companies :block="parseCompanies(story)" />
				<layout-faq />
				<home-pre-footer />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import { parseCompanies } from '~/libs/storyblok/parser';
</script>

<style lang="scss" scoped></style>
