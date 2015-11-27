import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config/routes';

import main from './main';

import styles from '../styles/styles.scss';

angular.module('app', [
  'ui.router',
  'app.main'
]).config(routing);

