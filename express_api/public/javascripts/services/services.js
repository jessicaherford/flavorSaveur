app.service('getIngredients', ['$http', function($http){
  console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }
  

}])
