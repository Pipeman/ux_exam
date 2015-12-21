"use strict";

/**
 * @ngdoc overview
 * @name uxExam
 * @description
 * # uxExam
 *
 * Main module of the application.
 */
angular
    .module("uxExam", [
        "ngAnimate",
        "ngCookies",
        "ngResource",
        "ngRoute",
        "ngSanitize",
        "ngTouch"
    ])
    .config(function ($routeProvider, $sceDelegateProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "views/about.html",
            controller: "AboutCtrl",
            controllerAs: "vm"
        })
        .when("/home/:beautifulness/:mode", {
            templateUrl: "views/about.html",
            controller: "AboutCtrl",
            controllerAs: "vm"
        })
        .when("/test1/:beautifulness/:mode", {
            templateUrl: "views/test1.html",
            controller: "Test1Ctrl",
            controllerAs: "vm"
        })
        .when("/images/:beautifulness/:mode", {
            templateUrl: "views/images.html",
            controller: "ImagesCtrl",
            controllerAs: "vm"
        })
        .when("/test2/:beautifulness/:mode", {
            templateUrl: "views/test2.html",
            controller: "Test2Ctrl",
            controllerAs: "vm"
        })
        .when("/phase2/:beautifulness/:mode", {
            templateUrl: "views/phase2.html",
            controller: "PhaseTwoCtrl",
            controllerAs: "vm"
        })
        .when("/questions/:beautifulness/:mode", {
            templateUrl: "views/questions.html",
            controller: "QuestionsCtrl",
            controllerAs: "vm"
        })
        .when("/thanks", {
            templateUrl: "views/thanks.html"
        })
        .otherwise({
            redirectTo: "/home"
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            "self",
            // Allow loading from our assets domain.  Notice the difference between * and **.
            "https://docs.google.com/forms/"
        ]);
    });
