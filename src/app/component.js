import controller from './controller';

export const AppComponent = {
    controller,
    template: '<album-list albums="$ctrl.albums"></album-list>',
};