import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { formatViews, formatDate } from "../utility/util";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { YouTubeComment } from "../utility/type";

const Comments = () => {
  const comments = useAppSelector((state: RootState) => state.comment);
  console.log(comments);
  // HTML 태그를 제거하는 함수
  const removeHTMLTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <OuterContainer>
      <Container>
        {comments &&
          Array.isArray(comments) &&
          comments
            .slice()
            .sort(
              (a: YouTubeComment, b: YouTubeComment) =>
                b.likeCount - a.likeCount
            )
            .map((comment: YouTubeComment, index: number) => (
              <CommentItem key={index}>
                <AuthorTime>
                  <Text>{comment.author}</Text>
                  <TimeText>{formatDate(comment.publishedAt)}</TimeText>
                </AuthorTime>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: removeHTMLTags(comment.text),
                  }}
                />
                <Like>
                  <LikeIcon icon={faThumbsUp} />
                  <Text>{formatViews(comment.likeCount)}</Text>
                </Like>
              </CommentItem>
            ))}
      </Container>
    </OuterContainer>
  );
};

export default Comments;

const OuterContainer = styled.div`
  border-top: 2px solid #303030;
  margin-top: 2%;
`;

const Container = styled.div`
  width: 100%;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
`;

const AuthorTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
  color: #ffff;
  margin-right: 0.5em;
`;

const Text = styled.p`
  color: #ffff;
  margin: 1% 0;
`;

const TimeText = styled.p`
  color: #737373;
  margin-left: 0.5em;
`;
