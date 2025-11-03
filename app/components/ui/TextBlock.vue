<template>
	<div class="ui-text-block">
		<h3 v-if="block.title" class="h3">{{ block.title }}</h3>
	</div>
</template>

<script setup lang="ts">
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped></style>
