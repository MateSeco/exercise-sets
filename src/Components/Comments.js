import React, { useState } from "react";
/* import { useSelector, useDispatch } from "react-redux"; */
import Upvote from "./Upvotes";

function Comments(props) {
  const [comments, setComments] = useState({
    type: props.type,
    index: props.index,
    list: [],
  });
  const [newComment, setNewComment] = useState("");

  const list = (
    <ul>
      {comments.list.map((comment, index) => {
        return (
          <React.Fragment key={index}>
            <li className="comment">{comment}</li>
            <Upvote key={index} />
          </React.Fragment>
        );
      })}
    </ul>
  );

  function addComment(event) {
    event.preventDefault();
    setNewComment("");
    setComments((prevState) => {
      return { ...prevState, list: [...prevState.list, newComment] };
    });
  }

  return (
    <div>
      {list}
      <form onSubmit={(e) => addComment(e)}>
        <input
          className="step"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        <button>Add a comment</button>
      </form>
    </div>
  );
}

export default Comments;
