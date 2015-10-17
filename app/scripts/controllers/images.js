'use strict';

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module('uxExam').controller('ImagesCtrl', ImagesCtrl);

ImagesCtrl.$inject = ['$interval', '$sce'];

function ImagesCtrl ($interval, $sce) {
    var vm = this;

    /**
        {
            imageUrl: "",
            formItId: "",
            formEngId: ""
        },
    */
    var images = [
        {
            imageSrc: "screen1.png",
            formItId: "",
            formEngId: "14nB_QgI1GCsWaPih3v2Iqq-J3lcYMlzWouOilLjtn28"
        },
        {
            imageSrc: "screen2.png",
            formItId: "",
            formEngId: "1iRmzMPf3Tqos086QuJ6e46otra8d2S2ZsG_NLpckIm8"
        },
        {
            imageSrc: "screen3.png",
            formItId: "",
            formEngId: "1XvzV-ebGLtP7KVRAZ5bDtfFqudZ0vmtCoD8gqA35G8g"
        },
        {
            imageSrc: "screen4.png",
            formItId: "",
            formEngId: "1g0aB7XhcCQvPDs6gAOAcJ1MzUmbooNGKPH8ufjXJ2zM"
        }
    ];
    var maxSteps = 3;
    var pointer = 0;
    var cntSeconds = 3;

    vm.step = 0;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.missingSeconds = 0;



    vm.viewChanger = viewChanger;

    return vm;

    function viewChanger () {
        if (vm.step != maxSteps){
            vm.step++;
            vm.imageSrc = images[pointer].imageSrc;
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
            questionnaire();
        }, 500, 1);
    }

    function questionnaire () {
        vm.formSrc = $sce.trustAsResourceUrl("https://docs.google.com/forms/d/" + images[pointer].formEngId + "/viewform?embedded=true");
        pointer++;
        vm.step++;
    }
}
