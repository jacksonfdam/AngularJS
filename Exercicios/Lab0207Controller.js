var labApp = angular.module("labApp",['ngRoute']);
/*
	AngularJS 1.2 and Routing 
	The ngRoute module is no longer included in Angular after version 1.1.6. 
	You will need to call the module and add it to the head of your document 
	to use it. This tutorial has been updated for AngularJS 1.2
	*/
	/* configure our routes */
	labApp.config(function($routeProvider) {
		$routeProvider

		/* route for the home page */
		.when('/', {
			templateUrl : 'html/home.html',
			controller  : 'mainController'
		})

		/* route for the about page */
		.when('/about', {
			templateUrl : 'html/about.html',
			controller  : 'aboutController'
		})

		/* route for the contact page */
		.when('/contact', {
			templateUrl : 'html/contact.html',
			controller  : 'contactController'
		})

		.otherwise({
			redirectTo: '/'
		});
	});

	labApp.controller('labController', function($scope, $http) {
		$scope.message = "Bem vindo ao Lab 02 07";

	})
	/* create the controller and inject Angular's $scope */
	labApp.controller('mainController', function($scope) {
		/* create a message to display in our view */
		$scope.message = 'Bem vindo a Home';
	});

	labApp.controller('aboutController', function($scope) {
		$scope.message = 'Pagina de Sobre';
	});

	labApp.controller('contactController', function($scope) {
		$scope.message = 'Pagina de Contato';
	});