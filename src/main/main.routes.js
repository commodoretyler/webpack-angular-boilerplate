MainRoutes.$inject = ['$stateProvider'];

export default function MainRoutes($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      parent: 'abstract-root',
      templateUrl: 'src/main/templates/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
    });
}
