<template>
	<article ref="$article" class="blog-article layout-grid">
		<div>
			<div class="blog-article__info">
				<p class="caption">{{ block.category }}</p>
				<p class="caption">{{ block.reading_time }} mins read</p>
			</div>
		</div>
		<div class="blog-article__content">
			<template v-for="item in block.content" :key="item.type">
				<h2 v-if="item.type === ARTICLE_CONTENT_TYPES.TITLE" class="p-big">
					{{ item.text }}
				</h2>
				<p
					v-else-if="item.type === ARTICLE_CONTENT_TYPES.PARAGRAPH"
					class="paragraph p-small"
				>
					<span v-html="item.text" />
				</p>
				<nuxt-img
					v-else-if="item.type === ARTICLE_CONTENT_TYPES.MEDIA"
					loading="lazy"
					format="webp"
					:quality="80"
					:src="item.media.src"
					:alt="item.media.alt"
					draggable="false"
				/>
				<ui-cta
					v-if="item.type === ARTICLE_CONTENT_TYPES.LINK"
					:label="item.label"
					:href="item.url"
					:type="item.isButtton ? BUTTON_TYPES.PRIMARY : BUTTON_TYPES.SECONDARY"
				/>
			</template>
			<p v-if="block.author && block.author !== ''" class="caption">
				<span>Author: {{ block.author }}</span>
			</p>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ARTICLE_CONTENT_TYPES, BUTTON_TYPES } from '~/libs/constants/ui';

defineProps({
	block: {
		type: Object as PropType<any>,
		required: true,
	},
});

const $article = ref<HTMLElement | null>(null);
const scope = effectScope();

scope.run(async () => {
	useLenis(({ progress }) => {
		if (!$article.value) return;
		$article.value.style.setProperty('--progress', `${progress * 120}px`);
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});
</script>

<style lang="scss" scoped>
.blog-article {
	$desktop-width: 1024px;

	padding: var(--spacer-64) 0;

	> div {
		grid-column: -1 / 1;
	}

	@media screen and (min-width: $desktop-width) {
		> div {
			&:nth-child(1) {
				grid-column: 2 / span 1;
			}
			&:nth-child(2) {
				grid-column: 4 / span 7;
			}
		}
	}

	&__info {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--spacer-8);
		margin-bottom: var(--spacer-32);

		@media screen and (min-width: $desktop-width) {
			position: sticky;
			margin-bottom: 0;
			top: var(--spacer-96);

			&::before,
			&::after {
				content: '';
				position: absolute;
				width: 1px;
				height: 120px;
				background-color: var(--yellow);
				right: 0;
				top: 0;
			}

			&::after {
				background-color: var(--black);
				height: var(--progress);
			}
		}

		p {
			&:first-child {
				text-transform: uppercase;
			}
		}
	}

	&__content {
		> * {
			position: relative;
			margin: var(--spacer-32) 0;

			&:first-child {
				margin-top: 0;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}

		p {
			&.paragraph {
				&:deep(strong),
				&:deep(bold) {
					font-weight: 600;
				}

				&:deep(u) {
					text-decoration: underline;
				}
			}
		}

		img {
			width: 100%;
			height: auto;
			max-inline-size: none;
			max-block-size: none;
		}
	}
}
</style>
