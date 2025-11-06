<template>
	<section class="layout-faq">
		<div class="layout-grid">
			<div>
				<ui-text-block :block="block" />
			</div>
			<div>
        <ui-faq :block="faqBlock" />
      </div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';

const block = {
	title: 'Your questions, answered.',
	description: null,
	cta: [
		{
			label: 'SCALE YOUR AI VISION',
			href: '/extension',
			type: BUTTON_TYPES.PRIMARY,
		},
	],
};

const faqBlock = {
	items: [
		{
			question: 'What is Browser Cash?',
			answer: 'Browser Cash is a browser extension that allows you to earn cash by performing tasks in your browser.',
		},
	],
};
</script>

<style lang="scss" scoped>
.layout-faq {
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
}
</style>
