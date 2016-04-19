var app = angular.module('flavorsaveur', ['ngRoute', 'ngResource', 'checklist-model']);

// app.config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ]);

app.config('/*', function (request, response, next) {
     response.header("Access-Control-Allow-Origin", "*");
     response.header("Access-Control-Allow-Headers", "X-Requested-With");
     response.header("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
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

heroku apps:rename newname --app oldname
