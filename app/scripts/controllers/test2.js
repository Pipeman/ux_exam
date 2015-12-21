"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("Test2Ctrl", Test2Ctrl);

Test2Ctrl.$inject = [
    "$interval",
    "$sce",
    "ImagesSrv",
    "preloaderSrv",
    "$routeParams",
    "$location"
];

function Test2Ctrl (
    $interval,
    $sce,
    ImagesSrv,
    preloaderSrv,
    $routeParams,
    $location
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var maxSteps = 1;
    var pointer = 0;
    var beautifulness = $routeParams.beautifulness;
    var mode = $routeParams.mode;
    var images = ImagesSrv.getImages("t");

    // SCOPE VARIABLES DEFINITION
    vm.step = -1;
    vm.imagesCount = 1;
    vm.currentImage = pointer + 1;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.isLoading = true;
    vm.isSuccessful = true;
    vm.mode = mode;

    // SCOPE FUNCTION DEFINITION
    vm.starter = starter;
    vm.viewChanger = viewChanger;
    vm.imageViewer = imageViewer;
    vm.questionnaire = questionnaire;

    return vm;

    // FUNCTION DEFINITION
    function starter () {
        vm.step = 0;
    }

    function viewChanger () {
        if (pointer >= 1) {
            $location.url("phase2/" + beautifulness + "/" + mode);
        }
        vm.isLoading = false;
        vm.isSuccessful = true;

        imageViewer();
    }

    // Simply call questionnaire viewer after 500ms
    function imageViewer () {
        if (vm.step != maxSteps){
            vm.step++;
            vm.imageSrc = images[pointer].imageSrc;
            questionnaire();
        } else {
            vm.step = 0;
        }
    }

    function questionnaire () {
        var form = images[pointer].formPhase2ActionId;
        vm.formSrc = $sce.trustAsResourceUrl(
            "https://docs.google.com/forms/d/"
            + form
            + "/viewform?embedded=true"
        );
        pointer++;
        vm.currentImage++;
    }
}
