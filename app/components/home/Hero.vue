<template>
	<section class="home-hero">
		<hgroup>
			<h1 role="heading" aria-level="1" class="h2">
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
					<span>Power the future</span>
				</animation-block>
				<animation-block :delay="0.2">
					<span>of AI</span>
					<nuxt-img
						src="/images/stars.png"
						alt="Stars"
						loading="lazy"
						quality="80"
						format="webp"
						class="icon"
					/>
					<span>browser</span>
				</animation-block>
				<animation-block :delay="0.3">
					<span>agents.</span>
					<ui-cta
						:type="BUTTON_TYPES.PRIMARY"
						:href="link"
						label="Download extension"
						icon="/images/arrow.svg"
					/>
				</animation-block>
			</h1>
		</hgroup>
	</section>
</template>

<script setup lang="ts">
import { BUTTON_TYPES, STORYBLOK_COMPONENTS } from '~/libs/constants/ui';
import { resolveLink } from '~/libs/storyblok/utils';
import useAppStore from '~/store/useAppStore';
const { isChrome, isWindows, isLinux } = useClientEnvironment();

const $store = useAppStore();
const GLOBAL_LINKS = computed(() => {
	return $store.globalSettings.content?.body?.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.GLOBAL_LINKS
	);
});

const link = computed(() => {
	if (isChrome) {
		return resolveLink(GLOBAL_LINKS.value?.chrome_link);
	}
	if (isWindows) {
		return resolveLink(GLOBAL_LINKS.value?.windows_link);
	}
	if (isLinux) {
		return resolveLink(GLOBAL_LINKS.value?.linux_link);
	}
	return resolveLink('/extension');
});
</script>

<style lang="scss" scoped>
.home-hero {
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
