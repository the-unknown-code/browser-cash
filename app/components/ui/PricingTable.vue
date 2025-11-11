<template>
	<div class="ui-pricing-table">
		<nuxt-img
			src="/images/smile.png"
			alt="Smile"
			loading="lazy"
			quality="100"
			format="webp"
			class="icon"
		/>
		<div class="ui-pricing-table__grid">
			<div>
				<p class="p-tiny">INPUTS</p>
				<p class="p-tiny">OUTPUTS</p>
				<p class="p-tiny">LATENCY</p>
				<p class="p-tiny">RATE LIMITS</p>
				<p class="p-tiny">SESSION LIMIT</p>
				<p class="p-tiny price">PRICING</p>
			</div>
			<div>
				<div class="h4">Browser<br />as a service</div>
				<div class="p-tiny">
					<span class="mobile-title">INPUTS</span>
					<div>
						<ui-label
							label="Existing Structured Data"
							color="var(--off-white)"
						/>
						<ui-label label="Questions" color="var(--off-white)" />
					</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">OUTPUTS</span>
					<div>
						<ui-label label="Deep Research" color="var(--teal-70)" />
						<ui-label label="Structured Enrichments" color="var(--teal-70)" />
					</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">LATENCY</span>
					<div>5s - 30 min, asynchronous</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">RATE LIMITS</span>
					<div>2,000 requests / min</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">SESSION LIMIT</span>
					<div>30 min</div>
				</div>
				<div class="p-tiny price">
					<span class="mobile-title">PRICING</span>
					<div>
						<span class="p-big">$ 0.09</span>
						<span> / hr</span>
					</div>
				</div>
			</div>
			<div>
				<div class="h4">Browser Agent<br />as a service</div>
				<div class="p-tiny">
					<span class="mobile-title">INPUTS</span>
					<div>
						<ui-label
							label="Existing Structured Data"
							color="var(--off-white)"
						/>
						<ui-label label="Questions" color="var(--off-white)" />
					</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">OUTPUTS</span>
					<div>
						<ui-label label="Deep Research" color="var(--teal-70)" />
						<ui-label label="Structured Enrichments" color="var(--teal-70)" />
					</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">LATENCY</span>
					<div>5s - 30 min, asynchronous</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">RATE LIMITS</span>
					<div>2,000 requests / min</div>
				</div>
				<div class="p-tiny">
					<span class="mobile-title">SESSION LIMIT</span>
					<div>30 min</div>
				</div>
				<div class="p-tiny price">
					<span class="mobile-title">PRICING</span>
					<div>
						<span class="p-big">$ 2</span>
						<span>[ M input tokens ]</span>
					</div>
					<div>
						<span class="p-big">$ 8</span>
						<span>[ M output tokens ]</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-pricing-table {
	$tablet-width: 800px;
	$desktop-width: 1600px;

	position: relative;
	width: 100%;
	border-radius: var(--spacer-24);
	border: 1.5px solid var(--black);
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	user-select: none;

	img {
		position: absolute;
		top: 0;

		@include mobile {
			right: 0;
			width: 70px;
			height: auto;
			transform: translate(0%, -50%) rotate(20deg);
		}

		@include desktop {
			left: 0;
			width: 90px;
			height: auto;
			transform: translate(-50%, -30%) rotate(-20deg);
		}
	}

	&::before {
		content: '';
		@include fill(absolute);
		background-color: var(--teal);
		transform: translate(calc(var(--spacer-8) * 1), calc(var(--spacer-8) * 1));
		border-radius: var(--spacer-24);
		border: 1.5px solid var(--black);
		z-index: -1;
	}

	&__grid {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;

		.mobile-title {
			color: var(--aqua);

			@media screen and (min-width: $desktop-width) {
				display: none;
			}
		}

		.p-tiny {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: var(--spacer-4);
			min-height: 64px;

			@media screen and (min-width: $tablet-width) {
				min-height: 32px;
			}

			@media screen and (min-width: $desktop-width) {
				min-height: 32px;
			}

			&.price {
				@media screen and (min-width: $tablet-width) {
					height: 110px;

					> div {
						margin-top: -10px;
					}
				}
			}

			> div {
				display: flex;
				gap: var(--spacer-8);
				align-items: center;
			}
		}

		.h4 {
			margin-bottom: var(--spacer-32);
		}

		> div {
			display: flex;
			flex-direction: column;
			// gap: var(--spacer-32);
			padding: var(--spacer-32) var(--spacer-24);

			&:nth-child(1) {
				display: none;
			}

			&:nth-child(2) {
				border-bottom: 1px solid var(--black);
			}
		}

		@media screen and (min-width: $tablet-width) {
			display: grid;
			grid-template-columns: repeat(4, 1fr);

			> div {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				gap: var(--spacer-32);
				padding: var(--spacer-48) var(--spacer-24);
				border-right: 1px solid var(--black);

				&:nth-child(2) {
					grid-column: span 2;
					border-bottom: none;
				}

				&:nth-child(3) {
					grid-column: span 2;
					border-right: none;
				}
			}
		}

		@media screen and (min-width: $desktop-width) {
			grid-template-columns: repeat(5, 1fr);

			> div {
				&:nth-child(1) {
					display: flex;
					grid-column: span 1;
				}

				&:nth-child(2) {
					grid-column: span 2;
				}
				&:nth-child(3) {
					grid-column: span 2;
				}
			}
		}
	}
}
</style>
