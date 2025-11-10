<template>
	<section class="enterprise-grid">
		<client-only>
			<div v-show="isDesktop" class="enterprise-grid__rive">
				<canvas-rive
					:params="{
						src: '/rive/enterprise/grid.riv',
						layout: new Layout({
							fit: Fit.Contain,
							alignment: Alignment.Center,
						}),
					}"
				/>
			</div>
		</client-only>
		<div class="enterprise-grid__content">
			<div class="grid-item">
				<client-only>
					<canvas-rive
						:params="{
							src: '/rive/enterprise/02_auto_form.riv',
							layout: new Layout({
								fit: Fit.Contain,
								alignment: Alignment.BottomCenter,
							}),
						}"
					/>
				</client-only>
			</div>
			<div class="grid-item">
				<client-only>
					<canvas-rive
						:params="{
							src: '/rive/enterprise/02_auto_payments.riv',
							layout: new Layout({
								fit: Fit.Contain,
								alignment: Alignment.BottomCenter,
							}),
						}"
					/>
				</client-only>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
const { isDesktop } = useBreakpoints();
</script>

<style lang="scss" scoped>
.enterprise-grid {
	position: relative;
	height: auto;

	@include desktop {
		aspect-ratio: 2;
	}

	&__rive {
		@include fill(absolute);
	}

	&__content {
		position: relative;

		@include desktop {
			@include fill(absolute);
		}

		.grid-item {
			position: relative;
			aspect-ratio: 1;
		}
	}
}
</style>
