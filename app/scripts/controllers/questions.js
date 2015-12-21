"use strict";

/**
 * @ngdoc function
 * @name uxExam.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the uxExam
 */

angular.module("uxExam").controller("QuestionsCtrl", QuestionsCtrl);

QuestionsCtrl.$inject = [
    "$sce",
    "ImagesSrv",
    "preloaderSrv",
    "$routeParams",
    "$location"
];

function QuestionsCtrl (
    $sce,
    ImagesSrv,
    preloaderSrv,
    $routeParams,
    $location
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var beautifulness = $routeParams.beautifulness;
    var images = ImagesSrv.getImages(beautifulness);

    // SCOPE VARIABLES DEFINITION
    vm.formSrc = "";
    vm.isLoading = true;
    vm.isSuccessful = true;

    // SCOPE FUNCTION DEFINITION
    vm.goToThankYouPage = goToThankYouPage;
    vm.questionnaire = questionnaire;

    questionnaire();

    return vm;

    // FUNCTION DEFINITION
    function goToThankYouPage () {
        $location.url("thanks/");
    }

    function questionnaire () {
        var form = "1v6Wp-pPOlDxPuMrFWDXj8lvr_d81wk7sJLI2ma3Nx5U";
        vm.formSrc = $sce.trustAsResourceUrl(
            "https://docs.google.com/forms/d/"
            + form
            + "/viewform?embedded=true"
        );
    }
}
