<template>
	<section ref="$section" class="layout-companies">
		<div class="layout-grid">
			<div>
				<ui-text-block :block="block.heading" />
			</div>
			<div>
				<div class="layout-companies__logos">
					<div v-for="card in block.cards" :key="card.media.src">
						<ui-logo-card :block="card" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({
	block: {
		type: Object as PropType<any>,
		required: true,
	},
});

const $section = ref<HTMLElement | null>(null);
const scope = effectScope();

scope.run(async () => {
	useLenis(({ velocity }: { velocity: number }) => {
		if (!$section.value) return;
		$section.value.style.setProperty('--velocity', (velocity / 100).toString());
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});
</script>

<style lang="scss" scoped>
.layout-companies {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: var(--spacer-64) 0;

	.layout-grid {
		> * {
			grid-column: -1 / 1;

			&:nth-child(1) {
				@include desktop {
					position: sticky;
					top: 0;
					display: flex;
					align-items: center;
					grid-column: span 5;
					align-self: start;
					height: fit-content;
					min-height: 100dvh;

					@media screen and (min-width: 1280px) {
						grid-column: span 4;
					}
				}
			}

			&:nth-child(2) {
				margin-top: var(--spacer-64);

				@include desktop {
					grid-column: 7 / span 6;
					margin-top: 0;

					@media screen and (min-width: 1280px) {
						grid-column: 6 / span 6;
					}
				}
			}
		}
	}

	&__logos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: var(--spacer-8);

		grid-template-columns: repeat(6, 1fr);
		grid-auto-flow: dense;
		padding-bottom: var(--spacer-96);

		> * {
			position: relative;
			grid-column: span 3;
			align-self: start;
			margin-top: var(--spacer-8);

			// Middle column
			&:nth-child(2n + 2) {
				top: var(--spacer-96);
			}
		}

		@media screen and (min-width: 1280px) {
			> * {
				grid-column: span 2;

				&:nth-child(2n + 2) {
					top: 0;
				}

				&:nth-child(3n + 2) {
					top: var(--spacer-96);
				}

				&:nth-child(3n) {
					top: var(--spacer-48);
				}
			}
		}
	}
}
</style>
