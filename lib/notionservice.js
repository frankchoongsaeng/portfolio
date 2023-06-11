import axios from "axios";

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

export function getPosts() {
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
