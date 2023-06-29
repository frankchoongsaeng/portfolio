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

function AllPostButton(props) {
  return (
    <button
      className={`btn flex items-center px-4 py-2 rounded border-2 ${
        props.variant === "light"
          ? "border-gray-200 text-xs text-gray-100 focus:outline-white"
          : "border-gray-600 text-xs text-gray-700 focus:outline-black"
      } font-semibold`}
    >
      <span
        className={`arrow-left transition-transform transform translate-x-0 inline-block w-5 h-4 mr-2 ${
          props.variant === "light" ? "text-gray-100" : "text-gray-600"
        }`}
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
      </span>
      {props.children}
    </button>
  );
}

export default function ViewPost({
  renderTitle,
  renderContent,
  renderMeta,
  renderTags,
}: Props) {
  return (
    <Default>
      <Container>
        <div className="viewpost-layout space-y-8">
          {/* HEADER */}
          <div className="meta-container space-y-8 mx-auto">
            <AllPostButton>
              <Link
                href="/blog"
              >
                <span>All Posts</span>
              </Link>
            </AllPostButton>
            <div className="space-y-2">
              {renderMeta()}
              {renderTags()}
            </div>

            <hr className="w-24" />

            <div>
              <div className="title-container">{renderTitle()}</div>
            </div>
          </div>

          {/* BODY */}
          <div>
            <ContentContainer>{renderContent()}</ContentContainer>
          </div>
        </div>
        ;
      </Container>
    </Default>
  );
}

const Nothing = () => <div></div>;
