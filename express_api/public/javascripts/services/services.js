app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])



app.service('food2forkAjaxCall', ['$http', function($http){

    var food2forkAjaxCall = {};

    this.getData = function(data, userIngredients){

      return $http.get('../../json/food2forkdatasample.json');
      // return $http.get('http://food2fork.com/api/search?key=');
    }

}])

//Trying to pass all contents of $scope.selectedIngredients into search parameters
