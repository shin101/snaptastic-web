import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import { NavLink } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

interface CommentProps {
  id: number;
  photoId: number;
  isMine: boolean;
  author: string;
  payload: string;
}

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const CommentContainer = styled.div`
  margin: 7px 0px;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ id, photoId, isMine, author, payload }: CommentProps) {
  const updateDeleteComment = (
    cache: any,
    result: { data?: { deleteComment: { ok: boolean } } | null }
  ) => {
    if (!result.data) {
      return;
    }
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
          commentNumber(prev: number) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    update: updateDeleteComment,
    variables: {
      id,
    },
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <NavLink to={`/users/${author}`}>
        <FatText>{author}</FatText>
      </NavLink>
      <CommentCaption>
        {payload?.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <NavLink to={`/hashtags/${word}`}>{word}</NavLink>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
      {isMine ? <button onClick={onDeleteClick}>X</button> : null}
    </CommentContainer>
  );
}

Comment.propTypes = {
  isMine: PropTypes.bool,
  id: PropTypes.number,
  photoId: PropTypes.number,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
