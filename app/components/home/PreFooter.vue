<template>
	<section class="home-pre-footer">
		<client-only>
			<div class="home-pre-footer__rive">
				<canvas-rive
					:params="{
						src: '/rive/grid_footer.riv',
						layout: new Layout({
							fit: Fit.Contain,
							alignment: Alignment.BottomCenter,
						}),
					}"
				/>
			</div>
		</client-only>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
</script>

<style lang="scss" scoped>
.home-pre-footer {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: hidden;
	width: 100%;

	&__rive {
		position: relative;
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
			aspect-ratio: 2;
		}
	}
}
</style>
