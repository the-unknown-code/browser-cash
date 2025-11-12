<template>
	<component
		:is="COMPONENT_MAP[block.component as keyof typeof COMPONENT_MAP]"
		v-for="block in parsedBlocks"
		:key="`${refreshKey}-${block._uid}`"
		:block="getBlockData(block)"
		v-bind="{ ...getBlockAttributes(block) }"
	/>
</template>

<script setup lang="ts">
import { storyblokEditable } from '@storyblok/js';
import { STORYBLOK_COMPONENTS } from '~/libs/constants/ui';

import { BlogList } from '#components';
import { parseBlog } from '~/libs/storyblok/parser';

const props = defineProps({
	blocks: {
		type: Array as PropType<any[]>,
		required: true,
	},
	refreshKey: {
		type: String,
		default: '',
	},
});

const parsedBlocks = computed(() => {
	return props.blocks;
});

const getBlockData = (block: any) => {
	switch (block.component.toLowerCase()) {
		case STORYBLOK_COMPONENTS.ARTICLE_LIST:
			return parseBlog(block);
			break;
	}
};

const getBlockAttributes = (block: any) => {
	const attributes = storyblokEditable(block);
	return attributes;
};

const COMPONENT_MAP = {
	[STORYBLOK_COMPONENTS.ARTICLE_LIST]: BlogList,
};
</script>

<style scoped></style>
