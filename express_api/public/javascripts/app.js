var app = angular.module('flavorsaveur', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'PiratesController'
  })
})
