<template>
	<header class="site-header">
		<div class="layout-block">
			<ui-logo />
			<ul role="navigation" class="site-header__nav">
				<li role="navigation-item">
					<ui-nav-item href="/enterprise" label="Enterprise" />
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.site-header {
	position: fixed;
	width: 100%;

	@include desktop {
		padding: var(--spacer-32) 0 var(--spacer-16) 0;
	}

	.layout-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
