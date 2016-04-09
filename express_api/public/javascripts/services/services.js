app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])

// app.service('checkIfSelectedService', function(){
//   console.log("In checkIfSelectedService!");
//
//   // var selectedArr = [];
//   //
//   // this.getSelected = function(){
//   //   console.log("SELECTED!!");
//   // }
//
// })
