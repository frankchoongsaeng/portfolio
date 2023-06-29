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
  defaultPrefix = "notionrtf";

  private isBlock(obj: any): boolean {
    return obj && (obj.object === "block" || obj.type === "text");
  }

  private prefix(className: string): string {
    return `${this.defaultPrefix}_${className}`;
  }

  /**
   * Converts an annotation into a list of classes
   * @param annotation
   * @returns classes generated from annotation
   */
  decodeAnnotations(annotation: N.Annotation): string[] {
    const classes: string[] = [];
    Object.entries(annotation).forEach(([k, val]) => {
      if (k === "color") classes.push(this.prefix(`color_${val}`));
      else if (val) classes.push(this.prefix(k));
    });
    return classes;
  }

  decodeRichTexts(richTexts: N.RichTextObject[]): ReactElement[] {
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
          {
            className: `${this.prefix("text")} ${annotationClasses}`,
            ...props,
          },
          richText.text.content
        )
      : React.createElement(
          "a",
          {
            className: `${this.prefix("link")} ${annotationClasses}`,
            href: richText.href,
            ...props,
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
          { className: this.prefix("h1"), ...props },
          this.decodeRichTexts(block.heading_1.rich_text)
        );
      case N.BlockType.Heading2:
        return React.createElement(
          "h2",
          { className: this.prefix("h2"), ...props },
          this.decodeRichTexts(block.heading_2.rich_text)
        );

      case N.BlockType.Heading3:
        return React.createElement(
          "h3",
          { className: this.prefix("h3"), ...props },
          this.decodeRichTexts(block.heading_3.rich_text)
        );

      case N.BlockType.Paragraph:
        const richText =
          block.paragraph.rich_text.length === 0
            ? React.createElement("br", {})
            : this.decodeRichTexts(block.paragraph.rich_text);

        return React.createElement(
          "p",
          { className: this.prefix("paragraph"), ...props },
          block.has_children
            ? block.paragraph.children.map(this.decodeBlock)
            : richText
        );

      case N.BlockType.Toggle:
        return React.createElement(
          "div",
          { className: this.prefix("toggle"), ...props },
          block.toggle.children?.map((child, idx) =>
            this.decodeBlock(child, { ...props, key: idx })
          )
        );

      case N.BlockType.Quote:
        return React.createElement(
          "blockquote",
          { className: this.prefix("quote"), ...props },
          this.decodeRichTexts(block.quote.rich_text)
        );

      case N.BlockType.Image:
        let src = "";
        switch (block.image.type) {
          case "external":
            src = block.image.external.url;
            break;
          case "file":
            src = block.image.file.url;
        }
        return React.createElement(
          "div",
          { className: this.prefix("image_wrapper"), ...props },
          [
            React.createElement("img", {
              className: this.prefix("img"),
              src,
              ...props,
            }),
            React.createElement(
              "figcaption",
              {
                className: this.prefix("figcaption"),
                ...props,
              },
              this.decodeRichTexts(block.image.caption)
            ),
          ]
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
      { className: this.prefix("title"), ...props },
      this.decodeRichTexts(titleContents)
    );
  }
}

const D = new ReactDecoder(null);

export default D;
