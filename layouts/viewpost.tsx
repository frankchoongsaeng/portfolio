import Container from "components/container";
import ContentContainer from "components/contentcontainer";
import Default from "layouts/default";
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
            <div className="">{"<-"} All Post</div>
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
            <Nothing />
            <ContentContainer>{renderContent()}</ContentContainer>
            {renderTags()}
          </>
        </div>
        ;
      </Container>
    </Default>
  );
}

const Nothing = () => <div></div>;
