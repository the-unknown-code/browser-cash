<template>
	<article ref="$article" class="blog-article layout-grid">
		<div>
			<div class="blog-article__info">
				<p class="caption">{{ ARTICLE.category }}</p>
				<p class="caption">{{ ARTICLE.time }}</p>
			</div>
		</div>
		<div class="blog-article__content">
			<template v-for="item in ARTICLE.content" :key="item.type">
				<h2 v-if="item.type === 'title'" class="p-big">{{ item.text }}</h2>
				<p v-else-if="item.type === 'paragraph'" class="p-small">
					{{ item.text }}
				</p>
				<p v-else-if="item.type === 'author'" class="caption">
					<span>Author:</span> {{ item.text }}
				</p>
			</template>
		</div>
	</article>
</template>

<script setup lang="ts">
const ARTICLE = {
	category: 'Product Release',
	time: '5 min read',
	content: [
		{
			type: 'title',
			text: "This guide walks through building a comprehensive market research platform that generates detailed industry reports using Parallel's Deep Research product. The application demonstrates how to create a production-ready system that handles real-time streaming, intelligent input validation and email notifications.",
		},
		{
			type: 'paragraph',
			text: 'Sed maximus, leo at auctor tempor, tortor arcu ullamcorper velit, eu faucibus lorem tortor in turpis. Nulla rutrum, lacus id tempor blandit, turpis dolor mattis elit, eu feugiat lectus velit sed metus. Cras auctor mauris eu arcu posuere, ac fermentum orci semper. Nulla iaculis eu erat in accumsan. Pellentesque ac risus et mi maximus vestibulum sit amet eget ante. Aenean nec fringilla est, ac convallis dolor. Proin sodales augue neque, eget lobortis turpis ultricies sit amet. Proin tincidunt sagittis lacus. Praesent auctor tortor in bibendum congue. Nullam eu iaculis enim. Etiam hendrerit, tellus eu sodales varius, nibh ipsum gravida purus, at lobortis nulla neque a ipsum. Donec egestas condimentum nibh, id commodo nunc tempor non. Nullam elementum ut nisl ac volutpat. Ut a nulla nec ante aliquam tempus. Donec nec mi nulla.',
		},
		{
			type: 'paragraph',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus velit. Nulla maximus pretium leo, in sodales tortor fermentum id. Nam quam diam, hendrerit eget dignissim non, tincidunt vitae turpis. Etiam vel augue finibus, ornare orci nec, egestas metus. Nulla dignissim mi magna. Cras posuere arcu erat, a suscipit elit ultrices at. Suspendisse venenatis bibendum efficitur. Praesent eleifend accumsan maximus. Nunc accumsan nibh metus, eget aliquet felis laoreet ut. Mauris id purus eleifend, aliquam augue nec, laoreet nulla. Etiam ac finibus elit, ac ornare ante. Aliquam felis metus, consequat nec risus vel, dictum consequat augue.',
		},
		{
			type: 'paragraph',
			text: 'Sed maximus, leo at auctor tempor, tortor arcu ullamcorper velit, eu faucibus lorem tortor in turpis. Nulla rutrum, lacus id tempor blandit, turpis dolor mattis elit, eu feugiat lectus velit sed metus. Cras auctor mauris eu arcu posuere, ac fermentum orci semper. Nulla iaculis eu erat in accumsan. Pellentesque ac risus et mi maximus vestibulum sit amet eget ante. Aenean nec fringilla est, ac convallis dolor. Proin sodales augue neque, eget lobortis turpis ultricies sit amet. Proin tincidunt sagittis lacus. Praesent auctor tortor in bibendum congue. Nullam eu iaculis enim. Etiam hendrerit, tellus eu sodales varius, nibh ipsum gravida purus, at lobortis nulla neque a ipsum. Donec egestas condimentum nibh, id commodo nunc tempor non. Nullam elementum ut nisl ac volutpat. Ut a nulla nec ante aliquam tempus. Donec nec mi nulla.',
		},
		{
			type: 'paragraph',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus velit. Nulla maximus pretium leo, in sodales tortor fermentum id. Nam quam diam, hendrerit eget dignissim non, tincidunt vitae turpis. Etiam vel augue finibus, ornare orci nec, egestas metus. Nulla dignissim mi magna. Cras posuere arcu erat, a suscipit elit ultrices at. Suspendisse venenatis bibendum efficitur. Praesent eleifend accumsan maximus. Nunc accumsan nibh metus, eget aliquet felis laoreet ut. Mauris id purus eleifend, aliquam augue nec, laoreet nulla. Etiam ac finibus elit, ac ornare ante. Aliquam felis metus, consequat nec risus vel, dictum consequat augue.',
		},
		{
			type: 'paragraph',
			text: 'Sed maximus, leo at auctor tempor, tortor arcu ullamcorper velit, eu faucibus lorem tortor in turpis. Nulla rutrum, lacus id tempor blandit, turpis dolor mattis elit, eu feugiat lectus velit sed metus. Cras auctor mauris eu arcu posuere, ac fermentum orci semper. Nulla iaculis eu erat in accumsan. Pellentesque ac risus et mi maximus vestibulum sit amet eget ante. Aenean nec fringilla est, ac convallis dolor. Proin sodales augue neque, eget lobortis turpis ultricies sit amet. Proin tincidunt sagittis lacus. Praesent auctor tortor in bibendum congue. Nullam eu iaculis enim. Etiam hendrerit, tellus eu sodales varius, nibh ipsum gravida purus, at lobortis nulla neque a ipsum. Donec egestas condimentum nibh, id commodo nunc tempor non. Nullam elementum ut nisl ac volutpat. Ut a nulla nec ante aliquam tempus. Donec nec mi nulla.',
		},
		{
			type: 'paragraph',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus velit. Nulla maximus pretium leo, in sodales tortor fermentum id. Nam quam diam, hendrerit eget dignissim non, tincidunt vitae turpis. Etiam vel augue finibus, ornare orci nec, egestas metus. Nulla dignissim mi magna. Cras posuere arcu erat, a suscipit elit ultrices at. Suspendisse venenatis bibendum efficitur. Praesent eleifend accumsan maximus. Nunc accumsan nibh metus, eget aliquet felis laoreet ut. Mauris id purus eleifend, aliquam augue nec, laoreet nulla. Etiam ac finibus elit, ac ornare ante. Aliquam felis metus, consequat nec risus vel, dictum consequat augue.',
		},
		{
			type: 'author',
			text: 'Andrea Giuffrida',
		},
	],
};

const $article = ref<HTMLElement | null>(null);
const scope = effectScope();

scope.run(async () => {
	useLenis(({ progress }) => {
		if (!$article.value) return;
		$article.value.style.setProperty('--progress', `${progress * 120}px`);
	});
});

tryOnBeforeUnmount(() => {
	scope.stop();
});
</script>

<style lang="scss" scoped>
.blog-article {
	$desktop-width: 1024px;

	padding: var(--spacer-64) 0;

	> div {
		grid-column: -1 / 1;
	}

	@media screen and (min-width: $desktop-width) {
		> div {
			&:nth-child(1) {
				grid-column: 2 / span 1;
			}
			&:nth-child(2) {
				grid-column: 4 / span 7;
			}
		}
	}

	&__info {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--spacer-8);
		margin-bottom: var(--spacer-32);

		@media screen and (min-width: $desktop-width) {
			position: sticky;
			margin-bottom: 0;
			top: var(--spacer-96);

			&::before,
			&::after {
				content: '';
				position: absolute;
				width: 1px;
				height: 120px;
				background-color: var(--yellow);
				right: 0;
				top: 0;
			}

			&::after {
				background-color: var(--black);
				height: var(--progress);
			}
		}

		p {
			&:first-child {
				text-transform: uppercase;
			}
		}
	}

	&__content {
		> * {
			position: relative;
			margin: var(--spacer-32) 0;

			&:first-child {
				margin-top: 0;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
