import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input()recipe:Recipe

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList()
  {
    console.log('click');
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
