"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("PhaseTwoCtrl", PhaseTwoCtrl);

PhaseTwoCtrl.$inject = [
    "$interval",
    "$sce",
    "ImagesSrv",
    "$routeParams",
    "$location"
];

function PhaseTwoCtrl (
    $interval,
    $sce,
    ImagesSrv,
    $routeParams,
    $location
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var maxSteps = 1;
    var pointer = 0;
    var beautifulness = $routeParams.beautifulness;
    var mode = $routeParams.mode;
    var images = ImagesSrv.getImages(beautifulness);

    // SCOPE VARIABLES DEFINITION
    vm.step = -1;
    vm.imagesCount = images.length;
    vm.currentImage = pointer + 1;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.isLoading = true;
    vm.isSuccessful = true;
    vm.mode = mode;

    // SCOPE FUNCTION DEFINITION
    vm.viewChanger = viewChanger;
    vm.imageViewer = imageViewer;
    vm.questionnaire = questionnaire;
    vm.starter = starter;

    return vm;

    // FUNCTION DEFINITION
    function starter () {
        vm.step = 0;
    }

    function viewChanger () {
        vm.isLoading = false;
        vm.isSuccessful = true;
        if (pointer >= images.length) {
            $location.url("questions/" + beautifulness + "/" + mode);
        }
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
        var form = "";
        if (mode == "a") {
            form = images[pointer].formPhase2ActionId;
        }
        if (mode == "g") {
            form = images[pointer].formPhase2GoalId;
        }
        if (mode == "c") {
            form = images[pointer].formPhase2ControlId;
        }
        vm.formSrc = $sce.trustAsResourceUrl(
            "https://docs.google.com/forms/d/"
            + form
            + "/viewform?embedded=true"
        );
        pointer++;
        vm.currentImage++;
    }
}
