var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $scope.url = "https://api.dealermade.com/v3/dealerships/hare-chevrolet/vehicles/1FTFW1ET8DKF64586";
	
	$http.get($scope.url).then(function(response) {
		
		jQuery.each(response.data.vehicle_pictures, function(i, val) {
			
			var string = val.url;
			
			string = string.substr(0, string.lastIndexOf("/"));			
			
			response.data.vehicle_pictures[i].thumbnail = string + '/preview_' + response.data.vehicle_pictures[i].filename;
			
		});
		
        $scope.gallery = response.data;
		
    });
});