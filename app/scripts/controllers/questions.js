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
    "$routeParams",
    "$location"
];

function QuestionsCtrl (
    $sce,
    ImagesSrv,
    $routeParams,
    $location
) {
    var vm = this;

    // VARIABLES INITIALIZATION
    var beautifulness = $routeParams.beautifulness;
    var mode = $routeParams.mode;
    var questionnaireUrls = {
        ugly: {
            action: "1GSWx-n9f8QIfusl1Yj3nyAe80VJQ5zWcJtz0Y7lZTXU",
            control: "1nZpLTBYmActSxhwRfLXVCmPwqkCwb80neC8S-EFim4g",
            goal: "1v6Wp-pPOlDxPuMrFWDXj8lvr_d81wk7sJLI2ma3Nx5U"
        },
        beauty:{
            action: "1ZGHo48F5GOyw8lRt0h9KcyWHirqsgSw6_h5DQ_GOiTw",
            control: "1aR8CMk6PZ-9E1FaHrjqKaDsv1tv9KZPLZ4tpuD-h8B0",
            goal: "1O3B830JL4muuVKFWr9iQdPWREZKYGGGe8F3iskL_OZA"
        }
    }

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
        var form;
        if (beautifulness == "b") {
            form = questionnaireUrls.beauty;
        } else {
            form = questionnaireUrls.ugly;
        }
        if (mode == "a") {
            form = form.action;
        }
        if (mode == "c") {
            form = form.control;
        }
        if (mode == "g") {
            form = form.goal;
        }
        vm.formSrc = $sce.trustAsResourceUrl(
            "https://docs.google.com/forms/d/"
            + form
            + "/viewform?embedded=true"
        );
    }
}
