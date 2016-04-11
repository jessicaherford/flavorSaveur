app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}])


app.controller('IngredientController', ['$scope', '$http', 'getIngredients', function($scope, $http, getIngredients){
  // console.log(getIngredients);

  $scope.findIngredients = function(ingredientSearched){

    $scope.selectedIngredients.ingredients.length = 0;

    var ingredientSearched = this.ingredientSearched;

    getIngredients.getSome().then(function(payload){
      $scope.matchedIngredients = [];

      if(payload.data[ingredientSearched]){
        $scope.matchedIngredients.push(payload.data[ingredientSearched]);
      }
      return $scope.ingredients = payload.data;
    })

    $scope.selectedIngredients.ingredients.push(ingredientSearched);
}


$scope.check = function(value, checked) {
  var indx = $scope.selectedIngredients.ingredients.indexOf(value);
  if (indx >= 0 && !checked) {
    $scope.selectedIngredients.ingredients.splice(indx, 1);
  }
  if (indx < 0 && checked) {
    $scope.selectedIngredients.ingredients.push(value);
  }
  console.log($scope.selectedIngredients.ingredients);
};

return $scope.selectedIngredients = {
  ingredients: []
}

}])

app.controller('RecipeController', ['$scope', '$http', 'food2forkAjaxCall', 'findRecipes', function($scope, $http, food2forkAjaxCall, findRecipes){

// console.log($scope.selectedIngredients.ingredients);

// food2forkAjaxCall.getData().then(function(payload){
//   console.log(payload.data.recipes);
//
//   console.log($scope.selectedIngredients.ingredients);
// })



}])
