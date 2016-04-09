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


app.controller('IngredientController', ['$scope', '$http', 'getIngredients',  function($scope, $http, getIngredients){
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

}

$scope.selectedIngredients = {
  ingredients: []
}

$scope.check = function(value, checked) {
  var idx = $scope.selectedIngredients.ingredients.indexOf(value);
  if (idx >= 0 && !checked) {
    $scope.selectedIngredients.ingredients.splice(idx, 1);
  }
  if (idx < 0 && checked) {
    $scope.selectedIngredients.ingredients.push(value);
  }
  console.log($scope.selectedIngredients.ingredients);
};


$scope.user = {
  roles: ['guest']
};

// $scope.check = function(value, checked) {
//   var idx = $scope.user.roles.indexOf(value);
//   if (idx >= 0 && !checked) {
//     $scope.user.roles.splice(idx, 1);
//   }
//   if (idx < 0 && checked) {
//     $scope.user.roles.push(value);
//   }
//   console.log($scope.user.roles);
// };




// $scope.$watch('items', function(newValue, oldValue) {
//             console.log(newValue)
//         }, true);


// $scope.checkAll = function() {
//   $scope.user.roles = $scope.roles.map(function(item) { return item.text; });
// };
// $scope.uncheckAll = function() {
//   $scope.user.roles = [];
// };
// $scope.checkFirst = function() {
//   $scope.user.roles.splice(0, $scope.user.roles.length);
//   $scope.user.roles.push(1);
// };



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
