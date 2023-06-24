/**
 * This library maps Notion blocks to React components.
 * It implements this mapping recursively for a block and all of it's children.
 *
 * Requires: Node verion >= 14
 * Built based on the block object described for Notion API version: 2022-06-28
 */

import React from "react";

function isBlock(obj) {
  return obj && (obj.object === "block" || obj.type === "text");
}

export function fromBlocks(blocks) {
  throw "missing implementation";
}

export function mapRichTexts(richTexts) {
  return richTexts.map((richText, idx) => {
    const annotationClasses = mapAnnotations(richText.annotations).join(" ");
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

export function fromBlock(block, props = {}) /** return react component */ {
  if (!isBlock(block)) throw `Expected block but got ${block.object || block}`;

  const unsupportedBlockMessage = `unsupported block type: ${block.type}`;

  const children = block.hasChildren ? fromBlocks(block.children) : [];

  switch (block.type) {
    case "bookmark":
      throw unsupportedBlockMessage;
      break;
    case "breadcrumb":
      throw unsupportedBlockMessage;
      break;
    case "bulleted_list_item":
      throw unsupportedBlockMessage;
      break;
    case "callout":
      throw unsupportedBlockMessage;
      break;
    case "child_database":
      throw unsupportedBlockMessage;
      break;
    case "child_page":
      throw unsupportedBlockMessage;
      break;
    case "column":
      throw unsupportedBlockMessage;
      break;
    case "column_list":
      throw unsupportedBlockMessage;
      break;
    case "divider":
      throw unsupportedBlockMessage;
      break;
    case "embed":
      throw unsupportedBlockMessage;
      break;
    case "equation":
      throw unsupportedBlockMessage;
      break;
    case "file":
      throw unsupportedBlockMessage;
      break;
    case "heading_1":
      return React.createElement("h1", {}, children);
      break;
    case "heading_2":
      return React.createElement("h2", {}, children);
      break;
    case "heading_3":
      return React.createElement("h3", {}, children);
      break;
    case "image":
      return React.createElement("img");
      break;
    case "link_preview":
      throw unsupportedBlockMessage;
      break;
    case "link_to_page":
      throw unsupportedBlockMessage;
      break;
    case "numbered_list_item":
      throw unsupportedBlockMessage;
      break;
    case "paragraph":
      const richText =
        block.paragraph.rich_text.length === 0
          ? React.createElement("br", {})
          : mapRichTexts(block.paragraph.rich_text);
      return React.createElement(
        "p",
        { className: `notionrtf-paragraph`, ...props },
        block.has_children ? block.children.map(fromBlock) : richText
      );
      break;
    case "pdf":
      throw unsupportedBlockMessage;
      break;
    case "quote":
      throw unsupportedBlockMessage;
      break;
    case "synced_block":
      throw unsupportedBlockMessage;
      break;
    case "table":
      throw unsupportedBlockMessage;
      break;
    case "table_of_contents":
      throw unsupportedBlockMessage;
      break;
    case "table_row":
      throw unsupportedBlockMessage;
      break;
    case "template":
      throw unsupportedBlockMessage;
      break;
    case "to_do":
      throw unsupportedBlockMessage;
      break;
    case "toggle":
      return React.createElement(
        "div",
        { className: "notionrtf_toggle", ...props },
        []
      );
      break;
    case "unsupported":
      throw unsupportedBlockMessage;
      break;
    case "video":
      throw unsupportedBlockMessage;
      break;
    default:
      break;
  }
}

export function mapAnnotations(annotation) {
  const classes = [];
  Object.entries(annotation).forEach(([annotation, val]) => {
    if (annotation === "color") classes.push(`notionrtf_color-${val}`);
    if (val) classes.push(`notionrtf_${annotation}`);
  });
  return classes;
}

export function fromTitle(titles, key = undefined) {
  if (!Array.isArray(titles)) throw `expected title but found: ${titles}`;

  return React.createElement(
    "div",
    { className: "notionrtf_title", key: key },
    mapRichTexts(titles)
  );
}
