app.controller('MainController', ['$scope', function ($scope, $http) {
  $http.get('../../json/ingredients.json').success(function(payload){
    $scope.ingredients = payload;
  })
}])
