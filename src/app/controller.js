export default function ($http) {
    const endpoint = 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10';
    
    this.albums = [];
    
    $http.get(endpoint).then(function (response) {
        this.albums = response.data.items;
    }.bind(this));
};