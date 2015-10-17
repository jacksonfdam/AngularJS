var labApp = angular.module('labApp', []);

function Lab01Controller($scope) {
    $scope.total = 0;
    $scope.incrementar = function() {
        $scope.total++
    }

}