import { ARTICLE_CONTENT_TYPES, STORYBLOK_COMPONENTS } from '../constants/ui';
import { resolveLink, useRichText, useUnwrapBlok } from './utils';

/* getImage
 * Get the image from the block
 * @param block - The block to get the image from
 * @returns The image
 */
const getImage = (block: any): { src: string; alt: string } => {
	return {
		src: block.filename,
		alt: block.meta_data.alt || block.filename,
	};
};

/* stripOuterParagraph
 * Strip outer paragraph tags
 * @param html - The HTML string to strip
 * @returns The HTML string without outer paragraph tags
 */
const sP = (html: string): string => {
	if (!html || typeof html !== 'string') return html;
	const trimmed = html.trim();
	if (trimmed.startsWith('<p>') && trimmed.endsWith('</p>')) {
		return trimmed.slice(3, -4).trim();
	}
	return trimmed;
};

export const parseCompanies = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.COMPANIES
	);

	const data: any = {
		heading: block.heading[0],
		cards: [],
	};

	block.cards.forEach((card: any) => {
		data.cards.push({
			media: getImage(card.logo),
			full: card.full,
		});
	});

	return data;
};

export const parsePreFooter = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.PRE_FOOTER
	);

	return block;
};

export const parseAirdrop = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.AIRDROP
	);

	return block;
};

export const parseRewarding = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.REWARDING
	);

	return block;
};

export const parseReady = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.READY
	);

	return block;
};

export const parseFaq = (story: any) => {
	const block = story.content.body.find(
		(b: any) => b.component === STORYBLOK_COMPONENTS.FAQ
	);

	const data: any = {
		heading: block.heading[0],
		faq: [],
	};

	block.list.forEach((card: any) => {
		data.faq.push({
			question: card.question,
			answer: card.answer,
		});
	});

	return data;
};

export const parseBlog = (block: any, slug?: string) => {
	const data: {
		slug: string;
		title: string;
		short_description: string;
		image: { src: string; alt: string };
		category: string;
		author: string;
		highlight: boolean;
		reading_time: string;
		content: {
			type: string;
			text: string;
			media: { src: string; alt: string };
			url: string;
			isButtton: boolean;
		}[];
	}[] = [];

	block.list.forEach((blockItem: any) => {
		const articleItem: any = {
			slug: blockItem.slug,
			title: blockItem.title,
			short_description: blockItem.short_description,
			image: getImage(blockItem.image),
			category: blockItem.category,
			author: blockItem.author,
			highlight: blockItem.highlight,
			reading_time: blockItem.reading_time,
			content: [],
		};

		blockItem.content.forEach((item: any) => {
			switch (item.component) {
				case ARTICLE_CONTENT_TYPES.TITLE:
				case ARTICLE_CONTENT_TYPES.PARAGRAPH:
					articleItem.content.push({
						type: item.component,
						text: sP(useUnwrapBlok(useRichText(item.text))),
					});
					break;
				case ARTICLE_CONTENT_TYPES.MEDIA:
					articleItem.content.push({
						type: item.component,
						media: getImage(item.media),
						text: item.caption,
					});
					break;
				case ARTICLE_CONTENT_TYPES.LINK:
					articleItem.content.push({
						type: item.component,
						label: item.label,
						url: resolveLink(item.url.url),
						isButtton: item.buttonType,
					});
					break;
			}
		});

		data.push(articleItem);
	});

	if (slug) {
		return data.filter((item: any) => item.slug === slug);
	}

	return data;
};
