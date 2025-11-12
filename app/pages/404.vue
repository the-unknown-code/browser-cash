<template>
	<main class="page-404 layout-block">
		<client-only>
			<animation-home />
		</client-only>
		<section class="page-404-hero">
			<hgroup>
				<h1 role="heading" aria-level="1" class="h2">
					<animation-block>
						<span>404</span>
					</animation-block>
					<animation-block :delay="0.1">
						<span>Looks</span>
						<nuxt-img
							src="/images/smile.png"
							alt="Smiley"
							loading="lazy"
							quality="80"
							format="webp"
							class="icon"
						/>
						<span>Like</span>
					</animation-block>
					<animation-block :delay="0.2">
						<span>you got caught</span>
					</animation-block>
					<animation-block :delay="0.3">
						<span>in an infinite</span>
						<nuxt-img
							src="/images/stars.png"
							alt="Stars"
							loading="lazy"
							quality="80"
							format="webp"
							class="icon"
						/>
						<span>loop</span>
					</animation-block>
				</h1>
			</hgroup>
		</section>
		<div id="overlay" />
	</main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-404 {
	position: relative;
	min-height: 100lvh;
}

#overlay {
	@include fill(fixed);
	background-color: var(--yellow);
	z-index: 100000;
	mix-blend-mode: darken;
	pointer-events: none;
}

.page-404-hero {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		justify-content: center;
	}

	hgroup {
		position: relative;
		transform: translate(
			calc(var(--spacer-16) * -1),
			calc(var(--spacer-64) * 2)
		);

		@include desktop {
			transform: translate(calc(var(--spacer-16) * -1), 0);
		}

		h1 {
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
