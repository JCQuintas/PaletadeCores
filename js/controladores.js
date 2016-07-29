(function() {
    'use strict';
    angular.module('myApp')

      //recursos da página inicial e seus parametros
      .controller('RecursoListCtrl', ['$scope', 'RecursoService', '$auth',
        function($scope, RecursoService, $auth){

          $scope.loginData = {  }; //informações do modal login

          $scope.doLogin = function() { //método que usa a biblioteca ng-token-auth para fazer o login
            console.log($scope.loginData);
            $auth.submitLogin($scope.loginData)
              .then(function(resp) {
                console.log('auth headers', $auth.retrieveData('auth_headers'));
              })
              .catch(function(resp) {
                console.log(resp);
              });
          };

          var busca = '*'; // Query da busca, por padrão,  busca = '*';
          var nPagina = 1; //serve para paginação, por padrão, nPágina = 1;
          var ResultPorPagina = 20; //quantidade de resultados
          var tag = ''; //tags, por exemplo disciplina, ano tipo de ensino, por padrão tag = '';
          var TipoDeRecurso = 'Software Educacional, Vídeo, Imagem, Áudio, Mapa, Animação/simulação, Experimento prático, Texto, PDF, Website externo, Outros';

          RecursoService.getAll(busca, nPagina, ResultPorPagina, tag, TipoDeRecurso, function(data) {
            console.log(data);
            $scope.recursos = data;
            //separação do json recursos para 5 objetos $scope.carroselLinha[i]
            $scope.carroselLinha1 = [];
            $scope.carroselLinha2 = [];
            $scope.carroselLinha3 = [];
            $scope.carroselLinha4 = [];
            $scope.carroselLinha5 = [];

            for (var i = $scope.recursos.length - 1; i >= 0; i-=4) {
              if (i == 19) {
                $scope.carroselLinha1[0] = $scope.recursos[i];
                $scope.carroselLinha1[1] = $scope.recursos[i-1];
                $scope.carroselLinha1[2] = $scope.recursos[i-2];
                $scope.carroselLinha1[3] = $scope.recursos[i-3];
              };

                if (i == 15) {
                $scope.carroselLinha2[0] = $scope.recursos[i];
                $scope.carroselLinha2[1] = $scope.recursos[i-1];
                $scope.carroselLinha2[2] = $scope.recursos[i-2];
                $scope.carroselLinha2[3] = $scope.recursos[i-3];
              };

                if (i == 11) {
                $scope.carroselLinha3[0] = $scope.recursos[i];
                $scope.carroselLinha3[1] = $scope.recursos[i-1];
                $scope.carroselLinha3[2] = $scope.recursos[i-2];
                $scope.carroselLinha3[3] = $scope.recursos[i-3];
              };

                if (i == 7) {
                $scope.carroselLinha4[0] = $scope.recursos[i];
                $scope.carroselLinha4[1] = $scope.recursos[i-1];
                $scope.carroselLinha4[2] = $scope.recursos[i-2];
                $scope.carroselLinha4[3] = $scope.recursos[i-3];
              };

               if (i == 3) {
                $scope.carroselLinha5[0] = $scope.recursos[i];
                $scope.carroselLinha5[1] = $scope.recursos[i-1];
                $scope.carroselLinha5[2] = $scope.recursos[i-2];
                $scope.carroselLinha5[3] = $scope.recursos[i-3];
              };
            };
            console.log($scope.carroselLinha1 )
          });

        }])

      //recursos na página de busca
     .controller('PaginaBuscaListCtrl', ['$scope', 'RecursoService',
      function($scope, RecursoService){
        //parametros da busca//
          //BUSCA - Pega o que o usuário digitou, antes verifica se está retornanando vazio, se estiver busta todos
            $scope.busca = getUrlVars()["b"];
            var busca = getUrlVars()["b"];
            //var busca = getUrlVars()["b"];
            var nPagina = 1;
            var ResultPorPagina = 25; //resultado por página
            var tag = '';
            var TipoDeRecurso = 'Experimento prático';

            RecursoService.getAll(busca, nPagina, ResultPorPagina, tag, TipoDeRecurso, function(data) {
            console.log(data);
            $scope.recursos = data;
          });
      }])

      //Pagina do recurso
     .controller('PaginaRecursoCtrl', ['$scope', 'RecursoService',
      function($scope, RecursoService){
        //Id do recurso//
        var id = getUrlVars()["id"];
        $scope.id = id;

         RecursoService.getOne(id, function(data) {
            $scope.recurso = data;
          });

          $scope.like = function() {
            RecursoService.like(id, function(data) {
               console.log(data);
               $scope.recurso = data;
             });
          };
      }]);
})();
