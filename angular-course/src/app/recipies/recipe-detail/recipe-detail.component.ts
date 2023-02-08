import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipeChanged: Recipe;

  onRecipeChanged(event: Event): void {
    console.log('onRecipeChanged', event);
  }

}
