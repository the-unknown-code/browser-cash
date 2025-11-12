<template>
	<section class="home-pre-footer">
		<client-only>
			<div class="home-pre-footer__rive">
				<canvas-rive
					:params="{
						src: '/rive/grid_footer.riv',
						layout: new Layout({
							fit: Fit.Cover,
							alignment: Alignment.BottomCenter,
						}),
					}"
				/>
			</div>
		</client-only>
		<div class="home-pre-footer__content">
			<div class="layout-grid">
				<div class="layout-grid--item">
					<p class="p-small">For you</p>
					<p class="h3">Join the<br />future</p>
					<ui-cta
						:type="BUTTON_TYPES.PRIMARY"
						href="/extension"
						label="Download extension"
					/>
				</div>
				<div class="layout-grid--item">
					<p class="p-small">For your business</p>
					<p class="h3">Scale AI<br />automation</p>
					<ui-cta
						:type="BUTTON_TYPES.INVERTED"
						href="/enterprise"
						label="Explore enterprise"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
import { BUTTON_TYPES } from '~/libs/constants/ui';
</script>

<style lang="scss" scoped>
.home-pre-footer {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: hidden;
	width: 100%;

	@include desktop {
		padding: 0;
	}

	&__content {
		position: relative;
		left: 0;
		width: 100%;
		height: auto;
		padding: var(--spacer-96) 0;

		@include desktop {
			position: absolute;
			top: 10vw;
			padding: 0;
		}

		.layout-grid {
			// gap: var(--spacer-96);
			max-width: 1960px;
			max-width: 1280px;

			&--item {
				grid-column: span 6;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				gap: var(--spacer-8);
				white-space: nowrap;

				&:deep(.ui-cta) {
					margin-top: var(--spacer-16);
				}

				&:nth-child(2) {
					@include mobile {
						margin-top: var(--spacer-64);
					}
				}
			}
		}
	}

	&__rive {
		position: absolute;
		width: 100%;

		@include mobile {
			aspect-ratio: 1;

			&:deep(.canvas-rive) {
				width: 300%;
				aspect-ratio: 2;
				height: auto;
				left: 50%;
				transform: translate(-50%, 0);
			}
		}

		@include desktop {
			position: relative;
			aspect-ratio: 2;
		}
	}
}
</style>
