(function() {
    var app = angular.module('ironMaidenApp', []);

    app.controller('MainCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
        $scope.searchText = '';
        $scope.spotifyURL = 'https://api.spotify.com/v1/artists/';
        $scope.artistId = '6mdiAmATAx73kdxrNrnlao';

        //Load albums list
        $scope.init = function(){
            $http.get($scope.spotifyURL + $scope.artistId + '/albums')
                       .then(handleSuccess, handleError);
        };

        $scope.getPage = function(url){
            $http.get(url).then(handleSuccess, handleError);
        };

        var handleSuccess = function(data){
            if(!!data.data){
                $scope.data = data.data;
                $scope.albums = $filter('unique')($scope.data.items);
            }
        };

        var handleError = function(e){
            $scope.error = e;
        };

        $scope.init();

    }]);

    app.filter('unique', function() {
       return function(albums) {
          var output = [],
              keys = [];

          angular.forEach(albums, function(album) {
              var key = album.name;
              if(keys.indexOf(key) === -1) {
                  keys.push(key);
                  output.push(album);
              }
          });

          return output;
       };
    });
})();
