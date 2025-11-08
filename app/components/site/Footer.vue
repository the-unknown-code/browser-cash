<template>
	<footer class="site-footer">
		<ul class="layout-grid">
			<li class="nav-item">
				<ui-nav-item href="/enterprise" label="Enterprise" simple />
			</li>
			<li class="nav-item"></li>
			<li class="nav-item"></li>
		</ul>
	</footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.site-footer {
	position: relative;
	background-color: var(--yellow);
	padding: var(--spacer-32) 0;

	ul {
		padding-bottom: var(--spacer-64);
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);

		@include desktop {
			grid-column: span 2;
		}
	}
}
</style>
