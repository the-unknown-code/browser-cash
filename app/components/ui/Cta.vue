<template>
	<button :class="['ui-cta', `ui-cta--${type}`, { external }]">
		<common-a-link :href="resolveLink(href)" :aria-label="label">
			<div class="ui-cta--content">
				<span>{{ label }}</span>
				<common-svg-mask
					v-if="icon || external"
					:svg="external ? '/images/link-arrow.svg' : icon"
				/>
			</div>
			<div class="ui-cta--content">
				<span>{{ label }}</span>
				<common-svg-mask
					v-if="icon || external"
					:svg="external ? '/images/link-arrow.svg' : icon"
				/>
			</div>
		</common-a-link>
	</button>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';
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
	type: {
		type: String,
		required: true,
		validator: (value: string) =>
			Object.values(BUTTON_TYPES).includes(
				value as (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES]
			),
	},
	icon: {
		type: String,
		required: false,
		default: null,
	},
	external: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.ui-cta {
	position: relative;
	width: max-content;
	user-select: none;
	padding: var(--spacer-16) var(--spacer-16);
	border: 1px solid var(--black);
	border-radius: var(--spacer-4);
	overflow: hidden;

	&.external {
		&:deep(.svg-mask) {
			width: 12px;
			height: 12px;
			transform: translateY(-1px);
		}
	}

	&::before {
		content: '';
		@include fill(absolute);
		width: 100%;
		height: 100%;
		background-color: var(--black);
		z-index: 1;
		transform: translateY(102%);
		transition: transform var(--duration-fast) var(--ease-in-out-circ);
	}

	&--primary {
		background-color: var(--yellow);
	}

	&--inverted {
		background-color: var(--teal);
	}

	&--secondary {
		background-color: var(--white);
		color: var(--black);
	}

	&:deep(.a-div) {
		position: relative;
		display: block;
		overflow: hidden;
	}

	&:deep(.svg-mask) {
		width: 16px;
		height: 16px;
		background-color: var(--black);
	}

	&--content {
		position: relative;
		display: block;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacer-8);
		transition: transform var(--duration-medium) var(--ease-in-out-circ);

		&:nth-child(2) {
			position: absolute;
			left: 0;
			top: 0;
			transform: translateY(100%);
		}
	}

	@include desktop {
		&:hover {
			&::before {
				transform: translateY(-100%);
			}

			.ui-cta--content {
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
</style>
