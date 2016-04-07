var app = angular.module('flavorsaveur', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/ingredientsearch', {
    templateUrl: 'views/ingredientsearch.html',
    controller: 'MainController'
  })
})
