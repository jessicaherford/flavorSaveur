var app = angular.module('flavorsaveur', ['ngRoute', 'ngResource'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateURL: 'front_end/index.html',
      controller: 'MainController'
    })

    $locationProvider.html5Mode(true);

})
