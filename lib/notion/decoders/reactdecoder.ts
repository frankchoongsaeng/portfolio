/**
 * This library maps Notion blocks to React components.
 * It implements this mapping recursively for a block and all of it's children.
 *
 * Requires: Node verion >= 14
 * Built based on the block object described for Notion API version: 2022-06-28
 */

import React, { ReactElement } from "react";
import N, { Decoder } from "lib/notion/core/types";

export class ReactDecoder extends Decoder<ReactElement> {
  private isBlock(obj: any): boolean {
    return obj && (obj.object === "block" || obj.type === "text");
  }

  /**
   * Converts an annotation into a list of classes
   * @param annotation
   * @returns classes generated from annotation
   */
  decodeAnnotations(annotation: N.Annotation): string[] {
    const classes: string[] = [];
    Object.entries(annotation).forEach(([k, val]) => {
      if (k === "color") classes.push(`notionrtf_color_${val}`);
      else if (val) classes.push(`notionrtf_${k}`);
    });
    return classes;
  }

  decodeRichTexts(richTexts: N.RichTextObject[], props = {}): ReactElement[] {
    return richTexts.map((richText, idx) =>
      this.decodeRichText(richText, { key: idx })
    );
  }

  decodeRichText(richText: N.RichTextObject, props = {}): ReactElement {
    const annotationClasses = this.decodeAnnotations(richText.annotations).join(
      " "
    );
    return richText.href === null
      ? React.createElement(
          "span",
          { className: `notionrtf_text ${annotationClasses}` },
          richText.text.content
        )
      : React.createElement(
          "a",
          {
            className: `notionrtf_link ${annotationClasses}`,
            href: richText.href,
          },
          richText.text.content
        );
  }

  decodeBlock(
    block: N.Block,
    props = {}
  ): ReactElement /** return react component */ {
    if (!this.isBlock(block))
      throw `Expected block but got ${block.object || block}`;

    switch (block.type) {
      case N.BlockType.Heading1:
        return React.createElement(
          "h1",
          { className: `notionrtf_h1`, ...props },
          this.decodeRichTexts(block.heading_1.rich_text)
        );
      case N.BlockType.Heading2:
        return React.createElement(
          "h2",
          { className: `notionrtf_h2`, ...props },
          this.decodeRichTexts(block.heading_2.rich_text)
        );

      case N.BlockType.Heading3:
        return React.createElement(
          "h3",
          { className: `notionrtf_h3`, ...props },
          this.decodeRichTexts(block.heading_3.rich_text)
        );

      case N.BlockType.Paragraph:
        const richText =
          block.paragraph.rich_text.length === 0
            ? React.createElement("br", {})
            : this.decodeRichTexts(block.paragraph.rich_text);

        return React.createElement(
          "p",
          { className: `notionrtf_paragraph`, ...props },
          block.has_children
            ? block.paragraph.children.map(this.decodeBlock)
            : richText
        );

      case N.BlockType.Toggle:
        return React.createElement(
          "div",
          { className: "notionrtf_toggle", ...props },
          block.toggle.children?.map((child, idx) =>
            this.decodeBlock(child, { ...props, key: idx })
          )
        );

      case N.BlockType.Quote:
        return React.createElement(
          "blockquote",
          { className: "notionrtf_quote", ...props },
          this.decodeRichTexts(block.quote.rich_text)
        );

      default:
        throw `unsupported block type: ${block.type}`;
    }
  }

  decodeTitle(titleObject, props = {}) {
    if (!titleObject || titleObject.type !== "title")
      throw `expected title but found: ${titleObject}`;

    const titleContents = titleObject.title;
    return React.createElement(
      "div",
      { className: "notionrtf_title", ...props },
      this.decodeRichTexts(titleContents)
    );
  }
}

const D = new ReactDecoder(null);

export default D;
