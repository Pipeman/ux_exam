'use strict';

/**
 * @ngdoc function
 * @name uxExam.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uxExam
 */
angular.module('uxExam').controller('AboutCtrl', AboutCtrl);

function AboutCtrl () {
    var vm = this;

    vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}
