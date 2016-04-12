app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}])


app.controller('IngredientController', ['$scope', '$http', 'getIngredients', 'food2forkAjaxCall',  function($scope, $http, getIngredients, food2forkAjaxCall){
  // console.log(getIngredients);

  $scope.findIngredients = function(ingredientSearched){

    $scope.selectedIngredients.ingredients.length = 0;

    var ingredientSearched = this.ingredientSearched;

    getIngredients.getSome().then(function(payload){
      // console.log(payload);
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

$scope.selectedIngredients = {
  ingredients: []
}




$scope.ajaxCall = function(){
  var userIngredients = $scope.selectedIngredients.ingredients;
  console.log(userIngredients);
  food2forkAjaxCall.getData(userIngredients).then(function(results){
    // console.log(results.data.recipes);
    for(i=0; i<results.data.recipes.length; i++){
      if(results.data.recipes[i].title.includes(userIngredients)){
      console.log(results.data.recipes[i].title);
    }
    }
  })
}


}])
