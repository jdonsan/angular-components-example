export const albumList = {
    bindings: {
        albums: '<',
    },
    template: `
        <album ng-repeat="album in $ctrl.albums" name="album.name" href="album.href" image="album.images[1].url"></album>     
    `
};