<template>
	<storyblok-wrapper url="home">
		<template #default="{ refreshKey }">
			<main :key="refreshKey" class="page-index layout-block">
				<client-only>
					<animation-home />
				</client-only>

				<home-hero />
				<home-actions />
				<home-tasks />
				<home-airdrop />
				<home-reward />
				<home-companies />
				<layout-faq />
				<home-pre-footer />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
