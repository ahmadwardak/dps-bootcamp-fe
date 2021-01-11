import React, { Component, Fragment } from 'react';

import RecipeDetail from './RecipeDetail';
import AddRecipe from './AddRecipe';

let recipeArray = [];
let recipe1 = {
    title: 'Recipe1',
    timeNeeded: '50',
    description: 'Description about the recipe',
    ingredients: ['Onions', 'Eggs', 'Oil']
};

let recipe2 = {
    title: 'Recipe2',
    timeNeeded: '60',
    description: 'Description2 about the recipe',
    ingredients: ['Rice', 'Meat', 'Potato']
};

recipeArray.push(recipe1);
recipeArray.push(recipe2);

export default class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: recipeArray,
            modalOpen: false,
            editModalOpen: false,
        };
    }

    addRecipe(recipe) {
        console.log(recipe)
        let allRecipes = this.state.recipes.concat([recipe]);
        this.setState({
            recipes: allRecipes
        });
        localStorage.setItem('recipes', JSON.stringify(recipe));
        this.toggleModel();
    }

    toggleModel() {
        this.setState({ modalOpen: !this.state.modalOpen });
        console.log(this.state.modalOpen);
    }

    deleteRecipe(id) {

    }

    editRecipe(id) {

    }

    render() {
        let recipeNames = "";
        if (this.state.recipes.length === 0) {
            recipeNames = <h4>* No recipe yet</h4>;
        } else {
            recipeNames = this.state.recipes.map((data, index) => {
                return <RecipeDetail
                    item={data}
                    key={index}
                    id={index}
                    _deleteRecipe={this.deleteRecipe.bind(this)}
                    _editRecipe={this.editRecipe.bind(this)} />;
            });
        }
        return (
            <Fragment>
                <div className="form-group" style={{ marginTop: 10 }}>
                    <div className="col-sm-10">
                        <button
                            type="submit"
                            onClick={this.toggleModel.bind(this)}
                            className="btn btn-info">Add</button>
                    </div>
                </div>
                {recipeNames}
                <AddRecipe
                    show={this.state.modalOpen}
                    onClose={this.toggleModel.bind(this)}
                    _handleAddRecipe={this.addRecipe.bind(this)} />
            </Fragment>
        )
    }
};

