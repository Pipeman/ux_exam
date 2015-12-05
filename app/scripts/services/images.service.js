"use strict";

/**
 * @ngdoc function
 * @name uxExam.service:ImagesSrv
 * @description
 * # ImagesSrv
 * Service containing the images list
 */

angular.module("uxExam").factory("ImagesSrv", ImagesSrv);

ImagesSrv.$inject = [];

function ImagesSrv () {
    var service = {};

    /**
        {
            imageUrl: "",
            formItId: "",
            formEngId: ""
        },
    */
    var beautifulImages = [
        {
            imageSrc: "images/beautiful/hunimed.jpg",
            formItId: "1mpOajNNwOul6aVI7-AcHMFit_mNFkX_8D31iUpju_AI",
            formEngId: "14nB_QgI1GCsWaPih3v2Iqq-J3lcYMlzWouOilLjtn28"
        },
        {
            imageSrc: "images/beautiful/imtlucca.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/iusspavia.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/luiss.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/lum.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/lumsa.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/poliba.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/polimi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/polito.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/santannapisa.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/sns.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unibg.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unibo.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unibocconi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unibs.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unicampus.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unicas.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unich.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unicz.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unife.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unifi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unige.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unilink.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unimc.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unime.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unimol.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unina.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unina2.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unint.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipa.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/uniparthenope.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipd.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipg.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipo.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipr.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unipv.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/uniroma3.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/uniroma4.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unisa.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unisg.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unisi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unisr.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unisstral.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unistrapg.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unistrasi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unite.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unitn.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/unito.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/uniud.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/univpm.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/beautiful/univr.jpg",
            formItId: "",
            formEngId: ""
        },
    ];

    var uglyImages = [
        {
            imageSrc: "images/ugly/iuav.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/iulm.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/liuc.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/sumitalia.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uniba.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unibas.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unica.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unical.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unicam.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unicatt.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unict.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unifg.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unimi.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unimib.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unimore.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uninsubria.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unior.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unirc.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uniroma1.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uniroma2.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unisalento.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unisannio.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unisob.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uniss.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/units.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unitus.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/uniurb.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/univaq.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/unive.jpg",
            formItId: "",
            formEngId: ""
        },
        {
            imageSrc: "images/ugly/universitaeuropeadiroma.jpg",
            formItId: "",
            formEngId: ""
        },
    ];

    service.beautifulImages = beautifulImages;
    service.uglyImages = uglyImages;

    return service;
}
