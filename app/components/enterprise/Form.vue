<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';
</script>

<template>
	<section class="enterprise-form">
		<p class="h3">Contact Us</p>
		<form>
			<ui-input label="Your Name" type="text" />
			<ui-input label="Your Email" type="email" />
			<ui-input label="Your Message" textarea />
			<ui-checkbox label="I agree to the <u>Privacy Policy</u>" />
			<ui-cta :type="BUTTON_TYPES.INVERTED" href="#" label="Sign Up Now" />
		</form>
	</section>
</template>

<style lang="scss" scoped>
.enterprise-form {
	padding: var(--spacer-64) 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--spacer-32);

	form {
		position: relative;
		width: 100%;
		max-width: 420px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacer-16);

		&:deep(.ui-cta) {
			width: 100%;

			.a-div {
				width: 100%;
				text-align: center;
			}

			.ui-cta--content {
				width: 100%;
				text-align: center;
			}
		}
	}
}
</style>
