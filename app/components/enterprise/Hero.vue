<template>
	<section class="enterprise-hero">
		<hgroup>
			<h1 role="heading" aria-level="1" class="h2">
				<animation-block>
					<span>Emphasize</span>
				</animation-block>
				<animation-block :delay="0.1">
					<span>scalability,</span>
					<nuxt-img
						src="/images/stars.png"
						alt="Stars"
						loading="lazy"
						quality="80"
						format="webp"
						class="icon"
					/>
				</animation-block>
				<animation-block :delay="0.2">
					<span>automation</span>
				</animation-block>
				<animation-block :delay="0.3">
					<span>agents.</span>
					<ui-cta
						:type="BUTTON_TYPES.INVERTED"
						href="https://www.google.com"
						label="Sign Up Now"
					/>
				</animation-block>
			</h1>
		</hgroup>
		<client-only>
			<div class="enterprise-hero__rive">
				<canvas-rive
					:params="{
						src: '/rive/enterprise/main.riv',
						layout: new Layout({
							fit: Fit.Contain,
							alignment: Alignment.BottomRight,
						}),
					}"
				/>
			</div>
		</client-only>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
import { BUTTON_TYPES } from '~/libs/constants/ui';
</script>

<style lang="scss" scoped>
.enterprise-hero {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		min-height: 100lvh;
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

	@include desktop {
		justify-content: center;
	}

	hgroup {
		position: relative;
		transform: translate(calc(var(--spacer-16) * -1), 0);
		margin-top: calc(var(--spacer-64) * 2);

		@include desktop {
			transform: translate(calc(var(--spacer-16) * -1), 0);
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
