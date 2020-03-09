import React, { Component } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import moment from "moment";

const ShowComments = ({ content, author, created_at }) => {
  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar src={author.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{author.username}</Comment.Author>
          <Comment.Metadata>
            {moment(created_at).format("lll")}
          </Comment.Metadata>
          <Comment.Text>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

export default ShowComments;
