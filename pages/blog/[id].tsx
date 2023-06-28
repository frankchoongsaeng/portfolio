import ContentContainer from "components/contentcontainer";
import ViewPostLayout from "layouts/viewpost";
import ReactDecoder from "lib/notion/decoders/reactdecoder";
import {
  getPost,
  getPost2,
  getPageMeta,
  getPageMeta2,
} from "lib/notionservice";
import React, { useEffect } from "react";
import N from "lib/notion/core/types";
import Container from "components/container";

type ViewPostProps = {
  contentBlocks: N.Block[];
  title: N.Block;
  pageMeta: N.Block;
};

export default function ViewPost({
  contentBlocks,
  pageMeta,
  x,
}: ViewPostProps) {
  useEffect(() => {
    console.log({ x });
  });

  return (
    <ViewPostLayout
      renderTags={() => <div></div>}
      renderMeta={() => <div>Published Jan 20, 2022 | Personal</div>}
      renderTitle={() => ReactDecoder.decodeTitle(pageMeta.properties.Title)}
      renderContent={() => (
        <>
          {contentBlocks.map((block) =>
            ReactDecoder.decodeBlock(block, { key: block.id })
          )}
        </>
      )}
    />
  );
}

/**
 * Render the page on the server side each time the page is requested.
 * Posts might get updated frequently, so it makes sense to generate on request.
 */
export const getServerSideProps = async ({ query }) => {
  const [pageMeta, pageContentResponse, x] = await Promise.all([
    getPageMeta2(query.id),
    getPost(query.id),
    getPost2(query.id),
  ]);
  const contentBlocks = pageContentResponse.data.results;

  return { props: { contentBlocks, pageMeta, x } };
};
