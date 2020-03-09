import React, { Component } from "react";
import CommentsServices from "../../../services/comments.services";
import { Button, Form } from "semantic-ui-react";

class WriteComments extends Component {
  constructor(props) {
    super(props);
    this.CommentsServices = new CommentsServices();
    this.state = {
      comment: {
        author: this.props.user._id,
        deal: this.props.match.params.id,
        content: ""
      }
    };
  }

  createComment = () => {
    this.CommentsServices.createComment(this.state.comment)
      .then(() => console.log("Creado"))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      comment: {
        author: this.props.user._id,
        deal: this.props.match.params.id,
        content: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createComment();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} reply>
        <Form.TextArea
          onChange={this.handleChange}
          name="content"
          value={this.state.comment.content}
          placeholder="¿Algo que aportar?"
        />
        <Button
          type="submit"
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    );
  }
}

export default WriteComments;
