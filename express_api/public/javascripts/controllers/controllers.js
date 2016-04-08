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
  var ingredientsMatched = [];

  // getIngredients.getSome().then(function(payload){
  //   console.log(payload.data);
  //   return $scope.ingredients = payload.data;
  // })

  // console.log(getIngredients.data);

  $scope.findIngredients = function(ingredientSearched){

    var ingredientSearched = this.ingredientSearched;
    console.log("^^^^^" + ingredientSearched + "^^^^^");

    getIngredients.getSome().then(function(payload){
      console.log(payload.data);
      $scope.matchedIngredients = [];
      // console.log('Inside get some function ' + ingredientSearched);
      if(payload.data[ingredientSearched]){
        $scope.matchedIngredients.push(payload.data[ingredientSearched]);
      }
      console.log($scope.matchedIngredients);
      return $scope.ingredients = payload.data;
    })

};

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
