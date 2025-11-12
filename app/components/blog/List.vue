<template>
	<section class="blog-list">
		<div v-for="item in LIST" :key="item.id" class="blog-list__item">
			<div class="blog-list__item--media">
				<nuxt-img
					:src="item.media"
					:alt="item.title"
					loading="lazy"
					draggable="false"
				/>
			</div>
			<p class="title p-big">{{ item.title }}</p>
			<p class="description p-small">{{ item.description }}</p>
			<ui-cta
				label="Read more"
				href="/blog/test"
				:type="BUTTON_TYPES.PRIMARY"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';

defineProps({
	items: {
		type: Array as PropType<any[]>,
		default: () => [],
	},
});

const LIST = [
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
	{
		id: 1,
		media: 'https://picsum.photos/420/410',
		title: 'Lorem ipsum color sim amet et etiam consequiscet',
		description:
			'Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. Every action your browser takes helps AI agents perform real tasks across the web—and you get rewarded with points for the biggest airdrop in automation history. ',
		category: 'Product Release',
		time: '5 min read',
	},
];
</script>

<style lang="scss" scoped>
.blog-list {
	padding: var(--spacer-64) 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
	justify-content: flex-start;
	gap: var(--spacer-16);

	&__item {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);

		&--media {
			position: relative;
			width: 100%;
			aspect-ratio: 6/4;

			img {
				@include fill(absolute);
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
			}
		}

		.title {
			line-height: 120%;
		}

		.description {
			margin-bottom: var(--spacer-16);
		}

		&:deep(.ui-cta) {
			margin-top: auto;
			font-size: 10px;
			.ui-cta--content {
				padding: var(--spacer-12) var(--spacer-16);
			}
		}
	}
}
</style>
