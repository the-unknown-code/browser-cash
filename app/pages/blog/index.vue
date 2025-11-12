<template>
	<storyblok-wrapper url="blog">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-blog layout-block">
				<storyblok-map :blocks="story.content.body" :refresh-key="refreshKey" />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
