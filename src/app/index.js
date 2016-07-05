import angular from 'angular';
import components from '../components';
import { AppComponent } from './component';

const root = angular
    .module('app', [components])
    .component('app', AppComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app']));

export default root;
