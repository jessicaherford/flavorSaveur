app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
  // $scope.ingredientThing;
  // console.log($scope.ingredientThing);
  // console.log('******' + ingredientThing );
  // $scope.data = $http.get('../../json/ingredients.json').success(function(data){
  //   return $scope.ingredients;

    // console.log($scope.ingredientThing);

  // })
  // console.log(data[0]);

}])


app.controller('IngredientController', ['$scope', '$http', 'getIngredients', 'food2forkAjaxCall',  function($scope, $http, getIngredients, food2forkAjaxCall){
  // console.log(getIngredients);


  $scope.findIngredients = function(ingredientSearched){

    var ingredientSearched = this.ingredientSearched;

    getIngredients.getSome().then(function(payload){
      $scope.matchedIngredients = [];
      // console.log('Inside get some function ' + ingredientSearched);
      if(payload.data[ingredientSearched]){
        $scope.matchedIngredients.push(payload.data[ingredientSearched]);
      }
      return $scope.ingredients = payload.data;
    })
    $scope.selectedIngredients.ingredients.push(ingredientSearched);
}

$scope.selectedIngredients = {
  ingredients: []
}

$scope.searchedIngredientPush = function(){
  var ingredientSearched = this.ingredientSearched;
  console.log("ACCESSED ingredient SEarched");
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


$scope.food2forkCall = function(){

  console.log("Inside Food To Fork Call");

  food2forkAjaxCall.theData().then(function(payload){
    console.log(payload);
  })

}





}])
