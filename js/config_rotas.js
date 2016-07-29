  //App com as rotas para as páginas

  angular.module('myApp')
      .config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/home")

        $stateProvider
          .state('busca', {
              url: "/busca",
              templateUrl: "templates/pagina_busca/busca.html",
              controller: 'PaginaBuscaListCtrl'
          })

          .state('home', {
              url: "/home",
              templateUrl: "templates/pagina_home/home.html",
              controller: 'RecursoListCtrl'

          })

          .state('recurso', {
              url: "/recurso",
              templateUrl: "templates/pagina_recurso/recurso.html",
              controller: 'PaginaRecursoCtrl'
          })

          .state('usuario', {
              url: "/usuario",
              templateUrl: "templates/pagina_busca/usuario.html"
          })

    })
    .config(function($authProvider) {
      $authProvider.configure({
        apiUrl: 'http://portalmecapi.c3sl.ufpr.br/v1'
      });
    });
