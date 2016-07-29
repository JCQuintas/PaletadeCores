(function() {
    'use strict';

    angular.module('myApp')
      .factory('RecursoService', ['$http',
          function($http) {
              return {
                  getAll: function(busca, nPagina, ResultPorPagina, tag, TipoDeRecurso, callback) {
                      $http({
                          method: 'get',
                          url: 'http://portalmecapi.c3sl.ufpr.br/v1/search?page=' + nPagina +'&results_per_page=' + ResultPorPagina + '&query=' + busca + '&search_class=LearningObject&tags='+ tag +'&types=' + TipoDeRecurso
                      }).success(function(data) {
                          console.log(data);
                          callback(data);
                      }).error(function() {
                          //alert("error getAll");
                      });
                  },
                  getOne: function(id, callback) {
                    $http({
                        method: 'get',
                        url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/' + id + '?obba='
                    }).success(function(data) {
                        console.log(data);
                        callback(data);
                    }).error(function() {
                        alert("error getOne");
                    });
                  },
                  like: function(id, callback) {
                    $http({
                        method: 'post',
                        url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/' + id + '/like'
                    }).success(function(data) {
                        console.log(data);
                        callback(data);
                    }).error(function() {
                        alert("error like");
                    });
                  }


              };
          }
      ]);
})();
