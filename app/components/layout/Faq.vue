<template>
	<section :class="['layout-faq', theme]">
		<div class="layout-grid">
			<div class="layout-faq__content">
				<ui-text-block :block="block.heading" />
			</div>
			<div class="layout-faq__items">
				<ui-faq-item
					v-for="(item, index) in block.faq"
					:key="index"
					:block="item"
					:index="index"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { THEMES } from '~/libs/constants/ui';

defineProps({
	theme: {
		type: String,
		required: false,
		default: THEMES.LIGHT,
	},
	block: {
		type: Object as PropType<any>,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.layout-faq {
	position: relative;
	min-height: 100lvh;
	display: block;
	padding: var(--spacer-64) 0;
	align-items: start;

	&.theme-dark {
	}

	.layout-grid {
		position: relative;
		height: auto;
		align-items: start;

		> * {
			grid-column: -1 / 1;

			&:nth-child(1) {
				@include desktop {
					grid-column: span 5;
				}
			}

			&:nth-child(2) {
				@include desktop {
					grid-column: 6 / span 6;
				}
			}
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		justify-content: center;

		@include desktop {
			position: sticky;
			top: 0;
			height: 100vh;
		}
	}

	&__items {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);
		margin-top: var(--spacer-64);

		@include desktop {
			margin-top: 0;
			justify-content: center;
			height: 100%;
		}

		> * {
			&:nth-child(3n + 1) {
				margin-left: 0;
			}

			// 2nd, 5th, 8th... (64px)
			&:nth-child(3n + 2) {
				margin-left: var(--spacer-24);
				@include desktop {
					margin-left: var(--spacer-64);
				}
			}

			// 3rd, 6th, 9th... (32px)
			&:nth-child(3n) {
				margin-left: var(--spacer-16);
				@include desktop {
					margin-left: var(--spacer-32);
				}
			}
		}
	}
}
</style>
