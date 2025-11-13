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
				<lazy-layout-faq :block="parseFaq(story)" />

				<layout-pre-footer
					v-if="parsePreFooter(story)"
					:type="parsePreFooter(story).type"
				/>

				<!--
				<home-pre-footer
					v-if="parsePreFooter(story).type === FOOTER_TYPES.CLASSIS"
				/>
				<extension-pre-footer
					v-else-if="parsePreFooter(story).type === FOOTER_TYPES.DOWNLOAD"
				/>
				<enterprise-form
					v-else-if="parsePreFooter(story).type === FOOTER_TYPES.FORM"
				/>
				-->
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import {
	parseCompanies,
	parseFaq,
	parsePreFooter,
} from '~/libs/storyblok/parser';
</script>

<style lang="scss" scoped></style>
