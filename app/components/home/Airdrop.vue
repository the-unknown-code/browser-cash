<template>
	<section class="home-airdrop">
		<hgroup>
			<h1 class="h2">
				<animation-block>
					<span>Join the</span>
					<img src="/images/energy.png" alt="Energy" width="90" height="90" />
					<span>Airdrop</span>
				</animation-block>
				<animation-block :delay="0.1">
					<span>revolution</span>
				</animation-block>
			</h1>
		</hgroup>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-airdrop {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@include desktop {
		// justify-content: center;
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
				height: 70px;
			}
		}
	}
}
</style>
