angular.module('ContactsApp', ['ng-route'])
    .config(function ($routeProvider, $locationProvider){
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/list.html' 
            });

    });
    