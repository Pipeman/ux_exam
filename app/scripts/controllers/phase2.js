"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("Phase2Ctrl", Phase2Ctrl);

Phase2Ctrl.$inject = [
    "$interval",
    "$sce",
    "ImagesSrv",
    "preloaderSrv",
    "$routeParams"
];

function Phase2Ctrl (
    $interval,
    $sce,
    ImagesSrv,
    preloaderSrv,
    $routeParams
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var maxSteps = 2;
    var pointer = 0;
    var beautifulness = $routeParams.beautifulness;
    var images = ImagesSrv.getImages(beautifulness);

    // SCOPE VARIABLES DEFINITION
    vm.step = 0;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.isLoading = true;
    vm.isSuccessful = true;

    // SCOPE FUNCTION DEFINITION
    vm.viewChanger = viewChanger;
    vm.imageViewer = imageViewer;
    vm.questionnaire = questionnaire;

    return vm;

    // FUNCTION DEFINITION
    function viewChanger () {
        vm.isLoading = false;
        vm.isSuccessful = true;
        if (pointer >= images.length) {
            console.log("Final questionnaire");
            // $location.url("phase2/" + beautifulness);
        }
        imageViewer();
    }

    // Simply call questionnaire viewer after 500ms
    function imageViewer () {
        console.log(vm.step);
        if (vm.step != maxSteps){
            vm.step++;
            vm.imageSrc = images[pointer].imageSrc;
        } else {
            vm.step = 0;
        }
    }

    function questionnaire () {
        vm.formSrc = $sce.trustAsResourceUrl("https://docs.google.com/forms/d/" + images[pointer].formPhase2Id + "/viewform?embedded=true");
        pointer++;
        vm.step++;
    }
}
