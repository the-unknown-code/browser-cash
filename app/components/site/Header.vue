<template>
	<header class="site-header">
		<div class="layout-block">
			<ui-logo />
			<ul v-show="isDesktop" role="navigation" class="site-header__nav">
				<li role="navigation-item">
					<ui-nav-item href="/extension" label="Extension" />
					<ui-nav-item href="/enterprise" label="Enterprise" />
					<ui-nav-item href="/blog" label="Blog" />
					<ui-nav-item href="https://www.google.com" label="Docs" external />
					<ui-nav-item href="/contact-us" label="Contact Us" />
				</li>
				<li>
					<ui-cta
						href="https://www.google.com"
						label="Login"
						:type="BUTTON_TYPES.PRIMARY"
						external
					/>
				</li>
				<li>
					<ui-cta
						href="https://www.google.com"
						label="Sign Up"
						:type="BUTTON_TYPES.SECONDARY"
						external
					/>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from '~/libs/constants/ui';
const { isDesktop } = useBreakpoints();
</script>

<style lang="scss" scoped>
.site-header {
	position: fixed;
	width: 100%;
	padding: var(--spacer-32) 0 var(--spacer-16) 0;
	z-index: 100;
	background: linear-gradient(to bottom, var(--white-80) 40%, transparent 90%);
	// mix-blend-mode: difference;

	@include desktop {
		padding: var(--spacer-32) 0 var(--spacer-16) 0;
	}

	.layout-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--spacer-16);
	}
}
</style>
