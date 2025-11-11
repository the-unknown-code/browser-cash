<script setup lang="ts"></script>

<template>
	<section class="blog-hero">
		<div class="blog-hero__media">
			<nuxt-img
				src="/images/placeholder/blog-header.png"
				alt="Blog Hero"
				quality="80"
				format="webp"
				draggable="false"
				priority="eager"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.blog-hero {
	position: relative;
	padding-top: var(--spacer-96);

	&__media {
		position: relative;
		width: 100%;

		@include desktop {
			aspect-ratio: 16/9;
		}

		img {
			@include fill(absolute);
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
}
</style>
