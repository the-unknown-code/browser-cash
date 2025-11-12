<template>
	<section class="blog-hero">
		<div class="blog-hero__media">
			<nuxt-img
				:src="storyblokFormat(block.image.src, 1440)"
				:alt="block.image.alt"
				quality="80"
				format="webp"
				draggable="false"
				priority="eager"
			/>
			<div class="blog-hero__media__content">
				<hgroup>
					<h1 ref="$title" class="h3">
						{{ block.title }}
					</h1>
					<div class="title-info">
						<span
							:ref="(el) => $info.push(el as HTMLElement)"
							class="caption"
							>{{ block.category }}</span
						>
						<span :ref="(el) => $info.push(el as HTMLElement)" class="caption">
							{{ block.reading_time }} mins read
						</span>
					</div>
				</hgroup>
			</div>
		</div>
		<div v-if="!article" class="blog-hero__cta">
			<ui-cta
				label="Read more"
				:href="resolveLink(`/blog/${block.slug}`)"
				:type="BUTTON_TYPES.PRIMARY"
			/>
		</div>
	</section>
	<blog-article v-if="article" :block="block" />
</template>

<script setup lang="ts">
import gsap, { SplitText } from 'gsap/all';
import { generateHead } from '~/libs/common/utils';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';
import { BUTTON_TYPES } from '~/libs/constants/ui';
import { resolveLink, storyblokFormat } from '~/libs/storyblok/utils';

const props = defineProps({
	block: {
		type: Object as PropType<any>,
		required: true,
	},
	article: {
		type: Boolean,
		default: false,
	},
});

if (props.article) {
	useHead(
		generateHead(
			`Browser Cash - ${props.block.title}`,
			props.block.short_description,
			storyblokFormat(props.block.image.src, 1200, 1.9)
		)
	);
}

const $title = ref<HTMLElement | null>(null);
const $info = ref<HTMLElement[]>([]);
const { width } = useWindowSize();
const scope = effectScope();
let splitInstance: SplitText | null = null; // store reference to current SplitText

const initialize = useDebounceFn(() => {
	if (splitInstance) {
		splitInstance.revert();
		splitInstance = null;
	}

	splitInstance = new SplitText($title.value, {
		type: 'lines',
	});

	gsap.to([splitInstance.lines, $info.value], {
		opacity: 1,
		duration: GSAPDuration.DEFAULT,
		ease: GSAPEase.SLOW_IN_OUT,
		stagger: 0.1,
	});
}, 100);

scope.run(async () => {
	watch(width, async () => {
		await nextTick();
		initialize();
	});
});

tryOnMounted(async () => {
	await nextTick();
	initialize();
});
</script>

<style lang="scss" scoped>
.blog-hero {
	position: relative;
	width: 100%;
	padding-top: var(--spacer-96);

	&__cta {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: var(--spacer-16);
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	&__media {
		position: relative;
		width: 100vw;
		left: 50%;
		transform: translateX(-50%);
		aspect-ratio: 3/4;

		@include desktop {
			aspect-ratio: 16/9;
		}

		img {
			@include fill(absolute);
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			max-inline-size: none;
			max-block-size: none;
		}

		&__content {
			position: absolute;
			left: 0;
			width: 50%;

			@include mobile {
				top: 0;
				width: 100%;
				max-width: 420px;
			}

			@include desktop {
				top: 0;
				width: 50%;
			}

			hgroup {
				position: relative;
				left: calc(var(--spacer-16) * 1);
			}

			.title-info {
				position: relative;
				display: flex;
				margin-top: -1px;

				> span {
					position: relative;
					padding: var(--spacer-16) var(--spacer-16);
					background-color: var(--yellow);
					border: 1px solid var(--black);
					display: block;
					opacity: 0;

					&:nth-child(1) {
						text-transform: uppercase;
					}

					&:nth-child(2) {
						border-left: none;
					}
				}
			}

			h1 {
				position: relative;

				&:deep(div) {
					display: inline-flex !important;
					background-color: var(--white);
					border: 1px solid var(--black);
					padding: var(--spacer-4) var(--spacer-8);
					opacity: 0;

					&:not(:first-child) {
						margin-top: -1px;
					}
				}
			}
		}
	}
}
</style>
