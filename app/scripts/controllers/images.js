'use strict';

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module('uxExam').controller('ImagesCtrl', ImagesCtrl);


function ImagesCtrl ($interval) {
    var vm = this;
    var images = [
        "screen1.png",
        "screen2.png",
        "screen3.png",
        "screen4.png"
    ];
    var maxSteps = 3;
    var pointer = 0;
    var cntSeconds = 3;

    vm.step = 0;
    vm.src = "";
    vm.missingSeconds = 0;

    vm.viewChanger = viewChanger;

    return vm;

    function viewChanger () {
        if (vm.step != maxSteps){
            vm.step++;
            vm.src = images[pointer];
            countdown();
        } else {
            vm.step = 0;
        }
    }

    function countdown () {
        var seconds = cntSeconds;
        vm.missingSeconds = seconds;
        $interval(function () {
            seconds--;
            vm.missingSeconds = seconds;
            console.log(seconds);
            if (seconds === 0) {
                vm.step++;
                imageViewer();
            }
        }, 1000, 3);
    }

    function imageViewer () {
        $interval(function () {
            pointer++;
            vm.step++;
            questionnaire();
        }, 500, 1);
    }

    function questionnaire () {
        console.log("tutto molto bello");
    }
}
