<template>
	<section class="home-hero">
		<hgroup>
			<h1 class="h1">
				<animation-block>
					<span>Browser</span>
					<img src="/images/smile.png" alt="Smiley" width="90" height="90" />
					<span>Cash</span>
				</animation-block>
				<animation-block :delay="0.1">
					<span>Power the future</span>
				</animation-block>
				<animation-block :delay="0.2">
					<span>of AI</span>
					<img src="/images/stars.png" alt="Stars" width="90" height="90" />
					<span>Cash</span>
				</animation-block>
				<animation-block :delay="0.3">
					<span>agents.</span>
					<ui-cta
						:type="BUTTON_TYPES.PRIMARY"
						href="/extension"
						label="Download  extension"
						icon="/images/arrow.svg"
					/>
				</animation-block>
			</h1>
		</hgroup>
	</section>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';
</script>

<style lang="scss" scoped>
.home-hero {
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	hgroup {
		position: relative;
		transform: translateX(calc(var(--spacer-16) * -1));

		h1 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			> * {
				margin-top: -1px;
			}
		}

		img {
			width: auto;
			height: 80px;
		}
	}
}
</style>
