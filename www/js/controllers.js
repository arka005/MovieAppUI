angular.module('app.controllers', []).controller('dashboardCtrl', function($scope) {

	//dashboardCtrl.localMovies = localMovies;

}).controller('searchResultsCtrl', function($scope, $log, $stateParams, $http, $sce, $ionicPopup, MovieFactory) {

	$scope.result = {};
	$http.get("http://www.omdbapi.com/?t=" + $stateParams.movie + "&y=&plot=short&r=json").success(function(data, status, headers, config) {
		$log.info("data:" + data.Poster);
		$scope.result = data;
		$scope.visible = true;
		url = '<iframe src="https://www.youtube.com/embed?listType=search&list=' + data.Title + '" width="230px" allowfullscreen></iframe>';
		$scope.player = $sce.trustAsHtml(url);
		$log.info(url);
	}).error(function(data, status, headers, config) {
		$log.info("data:" + data.toString);
		$log.info("status:" + status);
	});

	$scope.showTrailer = function() {
		var alertPopup = $ionicPopup.alert({
			//title : 'Don\'t eat that!',
			template : $scope.player
		});

		alertPopup.then(function(res) {
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};

}).directive("movieRatings", function() {
	return {
		restrict : 'E',
		templateUrl : 'templates/movieRatings.html',
		controller : function($scope) {
			$scope.items = [];
			$scope.spectre = {};
			$scope.spectre.rating = 4;
			for (var i = 0; i < $scope.spectre.rating; i++)
				$scope.items.push(i);
		},
		scope : {
			movieRatings : "=rating"
		},
		link : function(scope, el, attr) {
			console.log("print attributes value: " + scope.movieRatings.rating);
		}
	};
}).controller('cloudTabDefaultPageCtrl', function($scope) {

})
