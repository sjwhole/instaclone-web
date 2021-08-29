import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../components/PageTitle";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      updatedAt
      isMine
      isLiked
    }
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  width: 100%;
`;

const PhotoHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 5px;
`;

const PhotoFile = styled.img`
  min-width: 100%;
  max-width: 100%;
`;

const PhotoData = styled.div``;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  div {
    display: flex;
    align-items: center;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled(FatText)``;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <>
      <PageTitle title="Home" />
      <HomeContainer>
        {data?.seeFeed?.map((photo) => (
          <PhotoContainer key={photo.id}>
            <PhotoHeader>
              <Avatar lg url={photo.user.avatar} />
              <Username>{photo.user.username}</Username>
            </PhotoHeader>
            <PhotoFile src={photo.file} />
            <PhotoData>
              <PhotoActions>
                <div>
                  <PhotoAction>
                    <FontAwesomeIcon
                      size={"2x"}
                      style={{ color: photo.isLiked ? "tomato" : "inherit" }}
                      icon={photo.isLiked ? SolidHeart : faHeart}
                    />
                  </PhotoAction>
                  <PhotoAction>
                    <FontAwesomeIcon size={"2x"} icon={faComment} />
                  </PhotoAction>
                  <PhotoAction>
                    <FontAwesomeIcon size={"2x"} icon={faPaperPlane} />
                  </PhotoAction>
                </div>
                <div>
                  <FontAwesomeIcon size={"2x"} icon={faBookmark} />
                </div>
              </PhotoActions>
              <Likes>
                {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
              </Likes>
            </PhotoData>
          </PhotoContainer>
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
