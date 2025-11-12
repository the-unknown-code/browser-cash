<template>
	<section id="extension-pre-footer" class="extension-pre-footer">
		<client-only>
			<div class="extension-pre-footer__rive">
				<canvas-rive
					:params="{
						src: '/rive/grid_footer.riv',
						layout: new Layout({
							fit: Fit.Cover,
							alignment: Alignment.BottomCenter,
						}),
					}"
				/>
			</div>
		</client-only>
		<div class="extension-pre-footer__content">
			<p class="h3">Join the future, download the extension.</p>
			<div class="extension-pre-footer__content__buttons">
				<ui-cta
					:type="BUTTON_TYPES.PRIMARY"
					:href="resolveLink(GLOBAL_LINKS.chrome_link)"
					label="Download for Chrome"
					icon="/images/chrome.svg"
				/>
				<ui-cta
					:type="BUTTON_TYPES.PRIMARY"
					:href="resolveLink(GLOBAL_LINKS.windows_link)"
					label="Download for Windows"
					icon="/images/windows.svg"
				/>
				<ui-cta
					:type="BUTTON_TYPES.PRIMARY"
					:href="resolveLink(GLOBAL_LINKS.linux_link)"
					label="Download for Linux"
					icon="/images/linux.svg"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Alignment, Fit, Layout } from '@rive-app/canvas-lite';
import { BUTTON_TYPES, STORYBLOK_COMPONENTS } from '~/libs/constants/ui';
import { resolveLink } from '~/libs/storyblok/utils';
import useAppStore from '~/store/useAppStore';
const $store = useAppStore();

const GLOBAL_LINKS = computed(() => {
	return $store.globalSettings.content?.body?.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.GLOBAL_LINKS
	);
});
</script>

<style lang="scss" scoped>
.extension-pre-footer {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: hidden;
	width: 100%;

	@include desktop {
		padding: 0;
	}

	&__content {
		position: relative;
		left: 0;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacer-32);
		padding: var(--spacer-96) 0;

		@include desktop {
			position: absolute;
			top: 10vw;
			padding: 0;
		}

		.h3 {
			position: relative;
			text-align: center;
			max-width: 640px;
		}

		&__buttons {
			position: relative;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: var(--spacer-16);

			@include desktop {
				width: auto;
				flex-direction: row;
			}

			&:deep(.ui-cta) {
				max-width: 320px;

				span {
					order: 2;
				}

				@include desktop {
					max-width: unset;
				}

				@include mobile {
					width: 100%;

					a {
						width: 100%;
					}

					.ui-cta--content {
						justify-content: center;
						width: 100%;
					}
				}
			}

			&:deep(.svg-mask) {
				order: 1;
			}
		}
	}

	&__rive {
		position: absolute;
		width: 100%;

		@include mobile {
			aspect-ratio: 1;

			&:deep(.canvas-rive) {
				width: 300%;
				aspect-ratio: 2;
				height: auto;
				left: 50%;
				transform: translate(-50%, 0);
			}
		}

		@include desktop {
			position: relative;
			aspect-ratio: 2;
			left: -30%;
		}
	}
}
</style>
