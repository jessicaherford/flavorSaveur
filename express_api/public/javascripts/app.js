var app = angular.module('flavorsaveur', ['ngRoute', 'ngResource', 'checklist-model']);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
