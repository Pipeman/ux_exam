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
    vm.step = 0;
    vm.imagesCount = images.length;
    vm.currentImage = pointer + 1;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.missingSeconds = 0;
    vm.isLoading = true;
    vm.isSuccessful = false;
    vm.mode = mode;

    // SCOPE FUNCTION DEFINITION
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
    function viewChanger () {
        if (pointer >= images.length) {
            $location.url("phase2/" + beautifulness);
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
        vm.formSrc = $sce.trustAsResourceUrl("https://docs.google.com/forms/d/" + images[pointer].formPhase1ActionId + "/viewform?embedded=true");
        pointer++;
        vm.step++;
        vm.currentImage++;
    }
}
