<template>
	<div
		:class="['ui-benchmark-point', { browsercash: point.browsercash }]"
		:style="{ '--x': `${point.position.x}%`, '--y': `${point.position.y}%` }"
	>
		<div class="ui-benchmark-point__content">
			<span class="mono-tiny">{{ point.label }}</span>
			<span class="mono-tiny">{{ point.subtitle }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	point: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.ui-benchmark-point {
	position: absolute;
	height: 0;
	left: var(--x);
	top: var(--y);

	&.browsercash {
		&::before {
			background-color: var(--teal);
		}
	}

	&::before {
		content: '';
		position: absolute;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background-color: var(--black);
		border: 1px solid var(--black);
		transform: translate(-50%, -50%);
	}

	&__content {
		position: relative;
		display: flex;
		flex-direction: column;
		white-space: nowrap;
		text-transform: uppercase;
		top: -7px;
		padding-left: var(--spacer-16);

		> span {
			&:nth-child(1) {
				font-weight: 600;
				letter-spacing: 0.5px;
			}

			&:nth-child(2) {
				opacity: 0.5;
				font-size: 11px;
			}
		}
	}
}
</style>
