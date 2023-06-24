// import Notion from './notionapi'

// export interface Mapper<T> {
// 	mapRichTextObject: (rto: Notion.RichTextObject) => T
// 	mapBlock: (block: Notion.Block) => T
// }

// const htmlMapper: Mapper<string> = {
// 	mapRichTextObject(richText) {
// 		return richText.href === null
// 			? `<span class="notionrtf_text">${richText.text.content}</span>`
// 			: `<a class="notionrtf_link" href="${richText.href}">${richText.text.content}</a>`
// 	},
// 	mapBlock(block) {
// 		switch (block.type) {
// 			case Notion.BlockType.Paragraph:
// 				const para = block.paragraph
// 				return `<p class="notionrtf_para">${
// 					block.has_children
// 						? (para.children ?? []).map(block => this.mapBlock(block)).join('')
// 						: para.rich_text.map(this.mapRichTextObject).join('/')
// 				}</p>`
// 			case 'toggle':
// 				return `<div class="notionrtf_toggle"></div>`
// 			default:
// 				return ''
// 		}
// 	}
// }
