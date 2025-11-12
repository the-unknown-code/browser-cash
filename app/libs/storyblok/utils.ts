import { richTextResolver } from '@storyblok/richtext';
import useAppStore from '~/store/useAppStore';
import _get from 'lodash/get';
import { generateHead } from '../common/utils';

export const useUnwrapBlok = (blokIn: any) => {
	return Array.isArray(blokIn) ? blokIn[0] : blokIn;
};

export const useStoryblokHead = (story: any = {}) => {
	const $store = useAppStore();

	const pageSEO = _get(unref(story), 'content.seo[0]');
	const settingsSEO = $store.globalSettings.content?.seo?.[0] || {};

	const seoTitle = pageSEO.title || settingsSEO.title || '';
	const seoDescription = pageSEO.description || settingsSEO.description || '';
	const seoImage = pageSEO.image.filename || settingsSEO.image.filename || '';

	useHead(generateHead(seoTitle, seoDescription, seoImage));
};

const { render } = richTextResolver();
export const useRichText = (block: any) => {
	if (!block) return '';
	if (typeof block === 'string') return block;

	return render(block.content || block);
};

export const resolveLink = (link: any) => {
	if (!link) return;
	if (typeof link === 'string') return link;

	let finalLink;

	if (link.linktype === 'url' || link.linktype === 'asset') {
		finalLink = link.url;
	} else if (link.linktype === 'email') {
		finalLink = `mailto:${link.email}`;
	} else if (link.linktype === 'story') {
		const storyURL = link.story?.url?.length ? link.story.url : link.cached_url;
		finalLink = `${storyURL.charAt(0) === '/' ? '' : '/'}${storyURL}`;
	}

	if (link.anchor) {
		finalLink += `#${link.anchor}`;
	}

	return finalLink;
};

export const storyblokFormat = (
	url: string,
	size: number = 1280,
	ratio: number = 0,
	quality: number = 90
) => {
	if (!url.startsWith('https://a')) return url;

	const w: number = Math.round(size);
	const h: number = ratio === 0 ? 0 : Math.round(size / ratio);
	const parsedUrl = `${url}/m/${w}x${h}/filters:format(avif):quality(${quality})`;
	return parsedUrl.replace('https://a', 'https://a2');
};

export function stripHtml(html: string): string {
	if (!html) return '';
	// Remove all tags and decode HTML entities (basic)
	const tmp = html
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	// Optionally decode common HTML entities
	return tmp
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}
