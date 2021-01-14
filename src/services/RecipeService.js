"use strict";

import HttpService from './HttpService';
import axios from 'axios';

export default class RecipeService {

    constructor() {
    }

    static baseURL() { return "http://localhost:3000/recipes" }

    static getRecipes() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${RecipeService.baseURL()}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving recipes');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getRecipe(recipeId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${RecipeService.baseURL()}/${recipeId}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving recipe');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static createRecipe(recipe) {
        console.log(recipe);
        return new Promise((resolve, reject) => {

            axios({
                method: 'post',
                url: this.baseURL(),
                data: {
                    title: recipe.title,
                    description: recipe.description,
                    timeNeeded: recipe.timeNeeded,
                    ingredients: recipe.ingredients
                }
            })
                .then((response) => {
                    console.log(response);
                    window.location = "/";
                    window.location.reload(false);
                }, (error) => {
                    console.log(error);
                });


        });
    }

    static updateRecipe(id, recipe) {

        return new Promise((resolve, reject) => {

            axios({
                method: 'put',
                url: this.baseURL() + "/" + id,
                data: {
                    title: recipe.title,
                    description: recipe.description,
                    timeNeeded: recipe.timeNeeded,
                    ingredients: recipe.ingredients
                }
            })
                .then((response) => {
                    console.log(response);
                    window.location = "/";
                    window.location.reload(false);
                }, (error) => {
                    console.log(error);
                });


        });
    }

    static deleteRecipe(id) {

        return new Promise((resolve, reject) => {
            axios.delete(`${RecipeService.baseURL()}/${id}`, {
                headers: {

                }
            })
                .then(res => {

                    window.location = "/";
                    window.location.reload(false);
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }


}