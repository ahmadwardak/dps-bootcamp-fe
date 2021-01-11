import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
class RecipeDetail extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecipe() {
    this.props._deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.props._editRecipe(this.props.id);
  }

  render() {
    return (
      <Card key={`recipe-${this.props.id}`}>
        <Card.Header>
          <h4>{this.props.item.title} </h4>
        </Card.Header>
        <Card.Body>
          <p>Time Needed: {this.props.item.timeNeeded} min</p>
          <p>Description: {this.props.item.description}</p>
          <h4>Ingredients</h4>
          <ul className="list-group">
            {this.props.item.ingredients.map((item, i) => {
              return <li key={`item-${this.props.id}-${i}`} className="list-group-item">{item}</li>
            })}
          </ul>
          <div className="form-group" style={{ marginTop: 10 }}>
            <div className="col-sm-10">
              <button
                type="submit"
                onClick={this.deleteRecipe.bind(this)}
                className="btn btn-danger delete-btn">Delete</button>
              <button
                type="submit"
                onClick={this.editRecipe.bind(this)}
                className="btn btn-primary">Edit</button>
            </div>
          </div>
        </Card.Body>
      </Card >

    )
  }
};

export default RecipeDetail;