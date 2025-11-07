<template>
	<div ref="$block" class="animation-block">
		<div ref="$content" class="animation-block__content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import gsap from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';

const props = defineProps({
	delay: {
		type: Number,
		required: false,
		default: 0,
	},
});

const $block = ref<HTMLElement | null>(null);
const $content = ref<HTMLElement | null>(null);

const initialize = () => {
	gsap.to($content.value, {
		y: '0%',
		delay: props.delay,
		duration: GSAPDuration.DEFAULT,
		ease: GSAPEase.SLOW_IN_OUT,
		scrollTrigger: {
			trigger: $content.value,
			start: 'top 95%',
		},
		onStart: () => {
			gsap.to($block.value, {
				borderColor: 'var(--black)',
				duration: GSAPDuration.DEFAULT,
				ease: GSAPEase.SLOW_IN_OUT,
			});
		},
	});
};

tryOnMounted(() => {
	initialize();
});
</script>

<style lang="scss" scoped>
.animation-block {
	@include fill(relative);
	display: inline-flex;
	border: 1px solid transparent;
	border-left: none;
	overflow: hidden;
	padding-left: var(--spacer-4);

	&__content {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--spacer-8);
		user-select: none;
		transform: translateY(100%);
		background-color: var(--white);

		&:deep(.ui-cta) {
			border: none;
			height: 100%;
			border-radius: 0;
			border-left: 1px solid var(--black);

			@include desktop {
				padding: var(--spacer-16) var(--spacer-32);
			}
		}
	}
}
</style>
