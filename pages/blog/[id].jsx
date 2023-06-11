import Default from "layouts/default";
import * as N2R from "../../lib/notionrtf2react";

export default function ViewPost({ contentBlocks }) {
  return (
    <Default>
      <Container>
        <div>
          {contentBlocks.map((block) => N2R.fromBlock(block, block.id))}
        </div>
      </Container>
    </Default>
  );
}

/**
 * Render the page on the server side each time the page is requested.
 * Posts might get updated frequently, so it makes sense to generate on request.
 */
import { getPost } from "../../lib/notionservice";
import Container from "components/container";

export const getServerSideProps = async ({ query }) => {
  const response = await getPost(query.id);
  const contentBlocks = response.data.results;

  return { props: { contentBlocks } };
};
