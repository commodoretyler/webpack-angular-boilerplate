import angular from 'angular';
import router from '@uirouter/angularjs';
import angularbootstrap from 'angular-bootstrap';
import routing from './config/routes';

import styles from './styles/index.less';

import main from './main';

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'app.main'
]).config(routing);

