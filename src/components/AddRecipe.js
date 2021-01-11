import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class AddRecipe extends Component {
    handleAddRecipe(e) {
        e.preventDefault();

        let title = this.refs.title.value.trim();
        let ingredients = this.refs.ingredients.value.trim();
        let ingredientsArray = ingredients.split(',');
        ingredientsArray.map(function (a) {
            return a.trim();
        });

        let recipeObject = {
            title: title,
            ingredients: ingredientsArray
        };

        this.props._handleAddRecipe(recipeObject);

        this.refs.title.value = "";
        this.refs.ingredients.value = ""
        this.props.onClose.bind(this);
    }

    render() {
        const { show } = this.props;
        const styles = {
            modal: {
                display: (show) ? (show) : 'none',
                zIndex: 100000
            }
        };

        return (

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title><h4 className="modal-title">Add Recipe</h4></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal.Dialog>

        );
    }
};

export default AddRecipeForm;


