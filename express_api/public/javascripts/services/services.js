app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])




// app.service('food2forkAjaxCall', ['$http', function($http){
//     var theData = {};
//
//     this.theData = function(){
//     return $http.get('http://api.bigoven.com/recipes');
//     }
//
//     console.log(theData.data);
//
// }])
