var labApp = angular.module('labApp', []);

labApp.controller('Lab01Controller', function($scope) {
    $scope.total = 0;
    $scope.incrementar = function() {
        $scope.total++
    }
});