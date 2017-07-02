import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularbootstrap from 'angular-bootstrap';
import routing from './config/routes';

import styles from './styles/index.less';

import main from './main';

angular.module('app', [
  'ngRoute',
  'app.main'
]).config(routing);

