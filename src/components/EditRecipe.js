import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RecipeService from "../services/RecipeService";
class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            timeNeeded: '',
            ingredients: ''
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeDesciption = this.changeDesciption.bind(this);
        this.changeTimeNeeded = this.changeTimeNeeded.bind(this);
        this.changeIngredients = this.changeIngredients.bind(this);

    }

    componentDidMount() {
        let id = this.props.index;

        RecipeService.getRecipe(id).then((data) => {
            console.log('aaa');
            console.log(data)
            this.setState({
                title: data.title,
                description: data.description,
                timeNeeded: data.timeNeeded,
                ingredients: data.ingredients

            })
        }).catch((e) => {
            console.error(e)
        });

        // this.setState({
        //     title: this.props.data.title,
        //     description: this.props.data.description,
        //     timeNeeded: this.props.data.timeNeeded,
        //     ingredients: this.props.data.ingredients.join(',')
        // });
    }

    handleEditRecipe(e) {
        e.preventDefault();
        console.log(this.state.ingredients)
        let ingredients = this.state.ingredients.trim();
        let ingredientsArray = ingredients.split(',');
        ingredientsArray.map(function (a) {
            return a.trim();
        });

        let recipeObject = {
            title: this.state.title,
            description: this.state.description,
            timeNeeded: this.state.timeNeeded,
            ingredients: ingredientsArray
        };

        this.props._handleEditRecipe(this.props.index, recipeObject);

        this.props.onClose.bind(this);
        this.props.onClose();
    }


    changeTitle(e) {
        this.setState({ title: e.target.value });
    }

    changeIngredients(e) {
        this.setState({ ingredients: e.target.value });
    }


    changeDesciption(e) {
        this.setState({ description: e.target.value });
    }

    changeTimeNeeded(e) {
        this.setState({ timeNeeded: e.target.value });
    }

    handleSuggestion(e) {
        e.preventDefault();
        console.log("suggestion")
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h4 className="modal-title">Edit Recipe</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal" role="form"
                        onSubmit={this.handleEditRecipe.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label"
                                htmlFor="title">Title</label>
                            <div className="col-sm-10">
                                <input
                                    ref="title"
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    defaultValue={this.state.title}
                                    onChange={this.changeTitle}
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
                                    defaultValue={this.state.description}
                                    onChange={this.changeDescription}
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
                                    defaultValue={this.state.timeNeeded}
                                    onChange={this.changeTimeNeeded}
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
                                    id="Ingredients"
                                    defaultValue={this.state.ingredients}
                                    onChange={this.changeIngredients}
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
                                onClick={this.handleEditRecipe.bind(this)}
                                type="submit"
                                className="btn btn-success">Edit</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

        );
    }
};

export default EditRecipe;


