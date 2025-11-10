<template>
	<div class="ui-text-block">
		<h3 v-if="block.title" class="h3">{{ block.title }}</h3>
		<p v-if="block.description" class="p">{{ block.description }}</p>
		<div class="ui-text-block__actions">
			<ui-cta
				v-for="cta in block.cta"
				:key="cta.label"
				:href="cta.href"
				:label="cta.label"
				:type="cta.type"
			/>
		</div>
		<slot />
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
