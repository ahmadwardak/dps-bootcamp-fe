import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class AddRecipe extends Component {
    handleAddRecipe(e) {
        e.preventDefault();
        let title = this.refs.title.value.trim();
        let description = this.refs.description.value.trim();
        let timeNeeded = this.refs.timeNeeded.value.trim();
        let ingredients = this.refs.ingredients.value.trim();
        let ingredientsArray = ingredients.split(',');
        ingredientsArray.map(function (a) {
            return a.trim();
        });

        let recipeObject = {
            title: title,
            description: description,
            timeNeeded: timeNeeded,
            ingredients: ingredientsArray
        };

        this.props._handleAddRecipe(recipeObject);

        this.refs.title.value = "";
        this.refs.description.value = "";
        this.refs.timeNeeded.value = "";
        this.refs.ingredients.value = "";
        this.props.onClose.bind(this);
    }


    handleSuggestion(e) {
        e.preventDefault();
        console.log("suggestion")
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h4 className="modal-title">Add Recipe</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal" role="form"
                        onSubmit={this.handleAddRecipe.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="title">Title</label>
                            <div className="col-sm-10">
                                <input
                                    ref="title"
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Title" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="description">Description</label>
                            <div className="col-sm-10">
                                <input
                                    ref="description"
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    placeholder="Description" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="timeNeeded">Time Needed</label>
                            <div className="col-sm-10">
                                <input
                                    ref="timeNeeded"
                                    type="text"
                                    className="form-control"
                                    id="timeNeeded"
                                    placeholder="Time needed in min" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                className="col-sm-2 control-label"
                                htmlFor="Ingredients">
                                Ingredients</label>
                            <div className="col-sm-10">
                                <input
                                    ref="ingredients"
                                    type="textarea"
                                    className="form-control"
                                    id="ingredients"
                                    placeholder="Ingredients. Separate them by comma." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-6">
                                <Button
                                    onClick={this.handleSuggestion.bind(this)}
                                    type="submit"
                                    className="btn btn-success">Suggest Ingredient</Button>
                            </div>
                            <div className="col-sm-10">
                                <input
                                    ref="suggestIngredient"
                                    style={{ marginTop: 10 }}
                                    type="textarea"
                                    className="form-control"
                                    id="SuggestedIngredient"
                                    placeholder="Suggestion from AI Model" />
                            </div>
                        </div>

                    </form>

                </Modal.Body>

                <Modal.Footer>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <Button
                                onClick={this.handleAddRecipe.bind(this)}
                                type="submit"
                                className="btn btn-success">Add</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

        );
    }
};

export default AddRecipe;


