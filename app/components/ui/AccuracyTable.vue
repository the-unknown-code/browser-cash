<template>
	<div class="ui-accuracy-table">
		<div>
			<div class="ui-accuracy-table__list">
				<ul>
					<li
						v-for="item in block.benchmarks"
						:key="item.id"
						:class="['caption', { active: activeIndex === item.id }]"
						@click="activeIndex = item.id"
					>
						{{ item.title }}
					</li>
				</ul>
			</div>
			<div class="ui-accuracy-table__grid">
				<utils-grid :size="10">
					<div class="ui-accuracy-table__grid__points">
						<ui-benchmark-point
							v-for="(point, index) in activeBenchmark.points"
							:key="index"
							:point="point"
						/>
					</div>
				</utils-grid>
			</div>
		</div>
		<div>
			<span class="title mono-tiny">
				{{ block.intro }}
			</span>
			<div>
				<div class="description mono-tiny" v-html="block.description" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	block: {
		type: Object,
		required: true,
	},
});

const activeIndex = ref(props.block.benchmarks[0].id);
const activeBenchmark = computed(() =>
	props.block.benchmarks.find((item: any) => item.id === activeIndex.value)
);
</script>

<style lang="scss" scoped>
.ui-accuracy-table {
	$desktop-width: 1600px;

	position: relative;
	width: 100%;
	border-radius: var(--spacer-24);
	border: 1.5px solid var(--black);
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	user-select: none;

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--teal);
		transform: translate(calc(var(--spacer-8) * 1), calc(var(--spacer-8) * 1));
		border-radius: var(--spacer-24);
		border: 1.5px solid var(--black);
		z-index: -1;
	}

	@media screen and (min-width: $desktop-width) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.description {
		&::v-deep(strong),
		&::v-deep(b) {
			font-weight: 600;
			color: var(--aqua) !important;
		}
	}

	> div {
		position: relative;
		width: 100%;
		padding: var(--spacer-24);
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);

		.mono-tiny {
			text-wrap: balance;
		}

		&:nth-child(2) {
			> div {
				display: flex;
				flex-direction: column;
				gap: var(--spacer-16);

				p {
					display: flex;
					flex-direction: column;
					gap: var(--spacer-4);

					span {
						&:nth-child(1) {
							text-transform: uppercase;
						}
					}
				}
			}
		}

		@media screen and (min-width: $desktop-width) {
			padding: var(--spacer-32);

			&:nth-child(1) {
				grid-column: span 3;
				border-right: 1px solid var(--black);
			}

			&:nth-child(2) {
				grid-column: span 2;
				padding: 0;

				.title {
					padding: var(--spacer-24);
					border-bottom: 1px solid var(--black);
				}

				> div {
					padding: var(--spacer-24);
				}
			}
		}
	}

	&__list {
		position: relative;
		width: 100%;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		ul {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			width: max-content;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		.caption {
			position: relative;
			white-space: nowrap;
			cursor: pointer;
			background-color: var(--white);
			border-radius: var(--spacer-16);
			border: 1.5px solid var(--white);
			padding: var(--spacer-8) var(--spacer-16);

			transition: background-color var(--duration-fast) var(--ease-in-out-circ),
				border-radius var(--duration-fast) var(--ease-in-out-circ),
				border var(--duration-fast) var(--ease-in-out-circ);

			&.active {
				background-color: var(--teal);
				border-radius: var(--spacer-16);
				border: 1.5px solid var(--black);
				cursor: default;
			}
		}
	}

	&__grid {
		position: relative;
		width: 100%;
		aspect-ratio: 1;

		&__points {
			@include fill(absolute);
		}
	}
}
</style>
