import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config/routes';

import main from './main';

angular.module('app', [
  'ui.router',
  'app.main'
]).config(routing);

