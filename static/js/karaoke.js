var myApp = angular.module('myApp', []);

myApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

myApp.controller('karaokeController', function ($scope, $http) {
    
    $http.get("http://127.0.0.1:8000/karaoke/default/get_songs")
        .success(function(response) {
            $scope.songs = response;
    }); 


});





