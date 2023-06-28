import { Client } from "@notionhq/client";

/**
 * This modules defines the notion namespace.
 * All Types are defined as described by the official notion documentation for API version 2022-06-28.
 */
namespace Notion {
  export interface BaseObject {
    object: string;
    id: string;
    type?: string;
  }

  /**
   * User objects will always contain object and id keys, as described below.
   * The remaining properties may appear if the user is being rendered in a rich text or page property context.
   */
  export interface PartialUser extends BaseObject {
    object: "user";
    type?: "person" | "bot";
    name?: string;
    avatar_url?: string;
  }

  /** All the possible colors for a RichText */
  export enum Color {
    Blue = "blue",
    BlueBackground = "blue_background",
    Brown = "brown",
    BrownBackground = "brown_background",
    Default = "default",
    Gray = "gray",
    GrayBackground = "gray_background",
    Green = "green",
    GreenBackground = "green_background",
    Orange = "orange",
    OrangeBackground = "orange_background",
    Pink = "pink",
    PinkBackground = "pink_background",
    Purple = "purple",
    PurpleBackground = "purple_background",
    Red = "red",
    RedBackground = "red_background",
    Yellow = "yellow",
    YellowBackground = "yellow_background",
  }

  export interface Annotation {
    bold: boolean;
    code: boolean;
    color: Color;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  }

  /**
   * Rich text objects contain the data that Notion uses to display formatted text, mentions,
   * and inline equations. Arrays of rich text objects within database property objects and
   * page property value objects are used to create what a user experiences as a single text value in Notion.
   */
  export interface RichTextObject {
    type: "text" | "mention" | "equation";
    text: {
      content: string;
      link: string | null;
    };
    annotations: Annotation;
    plain_text: string;
    href: null;
  }

  /** Arrays of rich text objects are used to create what a user experiences as a single text value in Notion.
   */
  export type RichText = RichTextObject[];

  /**
   * Type of block. Possible values are:
   */
  export enum BlockType {
    Bookmark = "bookmark",
    Breadcrumb = "breadcrumb",
    BulletedListItem = "bulleted_list_item",
    Callout = "callout",
    ChildDatabase = "child_database",
    ChildPage = "child_page",
    Column = "column",
    ColumnList = "column_list",
    Divider = "divider",
    Embed = "embed",
    Equation = "equation",
    File = "file",
    Heading1 = "heading_1",
    Heading2 = "heading_2",
    Heading3 = "heading_3",
    Image = "image",
    LinkPreview = "link_preview",
    LinkToPage = "link_to_page",
    NumberedListItem = "numbered_list_item",
    Paragraph = "paragraph",
    Pdf = "pdf",
    Quote = "quote",
    SyncedBlock = "synced_block",
    Table = "table",
    TableOfContents = "table_of_contents",
    TableRow = "table_row",
    Template = "template",
    ToDo = "to_do",
    Toggle = "toggle",
    Unsupported = "unsupported",
    Video = "video",
  }

  export interface BlockId {
    type: "block_id";
    block_id: string;
  }

  export interface BlockObject extends BaseObject {
    parent: BlockId;
    type: BlockType;
    created_time: string;
    last_edited_time: string;
    last_edited_by: PartialUser;
    archived: boolean;
    has_children: boolean;
  }

  /* DIFFERENT BLOCK TYPES */

  export interface Bookmark extends BlockObject {
    type: BlockType.Bookmark;
    bookmark: {
      caption: RichText;
      url: string;
    };
  }

  export interface HeadingObject {
    rich_text: RichText;
    color: Color;
    is_toggleable: boolean;
  }
  export interface Heading1 extends BlockObject {
    type: BlockType.Heading1;
    heading_1: HeadingObject;
  }
  export interface Heading2 extends BlockObject {
    type: BlockType.Heading2;
    heading_2: HeadingObject;
  }
  export interface Heading3 extends BlockObject {
    type: BlockType.Heading3;
    heading_3: HeadingObject;
  }

  export interface Paragraph extends BlockObject {
    type: BlockType.Paragraph;
    paragraph: {
      rich_text: RichText;
      color: Color;
      children?: Block[];
    };
  }

  export interface Toggle extends BlockObject {
    type: BlockType.Toggle;
    toggle: {
      rich_text: RichText;
      color: Color;
      children?: Block[];
    };
  }

  /** All possible types of Blocks */
  export type Block =
    | Bookmark
    | Heading1
    | Heading2
    | Heading3
    | Paragraph
    | Toggle;
}

/**
 * A `Decoder<T>` knows how to decode Notion elements to elements of type `T`
 */
export abstract class Decoder<T> {
  constructor(public client: Client) {}
  abstract decodeRichText(rto: Notion.RichTextObject, ...args: any[]): T;
  abstract decodeBlock(block: Notion.Block, ...args: any[]): T;
}

export default Notion;
