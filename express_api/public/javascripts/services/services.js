app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])



app.service('food2forkAjaxCall', ['$http', function($http){

    var food2forkAjaxCall = {};

    this.getData = function(userIngredients){
      userIngredients= userIngredients.join(',')
      console.log(userIngredients);
      return $http.get('/api/' + userIngredients)
      // return $http.get('../../json/food2forkdatasample.json');
    }


}])
