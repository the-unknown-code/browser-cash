<template>
	<section class="home-reward">
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
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-reward {
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
