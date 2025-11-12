<template>
	<header class="site-header">
		<div class="layout-block">
			<ui-logo />
			<ul v-show="isDesktop" role="navigation" class="site-header__nav">
				<li v-for="item in HEADER.navigation" :key="item.id">
					<ui-nav-item
						:class="{ active: $route.name === item.label }"
						:href="resolveLink(item.link)"
						:label="item.label"
						:external="item.external"
					/>
				</li>

				<li v-for="item in HEADER.buttons" :key="item.id">
					<ui-cta
						:href="resolveLink(item.url)"
						:label="item.label"
						:type="item.type"
						:external="item.external"
					/>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup lang="ts">
import { STORYBLOK_COMPONENTS } from '~/libs/constants/ui';
import { resolveLink } from '~/libs/storyblok/utils';
import useAppStore from '~/store/useAppStore';
const { isDesktop } = useBreakpoints();

const $store = useAppStore();

const HEADER = computed(() =>
	$store.globalSettings.content?.body?.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.HEADER
	)
);
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
