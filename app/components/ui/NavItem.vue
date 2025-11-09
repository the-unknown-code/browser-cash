<template>
	<button :aria-label="label" :class="['ui-nav-item', { simple }]">
		<common-a-link :href="resolveLink(href)" :aria-label="label">
			<span class="label">
				<span>{{ label }}</span>
			</span>
			<span class="label">
				<span>{{ label }}</span>
			</span>
		</common-a-link>
	</button>
</template>

<script setup lang="ts">
import { resolveLink } from '~/libs/storyblok/utils';

defineProps({
	href: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	simple: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.ui-nav-item {
	user-select: none;
	padding: var(--spacer-4) var(--spacer-8);

	&:deep(.a-div) {
		position: relative;
		display: block;
		overflow: hidden;
	}

	&:not(.simple) {
		&:deep(.a-div) {
			&::before {
				content: '';
				@include fill(absolute);
				width: 100%;
				height: 100%;
				background-color: var(--black);
				z-index: 1;
				transform: translateY(100%);
				transition: transform var(--duration-fast) var(--ease-in-out-circ);
			}
		}
	}

	span {
		&.label {
			position: relative;
			display: flex;
			align-items: center;
			transition: transform var(--duration-medium) var(--ease-in-out-circ);

			&:nth-child(2) {
				position: absolute;
				left: 0;
				top: 0;
				transform: translateY(100%);
			}
		}
	}

	@include desktop {
		&:hover {
			&:deep(.a-div) {
				&::before {
					transform: translateY(-100%);
				}
			}

			span {
				&.label {
					&:nth-child(1) {
						transform: translateY(-100%);
					}

					&:nth-child(2) {
						transform: translateY(0);
					}
				}
			}
		}
	}
}
</style>
