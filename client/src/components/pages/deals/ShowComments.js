import React, { Component } from 'react';

const ShowComments = ({content,author}) => {
  
    return (
      <div>
        <h5 className="title">Comentarios</h5>
         <div className="field">
            <div className="control">
              {author.username}
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" name="comment" value={content} placeholder="Comentario de usuario"></textarea>
            </div>
          </div>        
      </div>
    );
  }


export default ShowComments
