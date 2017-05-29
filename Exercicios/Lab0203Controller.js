var locationApp = angular.module("locationApp",[]);
locationApp.controller('userPositionController', function($scope, $http) {
    $scope.zipcode = 0;
    $scope.humidity = 0;
    $scope.temp = 0;
    $scope.temp_max = 0;
    $scope.temp_min = 0;
    $scope.lat = 0;
    $scope.lon = 0;
    $scope.latlon = $scope.lat + ',' + $scope.lon;
    $scope.staticMapUrl ='https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97300&w=300&h=300';
    $scope.staticWeatherUrl ='https://placeholdit.imgix.net/~text?w=20&h=20';

    /*PEGA GEOPOSITION*/
    $scope.getUserLocation = function(){
        $http({
            method: 'GET',
            url: 'http://ipinfo.io',
            params: {}
        }).then(function(obj) {
            $scope.data = obj.data;
            $scope.lat = $scope.data.lat = obj.data.loc.split(',')[0];
            $scope.lon = $scope.data.lon = obj.data.loc.split(',')[1];
            $scope.latlon = $scope.lat + ',' + $scope.lon;
            $scope.getWeatherOnUserLocation();
        });
    }

    /*PEGA WEATHER INFO*/
    $scope.getWeatherOnUserLocation = function(){
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                lat:$scope.lat,
                lon:$scope.lon,
                units:'metric',
                APPID:'e036195e96fe8ea62f54d5170035147b'
            }
        }).then(function(obj) {
            $scope.humidity = obj.data.main.humidity;
            $scope.temp = obj.data.main.temp;
            $scope.temp_max = obj.data.main.temp_max;
            $scope.temp_min = obj.data.main.temp_min;
            $scope.staticWeatherUrl = 'http://openweathermap.org/img/w/'+obj.data.weather[0].icon+'.png'
        });
    }

    /*PEGA ZIP CODE*/
    $scope.getUserZipCode = function(){
        $http({
            method: 'GET',
            url: 'https://viacep.com.br/ws/' + $scope.zipcode + '/json/'
        }).then(function(obj) {
            console.log(obj.data)
            $scope.cep = obj.data.cep;
            $scope.logradouro = obj.data.logradouro;
            $scope.complemento = obj.data.complemento;
            $scope.bairro = obj.data.bairro;
            $scope.uf = obj.data.uf;
            $scope.localidade = obj.data.localidade;
            $scope.ibge = obj.data.ibge;
            $scope.gia = obj.data.gia;
        });
    }

    $scope.buscaCep = function(){
        $http({
            method: 'GET',
            url: 'http://maps.google.com/maps/api/geocode/json?address='+$scope.latlon+'&sensor=false'
        }).then(function(obj) {
            console.log(obj.data)
            for (j = 0; j < obj.data.results[0].address_components.length; j++) {
                if (obj.data.results[0].address_components[j].types[0] == 'postal_code')
                    $scope.zipcode = parseInt(obj.data.results[0].address_components[j].short_name + '000');
            }
            
        });
    }

    $scope.getUserLocation();
    $scope.$watch('latlon', function(latlon) {
        $scope.staticMapUrl = "http://maps.googleapis.com/maps/api/staticmap?center=" + $scope.latlon + "&zoom=18&scale=false&size=300x300&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C" + $scope.latlon + "&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C-30.014728899999994,-51.195155299999996";
    }); 

    $scope.$watch('zipcode', function(zipcode) {
        console.log(zipcode);
        console.log((''+$scope.zipcode).length);
        if((''+$scope.zipcode).length == 8){
            $scope.getUserZipCode();
        }
    });  
});