<template>
	<div class="ui-text-block">
		<h3 v-if="block.title" class="h3">{{ block.title }}</h3>
		<p v-for="item in parsedDescription" :key="item.label" class="p">
			{{ item.label }}
		</p>
		<div class="ui-text-block__actions">
			<ui-cta
				v-for="cta in block.buttons"
				:key="cta.label"
				:href="resolveLink(cta.url.url)"
				:label="cta.label"
				:type="cta.type"
			/>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { resolveLink } from '~/libs/storyblok/utils';

const props = defineProps({
	block: {
		type: Object,
		required: true,
	},
});

const parsedDescription = computed(() => {
	const desc = props.block?.description;

	if (!desc) return [];

	if (Array.isArray(desc)) {
		return desc.map(item => ({
			label: item,
			type: 'p',
		}));
	}

	if (typeof desc === 'string') {
		return [
			{
				label: desc,
				type: 'p',
			},
		];
	}

	return null;
});
</script>

<style lang="scss" scoped>
.ui-text-block {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: var(--spacer-24);

	h3,
	p {
		max-width: 600px;
		text-wrap: balance;
	}

	&__actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);

		@include desktop {
			flex-direction: row;
		}
	}
}
</style>
