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


app.controller('IngredientController', ['$scope', '$http', 'getIngredients', function($scope, $http, getIngredients){
  console.log(getIngredients);


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



};


  


//    $scope.stateChanged = function (questId) {
//      var array = [];
//    if($scope.answers[questId]){ //If it is checked
//        console.log("Checked");
//        array.push($scope.answers[questId]);
//    }
//    else{
//      console.log("Unchecked!");
//    }
//    console.log(array);
// }



}])
