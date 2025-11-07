<template>
	<section class="layout-faq">
		<div class="layout-grid">
			<div class="layout-faq__content">
				<ui-text-block :block="block" />
			</div>
			<div class="layout-faq__items">
				<ui-faq-item
					v-for="item in faqBlock"
					:key="item.question"
					:block="item"
				/>
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

const faqBlock = [
	{
		question: 'What is Browser Cash?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		question: 'How does Browser Cash work?',
		answer:
			'Browser Cash is a browser extension that allows you to earn cash by performing tasks in your browser.',
	},
	{
		question: 'How do I cash in on Browser Cash?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		question: 'What is Browser Cash?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		question: 'How does Browser Cash work?',
		answer:
			'Browser Cash is a browser extension that allows you to earn cash by performing tasks in your browser.',
	},
	{
		question: 'How do I cash in on Browser Cash?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];
</script>

<style lang="scss" scoped>
.layout-faq {
	position: relative;
	min-height: 100lvh;
	display: block;
	padding: var(--spacer-64) 0;
	align-items: start;

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
