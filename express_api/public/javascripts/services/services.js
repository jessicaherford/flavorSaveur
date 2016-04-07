app.factory('ingredients', function($http){
        return {
          list: function(callback){
            $http.get('../json/ingredients.json').success(callback);
    }
  };
});
