import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CommentsServices from '../../../services/comments.services'

class WriteComments extends Component {
  constructor(props) {
    super(props);
    this.CommentsServices = new CommentsServices()
        this.state = {
            comment: {
                author: this.props.user._id,
                deal : this.props.match.params.id,
                content: ""
                //PREGUNTAR DE QUE FORMA PODRIA GUARDAR EL AUTHOR SIN QUE SE BORRE EN EL HANDLE Y DEJAR DE AÑADIRLO DESDE EL BACK
                
                                        
        }
  }
}

createComment = () => {
 
    this.CommentsServices.createComment(this.state.comment)
        .then(() => console.log("Creado"))
        .catch(err => console.log(err))
}

handleChange = e => {
    let { name, value } = e.target
    this.setState({
        comment: { author: this.props.user._id,
            deal : this.props.match.params.id,
            content: value }
    })
}

handleSubmit = e => {
    console.log("Llega a handleSubmit")
    e.preventDefault()
    this.createComment()
}

  render() {
    return (
      <div>
        <h5 className="title">Añade tu comentario!</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input type="text" className="input"  name="author" value="Juan" placeholder="Your name"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" onChange={this.handleChange} name="content" value={this.state.comment.content} placeholder="¿Algo que aportar?"></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
            <Button variant="outline-warning" type="submit" className="buttonBack" size="sm">Añadir comentario</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WriteComments
