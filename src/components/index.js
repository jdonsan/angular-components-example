import angular from 'angular';
import { albumList } from './album-list';
import { album } from './album';

const components = angular
    .module('app.components', [])
    .component('album', album)
    .component('albumList', albumList)
    .name;
    
export default components;
    