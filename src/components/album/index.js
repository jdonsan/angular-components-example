export const album = {
    bindings: {
        image: '<',
        name: '<'
    },
    template: `
        <img ng-src="{{$ctrl.image}}" alt="{{$ctrl.name}}"/>
        <h3>{{$ctrl.name}}</h3>
    `
};