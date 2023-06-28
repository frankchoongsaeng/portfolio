import axios, { AxiosPromise } from "axios";
import N from "lib/notion/core/types";

import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_KEY });

interface NotionResults {
  results: N.Block[];
}

function groupByYear(response) {
  let currentYear = null;

  response.results = response.results.reduce((acc, post) => {
    const postDate = new Date(post.properties.updated.last_edited_time);
    if (postDate.getFullYear() == currentYear)
      acc[acc.length - 1].posts.push(post);
    else {
      acc.push({ year: postDate.getFullYear(), posts: [post] });
      currentYear = postDate.getFullYear();
    }
    return acc;
  }, []);

  return response;
}

export function getPosts() {
  const filter = {
    property: "is_published",
    checkbox: { equals: true },
  };
  const sorts: Array<{
    property: string;
    direction: "ascending" | "descending";
  }> = [
    {
      property: "updated",
      direction: "ascending",
    },
  ];

  return notion.databases
    .query({ database_id: process.env.NOTION_BLOG_DB_ID, filter, sorts })
    .then(groupByYear);
}

// recursively get all block children
export function getBlockChildren(id: string): Promise<NotionResults> {
  return notion.blocks.children.list({ block_id: id }).then((res) => {
    // get the children of this block
    const blocks = res.results as N.Block[];
    // create a promise that resolves all partial children
    const childrenPromise = blocks.map(async (block) => {
      if (block.has_children) {
        const { results } = await getBlockChildren(block.id);
        return {
          ...block,
          [block.type]: {
            ...block[block.type],
            children: results,
          },
        };
      }

      return Promise.resolve(block);
    });

    // execute the promise and wrap back into the original response
    return Promise.all(childrenPromise).then((data) => ({ results: data }));
  });
}

export function getPageMeta(pageId: string) {
  return notion.pages.retrieve({ page_id: pageId });
}

export function getPost2(id) {
  return notion.blocks.children.list({ block_id: id });
}
