<template>
	<div :class="['ui-faq-item', { active }]" @click="active = !active">
		<div class="question">
			<p class="mono-emphasized">{{ block.question }}</p>
			<svg width="35" height="35" viewBox="0 0 35 35">
				<circle
					cx="17.5"
					cy="17.5"
					r="16.5"
					fill="white"
					stroke="black"
					stroke-width="1.5"
				/>

				<rect
					ref="$plus"
					x="17"
					y="11"
					width="1.5"
					height="13"
					rx="0.5"
					fill="black"
				/>
				<rect
					x="24"
					y="17"
					width="1.5"
					height="13"
					rx="0.5"
					transform="rotate(90 24 17)"
					fill="black"
				/>
			</svg>
		</div>
		<div ref="$container" class="answer">
			<p ref="$answer">{{ block.answer }}</p>
		</div>

		<div
			v-if="index === 0 || index === 3 || index === 4"
			:class="`icon icon--${index}`"
		>
			<nuxt-img
				:src="ICONS.find(icon => icon.index === index)?.src"
				loading="lazy"
				alt="FAQ Icon"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import gsap from 'gsap/all';
import { GSAPDuration, GSAPEase } from '~/libs/constants/gsap';

const ICONS = [
	{ index: 0, src: '/images/balloon-icon.svg' },
	{ index: 3, src: '/images/v-hand.svg' },
	{ index: 4, src: '/images/fan-glove.svg' },
];

defineProps({
	block: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const active = ref(false);
const $container = ref<HTMLElement | null>(null);
const $answer = ref<HTMLElement | null>(null);
const $plus = ref<HTMLElement | null>(null);
const scope = effectScope();

const { height } = useElementBounding($answer);

scope.run(async () => {
	watch(active, async () => {
		gsap.to($container.value, {
			marginTop: active.value ? 32 : 0,
			height: active.value ? height.value : 0,
			ease: GSAPEase.SLOW_IN_OUT,
			duration: GSAPDuration.FAST,
		});

		gsap.to($plus.value, {
			height: active.value ? 0 : 13,
			ease: GSAPEase.SLOW_IN_OUT,
			duration: GSAPDuration.FAST,
		});
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});
</script>

<style lang="scss" scoped>
.ui-faq-item {
	position: relative;
	display: flex;
	flex-direction: column;
	// gap: var(--spacer-16);
	padding: var(--spacer-32) var(--spacer-32);
	border: 1.5px solid var(--black);
	border-radius: var(--spacer-32);
	background-color: var(--white);
	cursor: pointer;
	transition: margin-bottom var(--duration-fast) var(--ease-in-out-circ);

	@include desktop {
		max-width: 600px;
	}

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--yellow);
		transform: translate(calc(var(--spacer-8) * 1), calc(var(--spacer-8) * 1));
		border-radius: var(--spacer-32);
		border: 1.5px solid var(--black);
		z-index: -1;
		transition: transform var(--duration-fast) var(--ease-in-out-circ);
	}

	&.active {
		margin-bottom: var(--spacer-16);

		&::before {
			transform: translate(
				calc(var(--spacer-8) * 1),
				calc(var(--spacer-16) * 1)
			);
		}
	}

	> div {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacer-16);

		svg {
			width: 35px;
			height: 35px;
			flex: 0 0 35px;
		}

		g {
			transform-origin: center;
		}

		circle {
			transition: fill var(--duration-fast) var(--ease-in-out-circ);
		}
	}

	.answer {
		position: relative;
		height: 0;
		overflow: hidden;
	}

	p {
		text-wrap: balance;

		&.mono {
			position: relative;
			max-width: 484px;
			overflow: hidden;
		}
	}

	@include desktop {
		&:hover {
			circle {
				fill: var(--yellow);
			}
		}
	}

	.icon {
		position: absolute;
		width: 60px;
		aspect-ratio: 1;
		pointer-events: none;

		@include desktop {
			width: 80px;
		}

		&--0 {
			top: 0;
			right: 20%;
			transform: translate(0%, -50%);
		}

		&--3 {
			top: 0;
			right: 20%;
			transform: translate(0%, -50%) rotate(-20deg);
		}

		&--4 {
			left: 0;
			bottom: 0;
			width: 80px;
			transform: translate(-60%, 10%) rotate(10deg);

			@include desktop {
				width: 100px;
			}
		}

		img {
			position: relative;
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
		}
	}
}
</style>
