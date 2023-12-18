import { useState } from "react";
import VideoLinkInput from "../components/VideoLinkInput";
import VideoInformation from "../components/VideoInformation";
import Comments from "../components/Comments";
import getYoutubeData from "../api/YoutubeDataService";
import getYoutubeComments from "../api/CommentDataService";
import { YouTubeVideo, YouTubeComment } from "../utility/type";
import styled from "styled-components";

const Mainpage = () => {
  const [videoInfo, setVideoInfo] = useState<YouTubeVideo | null>(null);
  const [comments, setComments] = useState<YouTubeComment[] | null>(null);

  const handleSearch = async (videoLink: string) => {
    const data = await getYoutubeData(videoLink);
    setVideoInfo(data);

    const commentsData = await getYoutubeComments(videoLink);
    setComments(commentsData);
  };

  function formatViews(views: number) {
    const formatter = new Intl.NumberFormat();
    return formatter.format(views);
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  return (
    <Container>
      <Guide>You can check out the recommended comments!</Guide>
      <VideoLinkInput onSearch={handleSearch} />
      <VideoInfoContainer>
        {videoInfo && (
          <VideoInformation
            videoInfo={videoInfo}
            formatViews={formatViews}
            formatDate={formatDate}
          />
        )}
      </VideoInfoContainer>
      {comments && (
        <Comments
          comments={comments}
          formatViews={formatViews}
          formatDate={formatDate}
        />
      )}
    </Container>
  );
};

export default Mainpage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Guide = styled.span`
  color: white;
  font-size: 2em;
`;

const VideoInfoContainer = styled.div`
  margin-top: 4%;
  width: 100%;
`;