<template>
	<footer :class="['site-footer', $store.theme]">
		<ul class="layout-grid">
			<li class="nav-item">
				<ui-nav-item href="/extension" label="Extension" simple />
				<ui-nav-item href="/enterprise" label="Enterprise" simple />
			</li>
			<li class="nav-item">
				<ui-nav-item href="/blog" label="Blog" simple />
				<ui-nav-item
					href="http://www.google.com"
					label="Docs"
					simple
					external
				/>
			</li>
			<li class="nav-item">
				<ui-nav-item
					href="https://www.google.com"
					label="Link 01"
					simple
					external
				/>
				<ui-nav-item
					href="https://www.google.com"
					label="Link 02"
					simple
					external
				/>
			</li>
			<li class="social">
				<div class="social-item">
					<common-a-link href="https://www.discord.com" aria-label="Discord">
						<common-svg-mask svg="/images/discord.svg" />
					</common-a-link>
				</div>
				<div class="social-item">
					<common-a-link href="https://www.telegram.com" aria-label="Telegram">
						<common-svg-mask svg="/images/telegram.svg" />
					</common-a-link>
				</div>
				<div class="social-item">
					<common-a-link href="https://www.x.com" aria-label="X">
						<common-svg-mask svg="/images/x.svg" />
					</common-a-link>
				</div>
			</li>
		</ul>
		<div class="layout-grid">
			<span class="caption">
				Copyright @BrowserCash - {{ new Date().getFullYear() }}
			</span>
		</div>
	</footer>
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
</script>

<style lang="scss" scoped>
.site-footer {
	position: relative;
	background-color: var(--yellow);
	padding: var(--spacer-32) 0 var(--spacer-32) 0;
	transition: background-color var(--duration-fast) var(--ease-in-out-circ);

	&:where(.theme-dark) {
		background-color: var(--teal);
	}

	ul {
		padding-bottom: var(--spacer-64);
	}

	li {
		&.nav-item {
			display: flex;
			flex-direction: column;
			gap: var(--spacer-16);
			grid-column: span 2;
			margin-bottom: var(--spacer-16);
		}

		&.social {
			display: flex;
			flex-direction: row;
			gap: var(--spacer-16);
			grid-column: -1 / 1;

			@include desktop {
				justify-content: flex-end;
				grid-column: span 6;
			}
		}

		.social-item {
			position: relative;
			border-radius: 50%;
			width: 48px;
			height: 48px;

			&:deep(.svg-mask) {
				position: relative;
				width: 48px;
				height: 48px;
				background-color: var(--black);
			}

			@include desktop {
				transition: background-color var(--duration-fast)
					var(--ease-in-out-circ);

				&:deep(.svg-mask) {
					transition: background-color var(--duration-fast)
						var(--ease-in-out-circ);
				}

				&:hover {
					background-color: var(--black);

					&:deep(.svg-mask) {
						background-color: var(--yellow);
					}
				}
			}
		}
	}

	&:where(.theme-dark *) {
		.social-item {
			@include desktop {
				&:hover {
					&:deep(.svg-mask) {
						background-color: var(--teal) !important;
					}
				}
			}
		}
	}

	.caption {
		grid-column: -1 / 1;
	}
}
</style>
