<template>
	<section class="extension-hero">
		<hgroup>
			<h1 role="heading" aria-level="1" class="h2">
				<animation-block>
					<span>Browser</span>
					<nuxt-img
						src="/images/smile.png"
						alt="Smiley"
						loading="lazy"
						quality="80"
						format="webp"
						class="icon"
					/>
					<span>Cash</span>
				</animation-block>
				<animation-block :delay="0.1">
					<span>Power the future</span>
				</animation-block>
				<animation-block :delay="0.2">
					<span>of AI</span>
					<nuxt-img
						src="/images/stars.png"
						alt="Stars"
						loading="lazy"
						quality="80"
						format="webp"
						class="icon"
					/>
					<span>browser</span>
				</animation-block>
				<animation-block :delay="0.3">
					<span>agents.</span>
					<ui-cta
						:type="BUTTON_TYPES.PRIMARY"
						href="/extension"
						label="Download  extension"
						icon="/images/arrow.svg"
					/>
				</animation-block>
			</h1>
		</hgroup>

		<client-only>
			<div class="extension-hero__rive">
				<canvas-rive
					:params="{
						src: '/rive/extension/main.riv',
						layout: new Layout({
							fit: Fit.Contain,
						}),
					}"
				/>
			</div>
		</client-only>

		<div v-show="isDesktop" class="extension-hero__cta">
			<ui-cta
				:type="BUTTON_TYPES.PRIMARY"
				href="https://www.google.com"
				label="Download for Chrome"
				icon="/images/chrome.svg"
			/>
			<ui-cta
				:type="BUTTON_TYPES.PRIMARY"
				href="https://www.google.com"
				label="Download for Windows"
				icon="/images/windows.svg"
			/>
			<ui-cta
				:type="BUTTON_TYPES.PRIMARY"
				href="https://www.google.com"
				label="Download for Linux"
				icon="/images/linux.svg"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Fit, Layout } from '@rive-app/canvas-lite';
import { BUTTON_TYPES } from '~/libs/constants/ui';
const { isDesktop } = useBreakpoints();
</script>

<style lang="scss" scoped>
.extension-hero {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		min-height: 100lvh;
		justify-content: center;
	}

	&__cta {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacer-16);

		@include desktop {
			position: absolute;
			flex-direction: row;
			bottom: var(--spacer-64);
			left: 0;
			width: 100%;
			margin-top: var(--spacer-64);
			align-items: center;
			justify-content: center;
		}

		&:deep(.ui-cta) {
			max-width: 320px;

			span {
				order: 2;
			}

			@include desktop {
				max-width: unset;
			}

			@include mobile {
				width: 100%;

				a {
					width: 100%;
				}

				.ui-cta--content {
					justify-content: center;
					width: 100%;
				}
			}
		}

		&:deep(.svg-mask) {
			order: 1;
		}
	}

	&__rive {
		position: relative;
		aspect-ratio: 1.75;
		width: 200%;
		left: -100%;
		z-index: -1;

		@include desktop {
			@include fill(absolute);
			aspect-ratio: unset;
			width: 100%;
			left: 0;
		}
	}

	hgroup {
		position: relative;
		transform: translate(calc(var(--spacer-16) * -1), 0);
		margin-top: calc(var(--spacer-64) * 2);

		@include desktop {
			transform: translate(calc(var(--spacer-16) * -1), 0);
			margin-top: 0;
		}

		h1 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			@include desktop {
				@include h1;
			}

			> * {
				margin-top: -1px;
			}
		}

		img {
			width: auto;
			height: 30px;

			@include desktop {
				height: 80px;
			}
		}
	}
}
</style>
