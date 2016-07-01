var labApp = angular.module("labApp",[]);
Object.toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};

labApp.controller('labController', function($scope, $http) {
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.message = '';
    $scope.messages = [];
    
    $scope.getMessages = function(){
        $scope.messages = [];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/messages',
            params: {},
        }).then(function(obj) {
            $scope.messages = obj.data.data;
        });
    }

    $scope.getMessages();

    $scope.newMessage = function(){
        if($scope.message.length > 0){
            $http({
                method: 'POST',
                url: 'http://localhost:3000',
                params: {},
                data: Object.toparams({ message : $scope.message }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(obj) {
                $scope.message = '';

                $scope.getMessages();
            });
        }
    }
    $scope.$watch('latlon', function(latlon) {
        $scope.staticMapUrl = "http://maps.googleapis.com/maps/api/staticmap?center=" + $scope.latlon + "&zoom=18&scale=false&size=300x300&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C" + $scope.latlon + "&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C-30.014728899999994,-51.195155299999996";
    }); 
    
})
.directive('messageAddNew', function() {
            return {
                restrict: 'E',
                replace: true,
                template: '<div><div style="margin-right:20px;" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input" ng-model="message" type="text" id="new_message"><label class="mdl-textfield__label" for="new_message">Nova Mensagem</label></div><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" ng-click="newMessage()" title="Adicionar Mensagem">Adicionar</button></div>'
            }
        })