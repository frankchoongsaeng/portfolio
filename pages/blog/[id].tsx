import ViewPostLayout from "layouts/viewpost";
import ReactDecoder from "lib/notion/decoders/reactdecoder";
import { getBlockChildren, getPageMeta } from "lib/notionservice";
import React, { useEffect } from "react";
import N from "lib/notion/core/types";

type ViewPostProps = {
  contentBlocks: N.Block[];
  title: N.Block;
  pageMeta: any;
};

export default function ViewPost({ contentBlocks, pageMeta }: ViewPostProps) {
  useEffect(() => {
    console.log({ contentBlocks });
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
  const [pageMeta, pageContentResponse] = await Promise.all([
    getPageMeta(query.id),
    getBlockChildren(query.id),
  ]);
  const contentBlocks = pageContentResponse.results;

  return { props: { contentBlocks, pageMeta } };
};
