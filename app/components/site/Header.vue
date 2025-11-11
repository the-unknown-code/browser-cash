<template>
	<header class="site-header">
		<div class="layout-block">
			<ui-logo />
			<ul v-show="isDesktop" role="navigation" class="site-header__nav">
				<li>
					<ui-nav-item
						:class="{ active: $route.name === 'extension' }"
						href="/extension"
						label="Extension"
					/>
				</li>
				<li>
					<ui-nav-item
						:class="{ active: $route.name === 'enterprise' }"
						href="/enterprise"
						label="Enterprise"
					/>
				</li>
				<li>
					<ui-nav-item
						:class="{ active: $route.name === 'blog' }"
						href="/blog"
						label="Blog"
					/>
				</li>
				<li>
					<ui-nav-item href="https://www.google.com" label="Docs" external />
				</li>

				<!--
				<li>
					<ui-nav-item href="/contact-us" label="Contact Us" />
				</li>
				-->

				<li>
					<ui-cta
						href="https://www.google.com"
						label="Login"
						:type="
							$route.name === 'enterprise'
								? BUTTON_TYPES.INVERTED
								: BUTTON_TYPES.PRIMARY
						"
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
	top: 0;
	left: 0;
	width: 100%;
	padding: var(--spacer-32) 0 var(--spacer-16) 0;
	z-index: 10000;

	// mix-blend-mode: difference;

	&:before {
		content: '';
		@include fill(absolute);
		width: calc(100% - var(--spacer-16) * 2 - 2px);
		top: calc(var(--spacer-16) + 1px);
		left: calc(var(--spacer-16) + 1px);
		height: 100%;
		background: linear-gradient(
			to bottom,
			var(--white-80) 40%,
			transparent 90%
		);
	}

	&:where(.theme-dark *) {
		&:before {
			background: linear-gradient(
				to bottom,
				var(--off-white-80) 40%,
				transparent 90%
			);
		}
	}

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
		gap: var(--spacer-8);

		&:deep(.ui-nav-item) {
			position: relative;

			&::before {
				content: '';
				@include fill(absolute);
				transform: translateY(-34px);
				width: 100%;
				height: 9px;
				border: 1.5px solid var(--black);
				border-radius: var(--spacer-16);
				background-color: var(--yellow);
				opacity: 0;
				z-index: 1;
			}

			&:where(.theme-dark *) {
				&::before {
					background-color: var(--teal);
				}
			}

			&.active {
				pointer-events: none !important;
				&::before {
					opacity: 1;
				}
			}
		}
	}
}
</style>
