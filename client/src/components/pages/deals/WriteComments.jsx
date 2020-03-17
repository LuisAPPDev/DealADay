import React, { Component } from "react";

//Services
import CommentsServices from "../../../services/comments.services";

//Style components
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

  finishAction = () => {
    this.props.update();
    this.setState({
      comment: {
        content: ""
      }
    });
  };

  createComment = () => {
    this.CommentsServices.createComment(this.state.comment)
      .then(() => this.finishAction())
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { value } = e.target;
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
        <Form.TextArea onChange={this.handleChange} name="content" value={this.state.comment.content} placeholder="¿Que piensas?" />
        <Button type="submit" content="Comentar" labelPosition="left" icon="edit" primary />
      </Form>
    );
  }
}

export default WriteComments;
