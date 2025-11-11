<template>
	<div class="ui-input p-small">
		<input v-if="!textarea" v-model="model" :placeholder="label" :type="type" />
		<textarea v-if="textarea" v-model="model" :placeholder="label"></textarea>
	</div>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
		validator: (value: string) =>
			[
				'text',
				'email',
				'tel',
				'url',
				'search',
				'password',
				'number',
				'date',
				'time',
				'datetime-local',
				'month',
				'week',
			].includes(value),
	},
	textarea: {
		type: Boolean,
		default: false,
	},
});

const model: Ref<string> = ref('');
</script>

<style lang="scss" scoped>
.ui-input {
	position: relative;
	width: 100%;

	input,
	textarea {
		position: relative;
		width: 100%;
		padding: var(--spacer-8) var(--spacer-16);
		border: 1px solid var(--black);
		border-radius: var(--spacer-8);
		background-color: var(--white);
		color: var(--black);
		resize: none;
	}

	textarea {
		height: 180px;
	}
}
</style>
