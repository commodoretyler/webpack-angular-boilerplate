import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import MainRoutes from './main.routes';
import MainCtrl from './main.controller';

export default angular.module('app.main', [])
  .config(MainRoutes)
  .controller('MainCtrl', MainCtrl)
  .name;
