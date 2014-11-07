var myApp = angular.module('myApp', []);

myApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

myApp.controller('karaokeController', function ($scope, $http) {
    
    $http.get("get_songs")
        .success(function(response) {
            $scope.songs = response;
            $scope.sortedSongs = _.groupBy($scope.songs, function(song) { return song.artist.substr(0,1) });
    }); 

	

    $scope.hello = function () {
    	console.log(_.filter($scope.sortedSongs, function(item) { return item.artist.toLowerCase.indexOf('a') == 0 }));
    	// console.log(_.filter($scope.sortedSongs, function(item) { return item.artist.toLowerCase().indexOf('a') == 0 }););

    };


});





