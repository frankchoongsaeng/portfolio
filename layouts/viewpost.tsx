import Container from "components/container";
import ContentContainer from "components/contentcontainer";
import Default from "layouts/default";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  renderMeta: () => ReactElement;
  renderTitle: () => ReactElement;
  renderTags: () => ReactElement;
  renderContent: () => ReactElement;
};

export default function ViewPost({
  renderTitle,
  renderContent,
  renderMeta,
  renderTags,
}: Props) {
  return (
    <Default>
      <Container>
        <div className="viewpost-layout">
          <>
            <Link
              href="/blog"
              className="flex gap-2 items-center text-gray-500 hover:underline hover:text-gray-800"
            >
              <svg
                fill="none"
                stroke="currentColor"
                className="small-icon"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>All Posts</span>
            </Link>
            <div className="">{renderMeta()}</div>
            <Nothing />
          </>
          <>
            <Nothing />
            <div>
              <div className="title-container">{renderTitle()}</div>
            </div>
            <Nothing />
          </>
          <>
            {renderTags()}
            <ContentContainer>{renderContent()}</ContentContainer>
            <Nothing />
          </>
        </div>
        ;
      </Container>
    </Default>
  );
}

const Nothing = () => <div></div>;
