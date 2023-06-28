import axios, { AxiosPromise } from "axios";
import N from "lib/notion/core/types";

interface NotionResults {
  results: N.Block[];
}

const notionApi = axios.create({
  baseURL: `https://api.notion.com/v1/`,
  headers: {
    Authorization: `Bearer ${process.env.NOTION_INTEGRATION_KEY}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
  },
});

export function describePostDb() {
  return notionApi.get(`/databases/${process.env.NOTION_BLOG_DB_ID}`);
}

function groupByYear(response) {
  let currentYear = null;
  response.data.results = response.data.results.reduce((acc, post) => {
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

export function getPosts(): AxiosPromise {
  const filter = {
    property: "is_published",
    checkbox: { equals: true },
  };
  const sorts = [
    {
      property: "updated",
      direction: "ascending",
    },
  ];

  return notionApi
    .post(`/databases/${process.env.NOTION_BLOG_DB_ID}/query`, {
      filter,
      sorts,
    })
    .then(groupByYear);
}

export function getPost(id) {
  return getBlockChildren(id).then((res) => {
    const blocks = res.data.results;
    const childrens = blocks.map(async (block) => {
      if (block.has_children) {
        const {
          data: { results },
        } = await getBlockChildren(block.id);
        return {
          ...block,
          children: results,
        };
      }

      return Promise.resolve(block);
    });
    return Promise.all(childrens).then((data) => {
      res.data.results = data;
      return res;
    });
  });
}

export function getPageMeta(pageId: string): AxiosPromise {
  return notionApi.get(`/pages/${pageId}`);
}

export function getBlockChildren(blockId): AxiosPromise<NotionResults> {
  return notionApi.get(`/blocks/${blockId}/children`);
}

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_KEY });

export function getPageMeta2(pageId: string) {
  return notion.pages.retrieve({ page_id: pageId });
}

export function getPost2(id) {
  return notion.blocks.children.list({ block_id: id });
}
