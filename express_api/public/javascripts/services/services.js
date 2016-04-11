app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])




app.service('food2forkAjaxCall', ['$http', function($http){
    console.log("Inside food2forkAjaxCall");

    var food2forkAjaxCall = {};

    this.getData = function(){
      console.log("Making the API CALL");
      // return $http.get('http://food2fork.com/api/search?key=');
    }



}])
