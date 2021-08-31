import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Photo from "../components/feed/Photo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

export const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      updatedAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <>
      <PageTitle title="Home" />
      <HomeContainer>
        {data?.seeFeed?.map((photo) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
