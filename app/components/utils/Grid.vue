<template>
	<div>
		<div class="utils-grid" :style="{ '--size': props.size }">
			<div v-for="(_, index) in cells" :key="index" class="utils-grid__cell" />
			<nuxt-img
				src="/images/indicator-time.svg"
				class="utils-grid--indicator-time"
			/>
			<nuxt-img
				src="/images/indicator-accuracy.svg"
				class="utils-grid--indicator-accuracy"
			/>
			<slot />
		</div>
		<div class="utils-grid__legend mono">
			<p class="mono-tiny">Browsercash</p>
			<p class="mono-tiny">Other</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	size: { type: Number, required: true },
});

const cells = computed(() => Array.from({ length: props.size ** 2 }));
</script>

<style lang="scss" scoped>
.utils-grid {
	position: relative;
	aspect-ratio: 1 / 1;
	display: grid;
	grid-template-columns: repeat(var(--size), 1fr);
	width: 100%;
	border-top: 1px solid var(--black-10);
	border-left: 1px solid var(--black-10);

	&__cell {
		border-right: 1px solid var(--black-10);
		border-bottom: 1px solid var(--black-10);
		aspect-ratio: 1 / 1;
	}

	&__legend {
		margin-top: var(--spacer-32);
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: var(--spacer-16);

		p {
			position: relative;
			font-size: 10px;
			display: flex;
			align-items: center;
			gap: var(--spacer-8);
			line-height: 1;

			&::before {
				content: '';
				position: relative;
				width: 11px;
				height: 11px;
				flex: 0 0 11px;
				border-radius: 50%;
				border: 1px solid var(--black);
				background-color: var(--black);
				transform: translateY(-1px);
			}
			&:nth-child(1) {
				&::before {
					background-color: var(--teal);
				}
			}
		}
	}

	&--indicator-time {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 200px;
		transform: translateY(3px);
	}

	&--indicator-accuracy {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 230px;
		transform: translateX(-5px);
	}
}
</style>
