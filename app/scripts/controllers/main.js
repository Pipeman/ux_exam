'use strict';

/**
 * @ngdoc function
 * @name uxExam.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uxExam
 */
angular.module('uxExam').controller('MainCtrl', MainCtrl);

function MainCtrl () {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}
