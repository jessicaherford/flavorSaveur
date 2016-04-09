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
//     return $http.get('http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0');
//     }
//
//     console.log(theData);
//
// }])
