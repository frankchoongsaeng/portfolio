import Link from "next/link";
import Container from "components/container";
import DefaultLayout from "layouts/default";
import decoder from "lib/notion/decoders/reactdecoder";
import { getPosts } from "lib/notionservice";

export default function Blog({ postGroups }) {
  return (
    <DefaultLayout>
      <div className="py-12">
        <Container>
          <h2 className="text-2xl">Personal Blog</h2>
        </Container>
      </div>
      <Container>
        {postGroups.map(({ posts, year }) => {
          return (
            <div key={year.toString()}>
              <hr />
              <div className="flex flex-col gap-8 my-12 lg:flex-row justify-between">
                <p className="text-6xl font-black">{year}</p>
                <div className="flex flex-col gap-10 max-w-[80ch]">
                  {posts.map(({ id, properties }) => {
                    const postDate = new Date(
                      properties.updated.last_edited_time
                    );

                    return (
                      <Link key={id} href={`/blog/${id}`} className="underline">
                        {decoder.decodeTitle(properties.Title)}
                        <span>
                          {postDate.toLocaleDateString(undefined, {
                            month: "short",
                            day: "2-digit",
                          })}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </DefaultLayout>
  );
}

/**
 * Render the page on the server side each time the page is requested.
 * Posts might get updated frequently, so it makes sense to generate on request.
 */

export const getServerSideProps = async () => {
  const response = await getPosts();
  const postGroups = response.data.results;

  //remove this line
  // postGroups.push({ year: 2022, posts: postGroups[0].posts });
  // postGroups.push({ year: 2021, posts: postGroups[0].posts });

  return { props: { postGroups } };
};
