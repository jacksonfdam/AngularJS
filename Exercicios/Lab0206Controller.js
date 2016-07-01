var labApp = angular.module("labApp",[]);
labApp.controller('labController', function($scope, $http) {
	$scope.users = [];
	$scope.getUsers = function(){
		$scope.users = [];
		$http({
			method: 'GET',
			url: 'https://randomuser.me/api/',
			params: {results:20},
		}).then(function(obj) {
			$scope.users = obj.data.results;
		});
	}

	$scope.getUsers();

})
.directive('profile', function() {
	return {
		restrict : 'EA',
		templateUrl : 'html/profile.html',
		scope: {
			user:'=userData'
		},
		link : function(scope, element, attrs) {
			console.log(scope.user);
		}
	}
})
/*

app.directive("profile", function($interpolate) {
  return {
    scope: {},
    template: '<div>{{nome}}</div>',
    link: function(scope, element, attrs) {
      var fn = $interpolate(element.attr('nome'));
      scope.nome = fn(scope.$parent);
    }
  };
});


app.directive("profile", function() {
  return {
    scope: { nome: '@'},
    template: '<div>{{nome}}</div>'
  };
});

<div profile nome="Jackson"></div>
<hr/>

<div profile nome="Jackson"></div>
<hr/>

OU

<div ng-repeat="usuario in ['Jackson', 'Ricardo', 'Simone']">
	<div profile nome="{{usuario}}"></div>
</div>

*/