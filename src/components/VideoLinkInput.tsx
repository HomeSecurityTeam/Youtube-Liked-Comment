import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import getYoutubeData from "../api/YoutubeDataService";
import { useAppDispatch } from "../redux/hooks";
import { AppDispatch } from "../redux/store";
import { setVideo } from "../redux/VideoSlice";
import { setComment } from "../redux/CommentSlice";
import getYoutubeComments from "../api/CommentDataService";

const VideoLinkInput = () => {
  const [videoLink, setVideoLink] = useState<string>("");
  const dispatch: AppDispatch = useAppDispatch();

  const handleSearch = async () => {
    const videoData = await getYoutubeData(videoLink);
    const commentData = await getYoutubeComments(videoLink);
    console.log("gggg", commentData);
    dispatch(setVideo(videoData));
    dispatch(setComment(commentData));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoLink(e.target.value);
  };

  return (
    <Section>
      <Input
        type="text"
        value={videoLink}
        placeholder="Enter Youtube Link"
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Section>
  );
};

export default VideoLinkInput;

const Section = styled.div`
  height: 3em;
  display: flex;
  margin-top: 2em;
`;

const Input = styled.input`
  width: 560px;
  background-color: #181818;
  border: 2px solid #303030;
  color: #ffffff;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0;
  &::placeholder {
    color: #aaaaaa;
  }
`;

const Button = styled.button`
  width: 10%;
  color: #ffff;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
