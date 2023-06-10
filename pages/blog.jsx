import { Client } from "@notionhq/client";
import axios from "axios";
import Container from "components/container";
import DefaultLayout from "layouts/default";
import { useEffect } from "react";

export default function Blog() {
  const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_KEY,
  });

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => console.log({ response }))
      .catch((errResponse) => console.log({ errResponse }));
    // (async () => {
    //   const results = await notion.databases.query({
    //     database_id: process.env.NOTION_BLOG_DB_ID,
    //   });
    //   console.log(results);
    // })();
  }, []);

  return (
    <DefaultLayout>
      <div className="py-12">
        <Container>
          <h2 className="text-2xl">Personal Blog</h2>
          <i>
            <span>Posts</span>
            <span>&nbsp;&gt; Tech</span>
          </i>
        </Container>
      </div>
      <Container></Container>
    </DefaultLayout>
  );
}
