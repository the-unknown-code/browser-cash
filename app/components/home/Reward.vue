<template>
	<section ref="$section" class="home-reward">
		<div>
			<hgroup>
				<div role="heading" aria-level="1" class="h2">
					<animation-block>
						<span>Browser</span>
						<nuxt-img
							src="/images/smile.png"
							alt="Smiley"
							loading="lazy"
							quality="80"
							format="webp"
							class="icon"
						/>
						<span>Cash</span>
					</animation-block>
					<animation-block :delay="0.1">
						<span>makes browsing</span>
					</animation-block>
					<animation-block :delay="0.2">
						<span>rewarding</span>
					</animation-block>
				</div>
			</hgroup>

			<client-only>
				<div v-if="isDesktop" class="home-reward__rive">
					<canvas-rive
						:params="{
							src: '/rive/browser_grid.riv',
							layout: new Layout({
								fit: Fit.Contain,
								alignment: Alignment.BottomCenter,
							}),
						}"
					/>

					<div class="home-reward__rive__item">
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
				<div v-else class="home-reward__rive__mobile">
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
							<p class="mono-small">{{ String(index).padStart(2, '0') }}.</p>
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

const ICONS = [
	{
		index: '1',
		src: '/rive/browser_install.riv',
		title: 'Install',
		description: 'One-click extension setup',
	},
	{
		index: '2',
		src: '/rive/browser_perform.riv',
		title: 'Perform',
		description: 'Your browser performs action passively',
	},
	{
		index: '3',
		src: '/rive/browser_earn.riv',
		title: 'Earn',
		description: 'Accumulate points for rewards',
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
.home-reward {
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
