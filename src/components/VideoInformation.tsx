import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { formatViews, formatDate } from "../utility/util";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const VideoInfo = () => {
  const videoInfo = useAppSelector((state: RootState) => state.video);

  return (
    <Container>
      <Thumbnail src={videoInfo.thumbnailUrl} alt={videoInfo.thumbnailUrl} />
      <VideoTitle>{videoInfo.title}</VideoTitle>
      <Section>
        <Left>
          <Text>{formatViews(videoInfo.viewCount)} views</Text>
          <Text>{formatDate(videoInfo.publishedAt)}</Text>
        </Left>
        <Right>
          <LikeIcon icon={faThumbsUp} />
          <Text>{videoInfo.likeCount}</Text>
        </Right>
      </Section>
    </Container>
  );
};

export default VideoInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img``;

const VideoTitle = styled.p`
  margin: 1em 0;
  font-size: 1.5em;
  color: #ffff;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: #ffff;
  margin-right: 0.5em;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
  color: #ffff;
  margin-right: 0.5em;
`;
