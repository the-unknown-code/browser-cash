<template>
	<section class="blog-hero">
		<div class="blog-hero__media">
			<nuxt-img
				:src="HERO.media"
				:alt="HERO.title"
				quality="80"
				format="webp"
				draggable="false"
				priority="eager"
			/>
			<div class="blog-hero__media__content">
				<hgroup>
					<h1 ref="$title" class="p-big">
						{{ HERO.title }}
					</h1>
					<div class="title-info">
						<span
							:ref="(el) => $info.push(el as HTMLElement)"
							class="caption"
							>{{ HERO.category }}</span
						>
						<span
							:ref="(el) => $info.push(el as HTMLElement)"
							class="caption"
							>{{ HERO.time }}</span
						>
					</div>
				</hgroup>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import gsap, { SplitText } from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';

const HERO = {
	media: '/images/placeholder/blog-header.png',
	title: 'Building a market research platform with Browser Cash deep research',
	category: 'Product Release',
	time: '5 min read',
};

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
	padding-top: var(--spacer-96);

	&__media {
		position: relative;
		width: 100%;
		aspect-ratio: 2/3;

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

		&__content {
			position: absolute;
			left: 0;
			width: 50%;

			@include mobile {
				bottom: 0;
				width: 100%;
				max-width: 420px;
			}

			@include desktop {
				top: 0;
				width: 50%;
			}

			hgroup {
				position: relative;
				left: calc(var(--spacer-16) * -1);
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
