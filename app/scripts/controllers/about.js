"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uxExam
 */
angular.module("uxExam").controller("AboutCtrl", AboutCtrl);

AboutCtrl.$inject = [
    "$routeParams"
];

function AboutCtrl ($routeParams) {
    var vm = this;
    var beautifulness = $routeParams.beautifulness;
    var mode = $routeParams.mode;

    vm.beautifulness = "";
    vm.mode = ""

    if (beautifulness == "b" || beautifulness == "u") {
        vm.beautifulness = beautifulness;
    } else {
        // Randomly chooses if to show beauty or ugly images
        vm.beautifulness = Math.random() < 0.5 ? "b" : "u";
    }

    if (mode == "a" || mode == "g") {
        vm.mode = mode;
    } else {
        // Randomly chooses if to show beauty or ugly images
        vm.mode = Math.random() < 0.5 ? "a" : "g";
    }

}
