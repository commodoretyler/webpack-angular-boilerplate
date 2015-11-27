routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('abstract-root', {
      abstract: true,
      views: {
        main: {
          template: '<ui-view />'
        }
      }
    });
}
