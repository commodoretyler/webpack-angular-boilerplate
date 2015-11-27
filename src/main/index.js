import angular from 'angular';
import uirouter from 'angular-ui-router';

import MainRoutes from './main.routes';
import MainCtrl from './main.controller';

export default angular.module('app.main', [])
  .config(MainRoutes)
  .controller('MainCtrl', MainCtrl)
  .name;
