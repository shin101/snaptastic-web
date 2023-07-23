import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;
const CommentCount = styled.span`
  opacity: 0.7;
  margin: 10px 0px;
  display: block;
  font-weight: 600;
  font-size: 10px;
`;

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      error
    }
  }
`;

function Comments({ author, caption, commentNumber, comments, photoId }) {
  const [createCommentMutation, { loading }] = useMutation(
    CREATE_COMMENT_MUTATION
  );
  const { register, handleSubmit, setValue } = useForm();
  const onValid = (data) => {
    const { payload } = data;
    if (loading) {
      return;
    }

    createCommentMutation({
      variables: {
        photoId,
        payload,
      },
    });
    setValue("payload", "");
  };

  return (
    <CommentsContainer>
      <NavLink to={`/users/${author}`}>
        <Comment author={author} payload={caption} />
      </NavLink>
      {/* Fix caption formatting Later */}

      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.username}
          payload={comment.payload}
        />
      ))}
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            name="payload"
            // ref={register({ required: true })}
            {...register("payload", { required: true })}
            type="text"
            placeholder="Write a comment..."
          />
        </form>
      </div>
    </CommentsContainer>
  );
}

Comments.propTypes = {
  photoId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  caption: PropTypes.string,
  commentNumber: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
      }),
      payload: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default Comments;
