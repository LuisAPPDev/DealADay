import React from "react";

//Services
import CommentsServices from "../../../services/comments.services";

//Time library
import moment from "moment";

//Style components
import {Comment, Icon } from "semantic-ui-react";

let activeComment = 0;
let borr = new CommentsServices();

const ShowComments = ({ _id, content, author, created_at, update, user }) => {
  function deleteComment(id) {
    borr
      .deleteComment(id)
      .then(() => update())
      .catch(err => console.log("ha ido mal", err));
  }

  function handleDelete(e) {
    activeComment = e.target.dataset;
    deleteComment(activeComment);
  }
  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar src={author.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{author.username}</Comment.Author>
          <Comment.Metadata>
            {moment(created_at).format("lll")} {((user._id == author._id) || (user.role=="admin")) && <Icon data-id={_id} onClick={handleDelete} circular name="trash alternate outline" size="small" className="red users icon" />}
          </Comment.Metadata>
          <Comment.Text>{content} </Comment.Text>
          <Comment.Actions>
            <Comment.Action> </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

export default ShowComments;
