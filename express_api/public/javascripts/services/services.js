app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])



app.service('food2forkAjaxCall', ['$http', function($http){
    console.log("Inside food2forkAjaxCall Service");

    var food2forkAjaxCall = {};

    this.getData = function(data){
      return $http.get('../../json/food2forkdatasample.json')
      // return $http.get('http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0');
    }

}])
