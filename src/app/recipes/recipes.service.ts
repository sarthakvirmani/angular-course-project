import { ShoppinglistService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
    new Recipe("Recipe1","This is Test recipe 1","https://www.inspiredtaste.net/wp-content/uploads/2019/01/Easy-Quinoa-Salad-Recipe-1-1200.jpg",
    [
        new Ingredient('Meat',1),
        new Ingredient('Fries',20)
    ]),
    new Recipe("Recipe2","This is Test recipe 2","https://www.wellplated.com/wp-content/uploads/2017/04/Baked-Soy-Ginger-Salmon-300x400.jpg",
    [
        new Ingredient('Meat',1),
        new Ingredient('Chicken',5)
    ]),
    new Recipe("Recipe3","This is Test recipe 3","https://www.wellplated.com/wp-content/uploads/2019/04/Cajun-Shrimp-Pasta-Recipe-300x400.jpg",
    [
        new Ingredient('Meat',1),
        new Ingredient('bacon',7)
    ]
    )
    ];
    constructor(private slService:ShoppinglistService){}
    getRecipes()
    {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.slService.addIngredients(ingredients);
    }
}