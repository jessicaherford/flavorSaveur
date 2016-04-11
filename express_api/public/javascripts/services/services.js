app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])







app.service('findRecipes', ['$http', function($http){


console.log("FIND RECIPES SERVICE");




}])








app.service('food2forkAjaxCall', ['$http', function($http){
    console.log("Don't know if I need this service?");

    var food2forkAjaxCall = {};

    this.getData = function(){
      console.log("not calling");
      // return $http.get('http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0');

    }



}])
