<template>
	<section ref="$section" class="enterprise-ready">
		<div>
			<hgroup>
				<div role="heading" aria-level="1" class="h2">
					<animation-block>
						<span>Ready to</span>
					</animation-block>
					<animation-block :delay="0.1">
						<span>launch</span>
						<nuxt-img
							src="/images/energy-teal.png"
							alt="Smiley"
							loading="lazy"
							quality="80"
							format="webp"
							class="icon"
						/>
						<span>your</span>
					</animation-block>
					<animation-block :delay="0.2">
						<span>first task?</span>
						<ui-cta
							:type="BUTTON_TYPES.INVERTED"
							href="https://www.google.com"
							label="Sign Up Now"
						/>
					</animation-block>
				</div>
			</hgroup>

			<client-only>
				<div v-if="isDesktop" class="enterprise-ready__rive">
					<canvas-rive
						:params="{
							src: '/rive/browser_grid.riv',
							layout: new Layout({
								fit: Fit.Contain,
								alignment: Alignment.BottomCenter,
							}),
						}"
					/>

					<div class="enterprise-ready__rive__item">
						<transition
							:name="lastIndex > activeIndex ? 'slide-down' : 'slide-up'"
						>
							<div :key="activeIndex">
								<canvas-rive
									:params="{
									src: ICONS?.at(activeIndex)?.src as string,
									layout: new Layout({
										fit: Fit.Contain,
										alignment: Alignment.BottomCenter,
									}),
								}"
								/>
								<div>
									<p class="mono-small">
										{{ ICONS.at(activeIndex)?.index.padStart(2, '0') }}.
									</p>
									<p class="mono-big">{{ ICONS.at(activeIndex)?.title }}</p>
									<p class="p-icon">{{ ICONS.at(activeIndex)?.description }}</p>
								</div>
							</div>
						</transition>
					</div>
				</div>
				<div v-else class="enterprise-ready__rive__mobile">
					<div v-for="(icon, index) in ICONS" :key="index">
						<div>
							<canvas-rive
								:key="activeIndex"
								:params="{
									src: icon.src,
									layout: new Layout({
										fit: Fit.Contain,
										alignment: Alignment.Center,
									}),
								}"
							/>
						</div>
						<div>
							<p class="mono-small">
								{{ String(index + 1).padStart(2, '0') }}.
							</p>
							<p class="mono-big">{{ icon.title }}</p>
							<p class="p-icon">{{ icon.description }}</p>
						</div>
					</div>
				</div>
			</client-only>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
import { BUTTON_TYPES } from '~/libs/constants/ui';

const ICONS = [
	{
		index: '1',
		src: '/rive/enterprise/03_describe.riv',
		title: 'DESCRIBE',
		description: 'Tell us the actions you need done',
	},
	{
		index: '2',
		src: '/rive/enterprise/03_deploy.riv',
		title: 'DEPLOY',
		description: 'AI Agents learn your workflow',
	},
	{
		index: '3',
		src: '/rive/enterprise/03_scale.riv',
		title: 'SCALE',
		description: 'From 1 to 10.000 instantly',
	},
];

const $section = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const lastIndex = ref(-1);
const scope = effectScope();

const { isDesktop } = useBreakpoints();
const { top } = useElementBounding($section);
const { height } = useWindowSize();

scope.run(async () => {
	useLenis(() => {
		if (!$section.value) return;

		lastIndex.value = activeIndex.value;
		const start = 0;
		const end = $section.value.offsetHeight - height.value;
		const scrolled = Math.min(Math.max(-top.value, start), end);
		const progress = scrolled / end;
		const index = Math.min(2, Math.floor(progress / 0.33));
		activeIndex.value = index;
	});
});
</script>

<style lang="scss" scoped>
.enterprise-ready {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		position: relative;
		justify-content: flex-start;
		align-self: self-start;
		height: 300lvh;
	}

	> div {
		@include desktop {
			position: sticky;
			top: 0;
			width: 100%;
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	&__rive__mobile {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);

		> div {
			position: relative;
			display: flex;
			width: 100%;

			> div {
				position: relative;
				width: 100%;
				aspect-ratio: 1;

				&:nth-child(2) {
					display: flex;
					flex-direction: column;
					justify-content: center;

					p {
						max-width: 320px;
						text-wrap: balance;
					}
				}
			}
		}
	}

	&__rive {
		position: relative;
		width: 100%;
		aspect-ratio: 1.85;
		z-index: 1;

		@include desktop {
			position: absolute;
			right: 0;
			bottom: 5%;
			width: 80%;
			height: 100%;
		}

		&__item {
			position: absolute;
			width: 70%;
			aspect-ratio: 1.25;
			bottom: 0%;
			left: 50%;
			transform: translate(-50%, -25%);

			> div {
				position: absolute;
				width: 100%;
				height: 100%;
				bottom: 0;
				left: 0;

				> div {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translate(calc(100% - 3vw), -50%);

					p {
						max-width: 220px;
					}
				}
			}

			@include desktop {
				width: 40%;
				// height: 40%;
			}
		}
	}

	hgroup {
		position: relative;
		z-index: 2;
		transform: translate(calc(var(--spacer-16) * -1), 0);

		@include desktop {
			transform: translate(calc(var(--spacer-16) * -1), -30%);
		}

		.h2 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			@include desktop {
				@include h1;
			}

			> * {
				margin-top: -1px;
			}
		}

		img {
			width: auto;
			height: 30px;

			@include desktop {
				height: 80px;
			}
		}
	}
}
</style>
