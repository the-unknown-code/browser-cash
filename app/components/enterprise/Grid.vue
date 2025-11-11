<template>
	<section class="enterprise-grid">
		<!--
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
    -->
		<div v-show="!isDesktop" class="enterprise-grid__content">
			<div v-for="item in GRID" :key="item.title" class="grid-item">
				<client-only>
					<canvas-rive
						:params="{
							src: item.src,
							layout: new Layout({
								fit: Fit.Contain,
								alignment: Alignment.Center,
							}),
						}"
					/>
					<div>
						<p class="mono">{{ item.title }}</p>
						<p class="p-small">{{ item.description }}</p>
					</div>
				</client-only>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
const { isDesktop } = useBreakpoints();

const GRID = [
	{
		title: 'Automated Form Filling',
		description:
			'Intelligently fill out online forms using data from any source, saving you hours and cutting down on errors.',
		src: '/rive/enterprise/02_auto_form.riv',
	},
	{
		title: 'Autonomous Payments',
		description:
			'Purchase products from Amazon, Shopify, or subscribe to SaaS. Fully autonomous, no human needed.',
		src: '/rive/enterprise/02_auto_payments.riv',
	},
	{
		title: 'Market Research & Insights',
		description:
			'Access valuable market data, such as e-commerce pricing, product information, or reviews, on a large scale.',
		src: '/rive/enterprise/02_market_res.riv',
	},
	{
		title: 'Internet Answer Machine',
		description:
			'Execute AI-controlled browser agents to find answers. Analyze business reports, consolidate data into reports, take actions on live markets.',
		src: '/rive/enterprise/02_internet-answer.riv',
	},
];
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
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: var(--spacer-32);
		padding-bottom: var(--spacer-64);

		@media screen and (min-width: 720px) {
			grid-template-columns: repeat(2, 1fr);
		}

		.grid-item {
			position: relative;
			display: flex;
			align-items: flex-end;
			justify-content: flex-start;
			gap: var(--spacer-8);
			padding-bottom: var(--spacer-32);
			border-bottom: 1px solid var(--black-5);

			&:deep(.canvas-rive) {
				position: relative;
				width: 40%;
				height: auto;
				aspect-ratio: 1;
			}

			> div {
				position: relative;
				max-width: 320px;
				display: flex;
				flex-direction: column;
				gap: var(--spacer-8);
			}
		}
	}
}
</style>
