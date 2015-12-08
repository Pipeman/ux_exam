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
            formPhase1Id: "",
            formPhase2Id: ""
        },
    */
    var beautifulImages = [
        {
            imageSrc: "images/beautiful/hunimed.jpg",
            formPhase1Id: "1lriLnuEvXg2QwAWeJYTbg8AXJUZ0YG670w4dJ_g5U20",
            formPhase2Id: "14nB_QgI1GCsWaPih3v2Iqq-J3lcYMlzWouOilLjtn28"
        },
        {
            imageSrc: "images/beautiful/imtlucca.jpg",
            formPhase1Id: "1hvyIIQmRjySISlmVDjfcJPeqf1CqJIc9SpXXFF7uAsc",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/iusspavia.jpg",
            formPhase1Id: "1ZY_9CngRsPsn9QsCwcxGdsT7lfTsEeQQFK0YFGpc9NY",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/luiss.jpg",
            formPhase1Id: "1wX5vGkDCAzRQgTgkfohw5jiD_VpqpIFnJNaZRMyhDFU",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/lum.jpg",
            formPhase1Id: "1Pj-JhQ3pQCXVVc6Kj91WWzMrNDxcKtxLHP-zCsQEs_o",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/lumsa.jpg",
            formPhase1Id: "16fTucg3EU6azjCP4t_buGxHTE5Yhjp8OFOy9bf_kqoI",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/poliba.jpg",
            formPhase1Id: "1kzdai3Bj-oTTqhdSKriyXiE90ZEj8D-j_lngbQsRjoc",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/polimi.jpg",
            formPhase1Id: "1Hr_eVRCuaT4FoqXmnGWIN_fqXMFdoHNz3Zb525H5_u4",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/polito.jpg",
            formPhase1Id: "1id55UFNwz25_YRCgWeDIYt3Itp64XS8zbV2KhFh8n10",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/santannapisa.jpg",
            formPhase1Id: "1gi-CWIuk-JlqJBs2HPnewLfcMCuvGzQjV9aHsfEiQ-0",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/sns.jpg",
            formPhase1Id: "1btMptiz6rqZnSIfVzMLzKZsaa0v6u_gvbN8hRxPkU54",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unibg.jpg",
            formPhase1Id: "1CxB3hEQ4gF_K_gCRhaLLC2RHYDv-yWDthboxDVjXi-c",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unibo.jpg",
            formPhase1Id: "1kIP8PasXoSKrezTI99L3TmiDXJ23ZcX1YUqAqwd6s24",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unibocconi.jpg",
            formPhase1Id: "1zOeNmADUXjc_OVjM-c1sWWxdRMwccctCCyFaFj0pbNk",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unibs.jpg",
            formPhase1Id: "1vw3KtMbGGuXnVDp9qkbT4nRc1bHTkcCnuAYJBYI0JtU",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unicampus.jpg",
            formPhase1Id: "1ewj84vBbcImoLX12QLn6KmZstiCs29OgD_uOC_Vizh8",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unicas.jpg",
            formPhase1Id: "1JRNVoQVKD5zQ2r4CehJSY40L1L_uFougxJKY8BpaByg",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unich.jpg",
            formPhase1Id: "1RIQnOKvll7fCWGlziAf-F5ZD2PS_MV9WzB4eQijmF54",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unicz.jpg",
            formPhase1Id: "1Mx32oHY1bACPqS905On3F2TFs2xI9HiM8nEnTh3OLIg",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unife.jpg",
            formPhase1Id: "17Ikzs_0ctD0Y3yBbPexCwp0Ma3bcVMTP4ZGFzW5OBUI",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unifi.jpg",
            formPhase1Id: "1pFxBKtweZGtg7AUUcg7DpembM3grbGNHUKspgtsPi2Y",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unige.jpg",
            formPhase1Id: "1mlHhhXeE50cuQCntrBfJ4ZqDLQaUJgolcCSiA0yoCUk",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unilink.jpg",
            formPhase1Id: "1Sh2251bIfFXCf0tEf3vb-jleLpmuIKbjDFnB1BVtATQ",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unimc.jpg",
            formPhase1Id: "1JNE5mmNyxgRu36Eq1omc4sF3fAk6k2TC9rpuZOSW_14",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unime.jpg",
            formPhase1Id: "15y3t1r_jMPR0BifWFRcImcK8waB9x5C0MUazIsnb3SE",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unimol.jpg",
            formPhase1Id: "1npBJaEbx-Gj0P79K-BTvpbBeM0U79tMLyXIm3dKK1gs",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unina.jpg",
            formPhase1Id: "1yEfi01KmRcWKKweJDfjfGtVV921SbLGKORTEkjkii_Y",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unina2.jpg",
            formPhase1Id: "1ItxT6t6eTew9BU5npzfepkmQwkWZa2akMYtPnYbIz30",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unint.jpg",
            formPhase1Id: "1Z0VkeK1IwCY_B1qIr6mEnpd_YjeZPkgWOIcVzMhYc_g",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipa.jpg",
            formPhase1Id: "1HMQUQGfiLZU3_PBzr_iv8Za2Bxxc86GRLgVRU_dYomY",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/uniparthenope.jpg",
            formPhase1Id: "1HMQUQGfiLZU3_PBzr_iv8Za2Bxxc86GRLgVRU_dYomY",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipd.jpg",
            formPhase1Id: "1VngZGCOc-8DJkCaCSvL_Gn8PkwfsqtV2ddZ0fmlbbUA",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipg.jpg",
            formPhase1Id: "147PsPi9hfqmBAIfqBPUck1G2MMsfK4r3WTN4ejYiZ1A",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipi.jpg",
            formPhase1Id: "1naglzQb1zTz8bkGg1EdoeAKNIHHkT9_T57HAZWtwlg8",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipo.jpg",
            formPhase1Id: "13iHhc8NZfFpYM3Iu-vRXXC4m6yby7jz0A2btrAe5Sz8",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipr.jpg",
            formPhase1Id: "1GRAPMefTA7BHTYIjJfYs3XEjXspB60s3gfB7XsP9LAo",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unipv.jpg",
            formPhase1Id: "1Bw0GS4ZrK-VlWzw7hzj62q_48WgREnzY8wv_lb9TIDU",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/uniroma3.jpg",
            formPhase1Id: "1Bw0GS4ZrK-VlWzw7hzj62q_48WgREnzY8wv_lb9TIDU",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/uniroma4.jpg",
            formPhase1Id: "1WgWHxPEarNT2DXzpEXXhRr9ze6xWRZ2v2zUt9V3n-j0",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unisa.jpg",
            formPhase1Id: "1nFxtjld4DGqSza8cS9du0BwW98bh2dE9H-2sHv7Fm84",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unisg.jpg",
            formPhase1Id: "15fCMBmg2sXd18KAd0NIYcYZ1SYjvcnEBayN1wjgLric",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unisi.jpg",
            formPhase1Id: "199a4UfzL85V4Nupt7jBTRuSK7vqcpGjwT5ftSyt6FVQ",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unisr.jpg",
            formPhase1Id: "1AxPMD47bfOyjSZdmU_t9MjHLI4jT9wUxiFi_UeOXVQc",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unisstral.jpg",
            formPhase1Id: "1o-PU7k4dM8uxylAfxVzZwGuvvFLT5Oz6otHPO6dMl68",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unistrapg.jpg",
            formPhase1Id: "14XXyeeZJgAXvbo_c-DzTGMbXaYf297BU568XSsSn4JA",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unistrasi.jpg",
            formPhase1Id: "1T9TBhobTFhBdF8iloy9TUAdvQrA9YqHlhVU-EkTxWjQ",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unite.jpg",
            formPhase1Id: "1xK7IsD3EgpLmyia46hNgQn4RVuzs4qu_5Tiy2taU6Bo",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unitn.jpg",
            formPhase1Id: "1kqXp1Tcyof40B8V0NsYDitYt0kY4oRq8kX4X2WBPJMI",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/unito.jpg",
            formPhase1Id: "18JY0QLqU1WLCoPZ5GT_8MBKHQmgUjoOI7RsjUxSEzDo",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/uniud.jpg",
            formPhase1Id: "1mZk-REEaIIQOfdPene_lmyedPBRs8OEq-yUawi3VpVI",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/univpm.jpg",
            formPhase1Id: "1AVctIyYtSViDHeOLVgWHCj6vBVwiasaS4Lbu3M3wcq8",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/beautiful/univr.jpg",
            formPhase1Id: "1-nz8FDYie--aLx7tg23ciX9Bp5HvllN3eh7HSUzI9nI",
            formPhase2Id: ""
        },
    ];

    var uglyImages = [
        {
            imageSrc: "images/ugly/iuav.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/iulm.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/liuc.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/sumitalia.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uniba.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unibas.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unica.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unical.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unicam.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unicatt.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unict.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unifg.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unimi.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unimib.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unimore.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uninsubria.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unior.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unirc.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uniroma1.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uniroma2.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unisalento.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unisannio.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unisob.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uniss.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/units.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unitus.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/uniurb.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/univaq.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/unive.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
        {
            imageSrc: "images/ugly/universitaeuropeadiroma.jpg",
            formPhase1Id: "",
            formPhase2Id: ""
        },
    ];

    service.beautifulImages = beautifulImages;
    service.uglyImages = uglyImages;

    return service;
}
