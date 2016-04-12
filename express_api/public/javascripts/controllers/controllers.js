app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}])


app.controller('IngredientController', ['$scope', '$http', 'getIngredients', 'food2forkAjaxCall',  function($scope, $http, getIngredients, food2forkAjaxCall){
  // console.log(getIngredients);

  $scope.findIngredients = function(ingredientSearched){

    $scope.selectedIngredients.ingredients.length = 0;

    var ingredientSearched = this.ingredientSearched;
    console.log(ingredientSearched);
    ingredientSearched = ingredientSearched.charAt(0).toUpperCase() + ingredientSearched.slice(1);
    console.log(ingredientSearched);
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

    // looping through userIngredients Array

    // for(i=0;i<userIngredients.length; i++){
    //     console.log(userIngredients[i]);
    // }

    for(i=0; i<results.data.recipes.length; i++){
        userIngredients.forEach(function(userIngredients, i){
          if(results.data.recipes[i].title.includes(userIngredients, i)){
          console.log("***********");
          console.log(results.data.recipes[i].title);
        }
        })
      //if(function ingredient macthes) put logic in here

    //   if(results.data.recipes[i].title.includes(userIngredients)){
    //   console.log("***********");
    //   console.log(results.data.recipes[i].title);
    // }
    }
  })
}

// code
// function ingredientMatches(str, ingredients){
// return true if an ingredient is in str
//}


}])
