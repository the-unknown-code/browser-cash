<template>
	<section class="enterprise-accuracy">
		<div class="layout-grid">
			<div>
				<ui-text-block :block="block.heading" />
			</div>
			<div>
				<ui-accuracy-table :block="block" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.enterprise-accuracy {
	$desktop-width: 1200px;
	position: relative;
	padding: var(--spacer-64) 0;
	height: auto;

	.layout-grid {
		> div {
			position: relative;
			grid-column: -1 / 1;

			@include desktop {
			}

			@media screen and (min-width: $desktop-width) {
				&:nth-child(1) {
					position: sticky;
					top: 0;
					grid-column: span 5;
					display: flex;
					height: 100%;
					max-height: 100vh;
					flex-direction: column;
					justify-content: center;
				}
				&:nth-child(2) {
					grid-column: 6 / span 7;
				}
			}
		}
	}
}
</style>
