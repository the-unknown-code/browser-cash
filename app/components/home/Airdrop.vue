<template>
	<section class="home-airdrop">
		<hgroup>
			<div class="title h2">
				<animation-block>
					<span>Join the</span>
					<nuxt-img
						src="/images/energy.png"
						alt="Energy"
						loading="lazy"
						quality="80"
						format="webp"
						class="icon"
					/>
					<span>Airdrop</span>
				</animation-block>
				<animation-block :delay="0.1">
					<span>revolution</span>
				</animation-block>
			</div>
		</hgroup>
		<div class="home-airdrop__slider">
			<utils-slider :options="{ infinite: true, snap: false, lerpFactor: 0.1 }">
				<div v-for="(card, index) in CARDS" :key="index" class="slide">
					<div data-parallax>
						<ui-card :block="card" />
					</div>
				</div>
			</utils-slider>
		</div>
	</section>
</template>

<script setup lang="ts">
const CARDS = [
	{
		description: 'Earn points for token airdrop and community rewards',
		rive: '/rive/card_flowers.riv',
	},
	{
		description: 'Power real AI agents, not data collection',
		rive: '/rive/card_brain.riv',
	},
	{
		description: 'Complete privacy protection. Your data system stays yours',
		rive: '/rive/card_lock.riv',
	},
	{
		description: 'Zero impact browsing performance guaranteed',
		rive: '/rive/card_timer.riv',
		right: true,
	},
	{
		description: 'Join global automation network. Be part of the AI workforce',
		rive: '/rive/card_smiley.riv',
		right: true,
	},
	{
		description: 'Complete privacy protection. Your data system stays yours',
		rive: '/rive/card_crown.riv',
		right: true,
	},
	{
		description: 'Earn points for token airdrop and community rewards',
		rive: '/rive/card_flowers.riv',
	},
	{
		description: 'Power real AI agents, not data collection',
		rive: '/rive/card_brain.riv',
	},
	{
		description: 'Complete privacy protection. Your data system stays yours',
		rive: '/rive/card_lock.riv',
	},
	{
		description: 'Zero impact browsing performance guaranteed',
		rive: '/rive/card_timer.riv',
		right: true,
	},
	{
		description: 'Join global automation network. Be part of the AI workforce',
		rive: '/rive/card_smiley.riv',
		right: true,
	},
	{
		description: 'Complete privacy protection. Your data system stays yours',
		rive: '/rive/card_crown.riv',
		right: true,
	},
];
</script>

<style lang="scss" scoped>
.home-airdrop {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: var(--spacer-32) 0;
	min-height: 90lvh;

	@include desktop {
		min-height: 100lvh;
		justify-content: flex-start;
		padding: var(--spacer-64) 0;
	}

	hgroup {
		position: relative;
		transform: translate(calc(var(--spacer-16) * -1), 0);

		@include desktop {
			// transform: translate(calc(var(--spacer-16) * -1), 0);
		}

		.title {
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
				height: 70px;
			}
		}
	}

	&__slider {
		position: relative;

		width: 100%;
		margin-top: calc(var(--spacer-64) * 2);

		.slide {
			position: relative;
			display: block;
			width: clamp(300px, 33%, 400px);
			padding: 0 var(--spacer-16);

			&:nth-child(2n) {
				top: calc(var(--spacer-32) * -1);
			}

			&:nth-child(3n) {
				top: calc(var(--spacer-64) * -1);
			}

			> div {
				position: relative;
				display: block;
			}
		}
	}
}
</style>
