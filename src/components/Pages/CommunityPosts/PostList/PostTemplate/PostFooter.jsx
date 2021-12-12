import { useState } from "react";
import styled from "styled-components";
import { LikeButtonPost } from "./AcctioPost/LikeButton";
import { CommentButtonPost } from "./AcctioPost/CommentButton";
import Answer from "../../../../Pages/CommunityPosts/PostList/PostTemplate/Answers/Answer/Answer";

const PostFooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0 0.7rem 0;
  padding: 0 2rem 0 2rem;
  .icon-comments {
    color: var(--boring-color);
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 4px;
  }
`;

const ResponderAnimated = styled.div`
  //margin-top: 20px;
  margin-bottom: 20px;
  /* animation-duration: 3s;
  animation-name: slidein;
  animation-direction: alternate;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  } */
`;

export const PostFooter = () => {
  const [responder, setResponder] = useState();

  const onClick = () => {
    setResponder(!responder);
    console.log("olis");
  };

  return (
    <>
      <PostFooterContainer>
        <LikeButtonPost />
        <CommentButtonPost responderFn={onClick} />
      </PostFooterContainer>

      {/* Box de respuesta nueva */}

      <ResponderAnimated>
        {responder ? (
          <Answer textPlaceholder="Escribe tu respuesta aquí..." />
        ) : null}
      </ResponderAnimated>
    </>
  );
};
