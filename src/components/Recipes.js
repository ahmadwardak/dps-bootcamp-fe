import React, { Component, Fragment } from 'react';

import RecipeService from "../services/RecipeService";

import RecipeDetail from './RecipeDetail';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';

// let recipeArray = [];
// let recipe1 = {
//     title: 'Recipe1',
//     timeNeeded: '50',
//     description: 'Description about the recipe',
//     ingredients: ['Onions', 'Eggs', 'Oil']
// };

// let recipe2 = {
//     title: 'Recipe2',
//     timeNeeded: '60',
//     description: 'Description2 about the recipe',
//     ingredients: ['Rice', 'Meat', 'Potato']
// };

// recipeArray.push(recipe1);
// recipeArray.push(recipe2);

export default class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            modalOpen: false,
            editModalOpen: false,
            editingData: '',
            editingIndex: ''
        };


        RecipeService.getRecipes().then((data) => {
            console.log('aaa');
            console.log(data)
            this.setState({
                recipes: [...data]

            })
        }).catch((e) => {
            console.error(e)
        });

    }

    addRecipe(recipe) {
        console.log(recipe)

        RecipeService.createRecipe(recipe).then((data) => {

        }).catch(err => {
            console.error(err);
        });

        this.toggleModel();
    }

    toggleModel() {
        this.setState({ modalOpen: !this.state.modalOpen });
    }
    toggleEditModel() {
        this.setState({ editModalOpen: !this.state.editModalOpen });
    }

    deleteRecipe(id) {
        //TODO: Add confirmation
        RecipeService.deleteRecipe(id).then((data) => {

        }).catch(err => {
            console.error(err);
        });

    }


    editRecipe(index) {
        let editingData = this.state.recipes[index];

        this.setState({
            editingIndex: index,
            editingData: editingData
        });
        this.toggleEditModel();
    }

    editRecipeComplete(index, recipe) {
        console.log("aa2a")
        RecipeService.updateRecipe(index, recipe).then((data) => {

        }).catch(err => {
            console.error(err);
        });


        // recipes[index] = recipe;
        // this.setState({ recipes: recipes });
        this.setState({
            editingIndex: '',
            editingData: ''
        });
        this.toggleEditModel();
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
                    id={data._id}
                    _deleteRecipe={this.deleteRecipe.bind(this)}
                    _editRecipe={this.editRecipe.bind(this)} />;
            });
        }


        let editForm = '';
        if (this.state.editingData !== '') {
            editForm = <EditRecipe
                show={this.state.editModalOpen}
                onClose={this.toggleEditModel.bind(this)}
                data={this.state.editingData}
                index={this.state.editingIndex}
                _handleEditRecipe={this.editRecipeComplete.bind(this)} >
            </EditRecipe>;
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

                {editForm}

                <AddRecipe
                    show={this.state.modalOpen}
                    onClose={this.toggleModel.bind(this)}
                    _handleAddRecipe={this.addRecipe.bind(this)} />
            </Fragment>
        )
    }
};

