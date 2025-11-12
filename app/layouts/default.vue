<template>
	<lenis :options="{}">
		<div :class="['container']">
			<site-header />

			<page-transition>
				<slot />
			</page-transition>

			<site-footer v-if="$route.name !== '404'" />

			<client-only>
				<ui-frame />

				<dev-only>
					<debug-orchestra />
				</dev-only>
			</client-only>
		</div>
	</lenis>
</template>

<script setup lang="ts">
//import useAppStore from '~/store/useAppStore';
//const $store = useAppStore();
</script>

<style lang="scss" scoped>
.container {
	position: relative;
	z-index: 1;
}
</style>
