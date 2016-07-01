var labApp = angular.module("labApp",[]);
labApp.controller('labController', function($scope, $http) {
   $scope.postColumns = [
	   {"field": "body", "title": "Mensagem"},
	   {"field": "create_time", "title":"Data e Hora"}
   ];

})
.directive('linkedlist', function() {
	return {
	  restrict : 'EA',
	  transclude : false,
	  templateUrl : 'html/linkedlist.html',
	  scope: {
	   listcolumns: "="
   },
   link : function(scope, element, attrs) {
   }
}
})