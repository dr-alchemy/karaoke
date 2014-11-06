var myApp = angular.module('myApp', []);

myApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

myApp.controller('karaokeController', function ($scope, $http) {
    
    $http.get("karaoke/default/get_songs")
        .success(function(response) {
            $scope.songs = response;
    }); 


});





