import ViewPostLayout from "layouts/viewpost";
import ReactDecoder from "lib/notion/decoders/reactdecoder";
import { getBlockChildren, getPageMeta } from "lib/notionservice";
import React, { useEffect } from "react";
import N from "lib/notion/core/types";
import { formatDate } from "lib/utils";

type ViewPostProps = {
  contentBlocks: N.Block[];
  title: N.Block;
  pageMeta: any;
};

export default function ViewPost({ contentBlocks, pageMeta }: ViewPostProps) {
  useEffect(() => {
    console.log({ pageMeta });
  });

  const tags = pageMeta.properties.Tags.multi_select.map((tag) => (
    <span key={tag.id} className={`tag notionrtf_bg_${tag.color}`}>
      {tag.name}
    </span>
  ));

  const meta = (
    <div className="text-gray-500">
      Updated {formatDate(pageMeta.last_edited_time, true)}
    </div>
  );

  const title = ReactDecoder.decodeTitle(pageMeta.properties.Title);

  const content = contentBlocks.map((block) =>
    ReactDecoder.decodeBlock(block, { key: block.id })
  );

  return (
    <ViewPostLayout
      renderTags={() => (
        <div>
          {/* <span className="text text-gray-500 block mb-2">Tags</span> */}
          <div className="flex flex-wrap items-start gap-1">{tags}</div>
        </div>
      )}
      renderMeta={() => meta}
      renderTitle={() => title}
      renderContent={() => <>{content}</>}
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
