<template>
	<home-pre-footer v-if="type === FOOTER_TYPES.CLASSIS" />
	<extension-pre-footer v-else-if="type === FOOTER_TYPES.DOWNLOAD" />
	<enterprise-form v-else-if="type === FOOTER_TYPES.FORM" />
</template>

<script setup lang="ts">
import { FOOTER_TYPES } from '~/libs/constants/ui';

defineProps<{
	type: string;
	required: true;
}>();
</script>
