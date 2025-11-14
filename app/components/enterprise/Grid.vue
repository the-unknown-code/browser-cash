<template>
	<section class="enterprise-grid">
		<client-only>
			<div v-show="isDesktop" class="enterprise-grid__rive">
				<canvas-rive
					:params="{
						src: '/rive/enterprise/enterprise_grid.riv',
						layout: new Layout({
							fit: Fit.Contain,
							alignment: Alignment.Center,
						}),
					}"
				/>
				<div v-show="isDesktop" class="enterprise-grid__rive__content">
					<div v-for="item in GRID" :key="item.title" class="rive-grid-item">
						<p class="mono">{{ item.title }}</p>
						<p class="p-tiny">{{ item.description }}</p>
					</div>
				</div>
			</div>
		</client-only>

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

const props = defineProps({
	block: {
		type: Array as PropType<any[]>,
		required: true,
	},
});

const GRID = [
	{
		title: props.block[0].title,
		description: props.block[0].description,
		src: '/rive/enterprise/02_auto_form.riv',
	},
	{
		title: props.block[1].title,
		description: props.block[1].description,
		src: '/rive/enterprise/02_auto_payments.riv',
	},
	{
		title: props.block[2].title,
		description: props.block[2].description,
		src: '/rive/enterprise/02_market_res.riv',
	},
	{
		title: props.block[3].title,
		description: props.block[3].description,
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

		&__content {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.rive-grid-item {
				position: absolute;
				display: flex;
				flex-direction: column;
				gap: var(--spacer-8);
				max-width: 230px;
				// padding-left: var(--spacer-16);

				&:nth-child(1) {
					left: 55.2%;
					top: 25%;
					padding-left: var(--spacer-16);
				}

				&:nth-child(2) {
					text-align: right;
					right: 59.25%;
					top: 54.75%;
					padding-right: var(--spacer-16);
				}

				&:nth-child(3) {
					text-align: right;
					right: 76.8%;
					top: 26.65%;
					padding-right: var(--spacer-16);
				}

				&:nth-child(4) {
					left: 73.7%;
					top: 45.5%;
					padding-left: var(--spacer-16);
				}

				.p-tiny {
					line-height: 120%;
					font-size: 13px;
				}
			}
		}
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
