<template>
	<storyblok-wrapper url="home">
		<template #default="{ refreshKey }">
			<main :key="refreshKey" class="page-index layout-block">
				<!--
				<home-hero />
				<home-actions />
				<home-tasks />
				<home-airdrop />
				<home-reward />
				-->
				<home-companies />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
