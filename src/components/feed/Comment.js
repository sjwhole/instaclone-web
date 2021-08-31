import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { FatText } from "../shared";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const DELETE_COMMENT_MUATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
`;

const CommentDelete = styled.span`
  margin-left: 20px;
`;
const Comment = ({ id, photoId, author, payload, isMine }) => {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok },
      },
    } = result;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber: (prev) => prev - 1,
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <Link to={`/users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
      <CommentCaption>{payload}</CommentCaption>
      <CommentDelete>
        {isMine ? <button onClick={onDeleteClick}>❌</button> : null}
      </CommentDelete>
    </CommentContainer>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  photoId: PropTypes.number,
  author: PropTypes.string,
  payload: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Comment;
