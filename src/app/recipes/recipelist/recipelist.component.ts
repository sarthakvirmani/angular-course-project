import { RecipeService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  
  recipes: Recipe[]=[]

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
}
