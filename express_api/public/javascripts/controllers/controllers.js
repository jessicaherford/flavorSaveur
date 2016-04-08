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
  console.log(getIngredients);
  getIngredients.getSome().then(function(payload){
    console.log(payload);
  })

  // console.log(getIngredients.data);

  // $scope.findIngredients = function(ingredientSearched){
  //
  //   console.log($scope.ingredientSearched);

  // working part
  //   $scope.ingredientSearched = this.ingredientSearched;
  //   // console.log("ingredientSearched: " + this.ingredientSearched);
  //   var ingredientSearched = this.ingredientSearched;
  //   console.log("^^^^^" + ingredientSearched + "^^^^^");

    // var pairedIngredients = [];
    // $http.get('../../json/ingredients.json').success(function(data){
    // $scope.data = data;
    // console.log(data[0]);
    // // console.log(data[0].Apples);
    // return data[0];
    // });
    //   $http.get('../../json/ingredients.json').success(function(data){
    //   $scope.data = data;
    //   console.log(data[0]);
    //   // console.log(data[0].Apples);
    //   return data[0];
    // })




// }

}])


// var lookup = require('../../json/ingredients.json');
//
//
// listIngredientPairings: function(data, ingredient){
//       var pairedIngredients = [];
//
//       if(data[this.ingredient]){
//               this.ingredient = data[this.ingredient];
//               pairedIngredients.push([this.ingredient]);
//               console.log(pairedIngredients[0][0]);
//               pairedIngredients = pairedIngredients[0][0];
//               return pairedIngredients;
//              }
//              else{
//                alert("Please try again, ingredient not found!");
//              }
//            }
