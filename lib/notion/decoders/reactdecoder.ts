/**
 * This library maps Notion blocks to React components.
 * It implements this mapping recursively for a block and all of it's children.
 *
 * Requires: Node verion >= 14
 * Built based on the block object described for Notion API version: 2022-06-28
 */

import React, { ReactElement } from "react";
import N, { Decoder } from "lib/notion/core/types";
import { Client } from "@notionhq/client";

export class ReactDecoder extends Decoder<ReactElement> {
  // static decodeBlock: (block: N.Block) => ReactElement = this.fromBlock;

  // constructor(public client: Client) {
  //   super(client);
  // }

  isBlock(obj: any): boolean {
    return obj && (obj.object === "block" || obj.type === "text");
  }

  fromBlocks(blocks: N.Block[]): ReactElement {
    throw "missing implementation";
  }

  mapRichTexts(richTexts: N.RichTextObject[]): ReactElement[] {
    return richTexts.map((richText, idx) => {
      const annotationClasses = this.decodeAnnotations(
        richText.annotations
      ).join(" ");
      return richText.href === null
        ? React.createElement(
            "span",
            { className: `notionrtf_text ${annotationClasses}`, key: idx },
            richText.text.content
          )
        : React.createElement(
            "a",
            {
              className: `notionrtf_link ${annotationClasses}`,
              key: idx,
              href: richText.href,
            },
            richText.text.content
          );
    });
  }

  decodeRichText(richText: N.RichTextObject): ReactElement {
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
        return React.createElement("h1", {}, []);
        break;
      case N.BlockType.Heading2:
        return React.createElement("h2", {}, []);

      case N.BlockType.Heading3:
        return React.createElement("h3", {}, []);

      case N.BlockType.Paragraph:
        const p = block as N.Paragraph;
        const richText =
          p.paragraph.rich_text.length === 0
            ? React.createElement("br", {})
            : this.mapRichTexts(p.paragraph.rich_text);

        return React.createElement(
          "p",
          { className: `notionrtf-paragraph`, ...props },
          p.has_children ? p.paragraph.children.map(this.decodeBlock) : richText
        );

      case "toggle":
        let children;

        if (block.has_children) {
          // lazy load the children as react lazy components
          // extract into a react component because lazy expects a react 
          // component and not a random function
          

          children = React.lazy(async () => {
            const c = await this.client.blocks.children.list({
              block_id: block.id,
            });
            const els = c.results.map((b, idx) =>
              this.decodeBlock(b as N.Block, { key: idx })
            );
            return React.createElement("div", {}, els)
          });
        }

        return React.createElement(
          "div",
          { className: "notionrtf_toggle", ...props },
          []
        );

      default:
        throw `unsupported block type: ${block.type}`;
    }
  }

  /**
   * Converts an annotation into a list of classes
   * @param annotation
   * @returns classes generated from annotation
   */
  decodeAnnotations(annotation: N.Annotation): string[] {
    const classes: string[] = [];
    Object.entries(annotation).forEach(([k, val]) => {
      if (k === "color") classes.push(`notionrtf_color-${val}`);
      if (val) classes.push(`notionrtf_${k}`);
    });
    return classes;
  }

  decodeTitle(title, key = undefined) {
    if (!title || title.type !== "title")
      throw `expected title but found: ${title}`;

    const titles = title.title;
    return React.createElement(
      "div",
      { className: "notionrtf_title", key: key },
      this.mapRichTexts(titles)
    );
  }
}

const D = new ReactDecoder(null);

export default D;
