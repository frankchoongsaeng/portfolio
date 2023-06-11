import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Container from "components/container";
import DefaultLayout from "layouts/default";
import * as notionrtf from "../lib/notionrtf2react";

export default function Blog() {
  const [postGroups, setPostGroups] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts/")
      .then((response) => {
        setPostGroups(() => response.data.results);
        console.log({ response });
      })
      .catch((errResponse) => console.log({ errResponse }));
  }, []);

  return (
    <DefaultLayout>
      <div className="py-12">
        <Container>
          <h2 className="text-2xl mb-8">Personal Blog</h2>
          <hr />
        </Container>
      </div>
      <Container>
        {postGroups.map(({ posts, year }) => {
          return (
            <div key={year.toString()} className="flex justify-between gap-2">
              <p className="text-6xl font-black">{year}</p>
              <div>
                {posts.map(({ id, properties }) => {
                  const postDate = new Date(
                    properties.updated.last_edited_time
                  );

                  return (
                    <Link key={id} href={`/blog/${id}`}>
                      <a className="block mb-8 underline">
                        {notionrtf.fromTitle(properties.Title.title)}
                        <span>
                          {postDate.toLocaleDateString(undefined, {
                            month: "short",
                            day: "2-digit",
                          })}
                        </span>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </DefaultLayout>
  );
}
