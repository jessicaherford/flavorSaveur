app.service('getIngredients', ['$http', function($http){
  // console.log('In getIngredients Service!');

    var getIngredients = {};

    this.getSome = function(){
      return $http.get('../../json/ingredients.json');
    }


}])




app.service('food2forkAjaxCall', ['$http', function($http){
    var theData = {};
    console.log("Service Food2Fork Call Happens Here!");
    // this.theData = function(){
    // return $http.get('http://food2fork.com/api/search?key=');
    // }
    //
    // console.log(theData.data);

}])
