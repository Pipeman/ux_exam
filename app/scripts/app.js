'use strict';

/**
 * @ngdoc overview
 * @name uxExam
 * @description
 * # uxExam
 *
 * Main module of the application.
 */
angular
    .module('uxExam', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $sceDelegateProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .when('/images', {
            templateUrl: 'views/images.html',
            controller: 'ImagesCtrl',
            controllerAs: 'images'
        })
        .otherwise({
            redirectTo: '/'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://docs.google.com/forms/'
        ]);
    });
