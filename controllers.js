// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

	$scope.title = 'home';

	$scope.city = cityService.city;
	$scope.$watch('city', function () {
		cityService.city = $scope.city;
	});

	$scope.submit = function() {
		$location.path("/forecast")
	};


}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {

	$scope.title = 'forecast';

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	$scope.$watch('city', function () {
		cityService.city = $scope.city;
	});

	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}

}]);

weatherApp.controller('colorCtrl', function ($scope) {
	$scope.color = {
		red: Math.floor(Math.random() * 255),
		green: Math.floor(Math.random() * 255),
		blue: Math.floor(Math.random() * 255),
		name: 'Color Name'
	};

	$scope.swatchCount = 1;


	
});