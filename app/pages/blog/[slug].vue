<template>
	<storyblok-wrapper url="blog">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-blog-article layout-block">
				<blog-hero
					:article="true"
					:block="parseBlog(story.content.body[0], $route.params.slug as string)[0]"
				/>
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import { parseBlog } from '~/libs/storyblok/parser';
</script>

<style lang="scss" scoped></style>
