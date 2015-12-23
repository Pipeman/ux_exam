"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("ImagesCtrl", ImagesCtrl);

ImagesCtrl.$inject = [
    "$interval",
    "$sce",
    "ImagesSrv",
    "preloaderSrv",
    "$routeParams",
    "$location"
];

function ImagesCtrl (
    $interval,
    $sce,
    ImagesSrv,
    preloaderSrv,
    $routeParams,
    $location
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var maxSteps = 3;
    var pointer = 0;
    var cntSeconds = 3;
    var beautifulness = $routeParams.beautifulness;
    var mode = $routeParams.mode;
    var images = ImagesSrv.getImages(beautifulness);

    // SCOPE VARIABLES DEFINITION
    vm.step = -1;
    vm.imagesCount = images.length;
    vm.currentImage = pointer + 1;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.missingSeconds = 0;
    vm.isLoading = true;
    vm.isSuccessful = false;
    vm.mode = mode;

    // SCOPE FUNCTION DEFINITION
    vm.starter = starter;

    preloaderSrv.
        preloadImages(images).
        then(
            function handleResolve (imageLocations) {
                // Loading was successful.
                vm.isLoading = false;
                vm.isSuccessful = true;
                vm.viewChanger = viewChanger;
            },
            function handleReject (imageLocation) {
                // Loading failed on at least one image.
                vm.isLoading = false;
                vm.isSuccessful = false;
                console.error("Image Failed", imageLocation);
                console.info("Preload Failure");
            }
        );

    return vm;

    // FUNCTION DEFINITION
    function starter () {
        vm.step = 0;
    }

    function viewChanger () {
        if (pointer >= images.length) {
            $location.url("test2/" + beautifulness + "/" + mode);
            return true;
        }
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
            if (seconds === 0) {
                vm.step++;
                imageViewer();
            }
        }, 1000, 3);
    }

    // Simply call questionnaire viewer after 500ms
    function imageViewer () {
        $interval(function () {
            questionnaire();
        }, 500, 1);
    }

    function questionnaire () {
        var form = "";
        if (mode == "a") {
            form = images[pointer].formPhase1ActionId;
        }
        if (mode == "g") {
            form = images[pointer].formPhase1GoalId;
        }
        if (mode == "c") {
            form = images[pointer].formPhase1ControlId;
        }
        vm.formSrc = $sce.trustAsResourceUrl(
            "https://docs.google.com/forms/d/"
            + form
            + "/viewform?embedded=true"
        );
        pointer++;
        vm.step++;
        vm.currentImage++;
    }
}
