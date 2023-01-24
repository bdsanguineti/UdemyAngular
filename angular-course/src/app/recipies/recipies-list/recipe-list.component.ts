import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A test Recipe', 'Simple test', 'https://www.allrecipes.com/thmb/pl6IzWa0p5VGZP-8ZsF4wfpEIwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8000900-2000-d41f8a550fe5444894bf4a9e4d84fd1c.jpg'),
    new Recipe('A test Recipe2', 'Simple test2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-024_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595467106.jpeg'),
    new Recipe('A test Recipe3', 'Simple test3', 'https://idratherbestrongthanskinny.files.wordpress.com/2017/01/wfgvzzku13c213631383533393gvzzkuv4_1360705897.jpg'),
    new Recipe('A test Recipe4', 'Simple test4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrTBQERJBS5rT4gP_gnmxXlMkku7JXTqPbWnd4XXMEDmmqGDdLBpKin_8itAMvC6pbR8&usqp=CAU'),
    new Recipe('A test Recipe5', 'Simple test5', 'https://www.nikankitchen.com/Images/Recipies/salmon-518032_1280.jpg'),
  ];


  constructor() {
  }

  ngOnInit(): void {
    
  }
}
