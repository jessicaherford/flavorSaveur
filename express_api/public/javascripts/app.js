var app = angular.module('flavorsaveur', ['ngRoute', 'ngResource', 'checklist-model']);



app.config(function ($routeProvider) {
  $routeProvider
  .when('/ingredientsearch', {
    templateUrl: 'views/ingredientsearch.html',
    controller: 'IngredientController'
  })
  .when('/findrecipes', {
    templateUrl: 'views/findrecipes.html',
    controller: 'RecipeController'
  })
})
