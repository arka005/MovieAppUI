angular.module('app.services', []).factory('MovieFactory', [
function() {
	//var localMovies = this;
	//localMovies.name = "Spectre";

	// Some fake testing data
	var movies = [{
		id : 0,
		name : 'Lion King',
		genere : 'Animation, Comedy',
		pic : 'img/J4wOWVoJTpmbC5ri5FsA_The-Lion-King-the-lion-king-13191392-800-600.jpg'
	}, {
		id : 1,
		name : 'Spectre',
		genere : 'Action',
		pic : 'img/d1LESCotTDGCbU3UJI2n_Spectre.jpg'
	}, {
		id : 2,
		name : 'Ice Age',
		genere : 'Animation, Comedy',
		pic : 'img/wxG0gJjDQnqZIylNqyHb_Ice_age_5.jpg'
	}, {
		id : 3,
		name : 'Perry Governor',
		genere : 'Look at my mukluks!',
		pic : 'img/perry.png'
	}, {
		id : 4,
		name : 'Mike Harrington',
		genere : 'This is wicked good ice cream.',
		pic : 'img/mike.png'
	}];

	return {
		all : function() {
			return movies;
		},
		remove : function(movie) {
			movies.splice(movies.indexOf(movie), 1);
		},
		get : function(id) {
			for (var i = 0; i < movies.length; i++) {
				if (movies[i].id === parseInt(id)) {
					return movies[i];
				}
			}
			return null;
		},
		searchByName : function(name) {
			for (var i = 0; i < movies.length; i++) {
				if (movies[i].name == name) {
					return movies[i];
				}
			}
			return null;
		}
	};
}]);

