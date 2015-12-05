"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("ImagesCtrl", ImagesCtrl);

ImagesCtrl.$inject = ["$interval", "$sce", "ImagesSrv", "preloaderSrv"];

function ImagesCtrl ($interval, $sce, ImagesSrv, preloaderSrv) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var maxSteps = 3;
    var pointer = 0;
    var cntSeconds = 3;
    var images = ImagesSrv.beautifulImages;

    // SCOPE VARIABLES DEFINITION
    vm.step = 0;
    vm.imageSrc = "";
    vm.formSrc = "";
    vm.missingSeconds = 0;
    vm.isLoading = true;
    vm.isSuccessful = false;

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
        if (vm.step != maxSteps){
            vm.step++;
            vm.imageSrc = images[pointer].imageSrc;
            console.log(vm.imageSrc);
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

    function imageViewer () {
        $interval(function () {
            questionnaire();
        }, 500, 1);
    }

    function questionnaire () {
        vm.formSrc = $sce.trustAsResourceUrl("https://docs.google.com/forms/d/" + images[pointer].formItId + "/viewform?embedded=true");
        pointer++;
        vm.step++;
    }
}
