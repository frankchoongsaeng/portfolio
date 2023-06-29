# Notion API & Decoder

I'm gradually building a notion service api that allows reading Notion blocks and, with the use of decoders, transform them into a preffered structure.

## Motivation

I use notion a lot to write, plan, organize, and all that kinda stuff. I decided to add a blog to my personal website and I wanted to do this with Notion because of how convenient it is to write with Notion. I quickly realized that although Notion had an API, their API returned blocks that were a **custom** JSON representation of elements bithing this mission: **Notion Blocks to React Elements**

## Notion Blocks to React Elements

Although the eventual goal is to end up with react elements, I decided to use an approach that allows for easily building other kinds of decoders like notion to markdown, notion to vue, notion to html, etc.

### **The Notion Model**

The first step involves identifying and modelling [Notion Objects](https://developers.notion.com/reference/block#:~:text=Versioning-,OBJECTS,-Block) (or Notion Elements as I like to refer to them).

The `types.ts` file contains pure models of all the [Notion Objects](https://developers.notion.com/reference/block#:~:text=Versioning-,OBJECTS,-Block) described by the API.

# Mapping

## Block

| Block     | React Mapping |
|-----------|---------------|
| Heading 1 | h2            |
| Heading 2 | h3            |
| Heading 3 | h4            |