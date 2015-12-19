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

    service.getImages = getImages;

    /**
        {
            imageUrl: "",
            formPhase1ActionId: "",
            formPhase2ActionId: ""
        },
    */
    var beautifulImages = [
        {
            imageSrc: "images/beautiful/hunimed.jpg",
            formPhase1ActionId: "",
            formPhase1ActionId: "",
            formPhase1ActionId: "",
            formPhase1GoalId: "1aBJNCKtkCYdDqUwFJcLcgBRgSIwmkjjO4C5I5doOYpI",
            formPhase2ActionId: "1qTCFvizN75hvg0k0ZftfjbHrS3mb2it7bAx4FMRDNBM"
        },
        {
            imageSrc: "images/beautiful/imtlucca.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1hvyIIQmRjySISlmVDjfcJPeqf1CqJIc9SpXXFF7uAsc",
            formPhase2ActionId: "142Vm6yKu3DdrmivhW9MTSK64ZayReUolAM7_ZkAl9vU"
        },
        {
            imageSrc: "images/beautiful/luiss.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1wX5vGkDCAzRQgTgkfohw5jiD_VpqpIFnJNaZRMyhDFU",
            formPhase2ActionId: "1MsEcjHhKqv3p9YJF_lX-bNa1sWNANyvDFLgsPXz3nAg"
        },
        {
            imageSrc: "images/beautiful/lum.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1Pj-JhQ3pQCXVVc6Kj91WWzMrNDxcKtxLHP-zCsQEs_o",
            formPhase2ActionId: "1IkaoK5s8hDOEFd85xcxkc3xmABjywkSi2571dElEvD8"
        },
        {
            imageSrc: "images/beautiful/poliba.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1kzdai3Bj-oTTqhdSKriyXiE90ZEj8D-j_lngbQsRjoc",
            formPhase2ActionId: "1AD6TiEDMRqTaEmxnCxM09AU6IMEhAwfYFdL1UpNE1m0"
        },
        {
            imageSrc: "images/beautiful/santannapisa.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1gi-CWIuk-JlqJBs2HPnewLfcMCuvGzQjV9aHsfEiQ-0",
            formPhase2ActionId: "1gnDLbMj3x9mxBYnWdII2hnCMLeDTjTnm5Ew3Qz8MUGg"
        },
        {
            imageSrc: "images/beautiful/unibg.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1CxB3hEQ4gF_K_gCRhaLLC2RHYDv-yWDthboxDVjXi-c",
            formPhase2ActionId: "1ZGcICfMaIGvu96jfVB7mX5NLmrwcN2g-EAZs34ek5JY"
        },
        {
            imageSrc: "images/beautiful/unibo.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1kIP8PasXoSKrezTI99L3TmiDXJ23ZcX1YUqAqwd6s24",
            formPhase2ActionId: "1V71vMXGvivAc9XHfH-AqNfRiQhXGC2yfaooCfC1yAek"
        },
        {
            imageSrc: "images/beautiful/unibocconi.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1zOeNmADUXjc_OVjM-c1sWWxdRMwccctCCyFaFj0pbNk",
            formPhase2ActionId: "1t2AlZuYAn3NG07E5FKuQesWOgBqmH3qSbmIYrLDW5ck"
        },
        {
            imageSrc: "images/beautiful/unicampus.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1ewj84vBbcImoLX12QLn6KmZstiCs29OgD_uOC_Vizh8",
            formPhase2ActionId: "1aktTdy76qEhKMKEwCq3zszHMehgEUsgiBAYw1B0KEiU"
        },
        {
            imageSrc: "images/beautiful/unifi.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1pFxBKtweZGtg7AUUcg7DpembM3grbGNHUKspgtsPi2Y",
            formPhase2ActionId: "1jAsup-aXIFUuFpmEk83o9PHYmidDIB8G5quhQr7QUbo"
        },
        {
            imageSrc: "images/beautiful/unimol.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1npBJaEbx-Gj0P79K-BTvpbBeM0U79tMLyXIm3dKK1gs",
            formPhase2ActionId: "1UDnnJ14iH-wcRpcYlVDSXXWjNTWv-YW_dRZ1cevfd6Q"
        },
        {
            imageSrc: "images/beautiful/unina.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1yEfi01KmRcWKKweJDfjfGtVV921SbLGKORTEkjkii_Y",
            formPhase2ActionId: "1sAMt778pza9oxr-izVvPCJaKJ48DpyGoQa9AqGCYPd0"
        },
        {
            imageSrc: "images/beautiful/unint.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1Z0VkeK1IwCY_B1qIr6mEnpd_YjeZPkgWOIcVzMhYc_g",
            formPhase2ActionId: "1K3NDkllYTWEpXTO4az-Yr-9RsJyS7vdv_I6bPKhXrz0"
        },
        {
            imageSrc: "images/beautiful/unipd.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1VngZGCOc-8DJkCaCSvL_Gn8PkwfsqtV2ddZ0fmlbbUA",
            formPhase2ActionId: "1o99S92HwZ9jwxWG0KT_F9OImrebDHIJBTsu5wCevsVM"
        },
        {
            imageSrc: "images/beautiful/unipi.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1naglzQb1zTz8bkGg1EdoeAKNIHHkT9_T57HAZWtwlg8",
            formPhase2ActionId: "14W2q7g3pDx7SNWvJmblJxRn4aapGhoqBopmQ-u2sjf0"
        },
        {
            imageSrc: "images/beautiful/unipr.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1GRAPMefTA7BHTYIjJfYs3XEjXspB60s3gfB7XsP9LAo",
            formPhase2ActionId: "1JpSkuemMM-BcutSLTRw4_TqzYzL-V3uBAE4RYcszK2M"
        },
        {
            imageSrc: "images/beautiful/unisa.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1nFxtjld4DGqSza8cS9du0BwW98bh2dE9H-2sHv7Fm84",
            formPhase2ActionId: "1E6E2QuAixePJclzj17Xyoy89WCU_u1VRI-LWxvtHJzA"
        },
        {
            imageSrc: "images/beautiful/unisg.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "15fCMBmg2sXd18KAd0NIYcYZ1SYjvcnEBayN1wjgLric",
            formPhase2ActionId: "1BStVS_N1pKOZJJt0g9XsU5c16GNTaWttj8MNKrcRbbc"
        },
        {
            imageSrc: "images/beautiful/unisi.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "199a4UfzL85V4Nupt7jBTRuSK7vqcpGjwT5ftSyt6FVQ",
            formPhase2ActionId: "112dpNzPsF7us7o-4KA70QJRvegGNvaeL7qvUWt9hBc4"
        },
        {
            imageSrc: "images/beautiful/unistrapg.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "14XXyeeZJgAXvbo_c-DzTGMbXaYf297BU568XSsSn4JA",
            formPhase2ActionId: "1mG_ofNvFA_sSZP8roZ2DTTxF1lhLpW5LKV5Ff7APbrE"
        },
        {
            imageSrc: "images/beautiful/unite.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1xK7IsD3EgpLmyia46hNgQn4RVuzs4qu_5Tiy2taU6Bo",
            formPhase2ActionId: "1aqEiN8SkHvdRzdIS3ZlqDXcKpWhNdxmKPUMsueyL5RQ"
        },
        {
            imageSrc: "images/beautiful/unitn.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1kqXp1Tcyof40B8V0NsYDitYt0kY4oRq8kX4X2WBPJMI",
            formPhase2ActionId: "1YIMKrecyw33SLVkkcqR_cFyOu-vTHOjCgesvK-GmWas"
        },
        {
            imageSrc: "images/beautiful/uniud.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1mZk-REEaIIQOfdPene_lmyedPBRs8OEq-yUawi3VpVI",
            formPhase2ActionId: "17zZtGjM1zPKZRiAmeIsN1_aHnWQ_eofkaLfbWZsU9Xk"
        },
        {
            imageSrc: "images/beautiful/univpm.jpg",
            formPhase1ActionId: "",
            formPhase1GoalId: "1AVctIyYtSViDHeOLVgWHCj6vBVwiasaS4Lbu3M3wcq8",
            formPhase2ActionId: "1vECbype5PyfdTt7xc_mBwS4eTxSxooluYwi77qJ3ZEA"
        },
    ];

    var uglyImages = [
        {
            imageSrc: "images/ugly/iuav.jpg",
            formPhase1ActionId: "1ch0oAEBmylSvMtyJ7FVfWklP9pBaytr5xUZTqhqivv0",
            formPhase1GoalId: "1wlVVXDcQf87WZTTrZHHRe-MWLbOfIa9HlySwLRuG8JY",
            formPhase2ActionId: "",
            formPhase2ActionId: "1_WQx9w6UhFeQS0GazV3nkl0CGq62Cc3_FFa8MxgwQl8"
        },
        {
            imageSrc: "images/ugly/liuc.jpg",
            formPhase1ActionId: "1Lnwa9FlVb29C5kinnTLIisQFv3ShCrzTvKgE3FyI6Y0",
            formPhase1GoalId: "12lwOz-b6W_yoKYMQCMwDgjlMMQhyrRr7LoZwfaeC32A",
            formPhase2ActionId: "",
            formPhase2ActionId: "11YmgI1JO2EfxQq4_jCHjRJ-HWvJ65dZlG-kWrTTAhgo"
        },
        {
            imageSrc: "images/ugly/sumitalia.jpg",
            formPhase1ActionId: "1XfpYK7vxv_DYRPGgZtShjr4m0aUxlVKH6K6_i6CyIQI",
            formPhase1GoalId: "1zsxJKAIWY3YxtK3shz0HxhsboLB2oHrb4HSA2aYr3uI",
            formPhase2ActionId: "",
            formPhase2ActionId: "1aQWqatd9XxABRUrWjb94tJZ6ayP_hsri_T9njI_51kI"
        },
        {
            imageSrc: "images/ugly/uniba.jpg",
            formPhase1ActionId: "1H2rsPnZuR5sXiJ6g0AQojrTLRBai2nnhvrOIBkiZ2-I",
            formPhase1GoalId: "1dfsI1JBOVAERU_dD_RLwaoL7KoTXO3oHJirb5pGhhDk",
            formPhase2ActionId: "",
            formPhase2ActionId: "1gXPFLoeUKaX2yayo8P2zCg4ARjMVi6AxBcQlqAL7u6o"
        },
        {
            imageSrc: "images/ugly/unibas.jpg",
            formPhase1ActionId: "1v_quAai8htYBW-PFVYP0o2Q-j2khkAk2pnYp9R_lld0",
            formPhase1GoalId: "1w8YGzjNqkqZtHe5mG_0KbS5Ko2u4yCFrIt696JySlKg",
            formPhase2ActionId: "",
            formPhase2ActionId: "1U9LM0HArKZY-NeGz0UslXNKnx4H8N_CvVUkeEMOT88Y"
        },
        {
            imageSrc: "images/ugly/unica.jpg",
            formPhase1ActionId: "1Sv1VxBy4w9XoKe1JzShQXsKd_J61eEHxx9Q0IsV4y70",
            formPhase1GoalId: "1BVhFL8c30uwj1Z_14Mpe4n-M_xQ2H4XuHN9_87YUiec",
            formPhase2ActionId: "",
            formPhase2ActionId: "1YVlMp8zCvrk_pqBYQCDMrmBdH8tF2tMAZ8XAe6eu2TI"
        },
        {
            imageSrc: "images/ugly/unical.jpg",
            formPhase1ActionId: "1krTOICGqpH2arylIDLEzeTcqiYL9dFD6LmN4pt0f1Iw",
            formPhase1GoalId: "1K8DNBiE0hJQO8I23ivsVcdbeI-u396Hn5MN1Vyu6Cxo",
            formPhase2ActionId: "",
            formPhase2ActionId: "1FK8ICJH1m9EEv5CPUa8_aavSoLr4rizQPGqv4bdCFgQ"
        },
        {
            imageSrc: "images/ugly/unicam.jpg",
            formPhase1ActionId: "1NbVgEFOzH91jj8_TxrmzMm8qCHmDEDQWr08-51eFeOs",
            formPhase1GoalId: "1o0UK5HHPVpK6sGi6tac5TBe-SL4xCGq6ims9e-2xhT0",
            formPhase2ActionId: "",
            formPhase2ActionId: "1_QvbjtE3lEX1AilSJVYrezUMn1JCoZ1lT5V_MYVDkBM"
        },
        {
            imageSrc: "images/ugly/unict.jpg",
            formPhase1ActionId: "1Ad7ZIYfz5RZl3nkQnGfjEZMjDXseOUpJ7Zw0U3bkssI",
            formPhase1GoalId: "10AL6jNN_tQBWeChSrLLqz52nCFINQCg0dpLiY98pgXs",
            formPhase2ActionId: "",
            formPhase2ActionId: "1dK_3E8e4X6MP0LZ4Xyv7VoeSGsKIp9k0OZD7IWJVqkQ"
        },
        {
            imageSrc: "images/ugly/unifg.jpg",
            formPhase1ActionId: "1phx0NLlFbNdkboELvyZr9TjEv2Mrng8pxgp5t11VWMw",
            formPhase1GoalId: "1i2-WI-aPFfoycTzMSVvvQeQ651QO2Rqfx8yhUa9Iz50",
            formPhase2ActionId: "",
            formPhase2ActionId: "1-Z0S3UoWQkrcC0Eeqke74F7Z4bewuyguKzik-hZBkFg"
        },
        {
            imageSrc: "images/ugly/unimi.jpg",
            formPhase1ActionId: "1gxFWrDWglpCp8zbGP_uDlecC6rAQxSahHDHU9BRDHow",
            formPhase1GoalId: "1NLnnvJnBxzpumvTGYfDEqU9vY53P77ZN94HSWeXLibM",
            formPhase2ActionId: "",
            formPhase2ActionId: "1tYrRPNFXaiyBUtyd2ecMn_l6nsH_u6jQgCnXSGkteVU"
        },
        {
            imageSrc: "images/ugly/unimib.jpg",
            formPhase1ActionId: "1-qhIHAFR5sSvQ-33Z--ZXwEwwXjrGhGMIMjrf7bgu_s",
            formPhase1GoalId: "1C1ss1CBjFh8qJ0ydMINya7hbYn1MWlAv9L8T2OsSqEk",
            formPhase2ActionId: "",
            formPhase2ActionId: "1PAASVjPXgaFnMg75c0x1XJsW4Rl1cgwcdZI0B5crOSs"
        },
        {
            imageSrc: "images/ugly/unimore.jpg",
            formPhase1ActionId: "133E3DH4Kp2VR58z42yOTYlssClDgfB-ZU6JyeGhRjag",
            formPhase1GoalId: "1A9Z2jnKGUKVdlHyp3-Uf-ejff4pEJD4ogADBBAt_SWg",
            formPhase2ActionId: "",
            formPhase2ActionId: "16Y2WjoHfT6eTD_AEprPs_B4DtO0LMbc2gzCeEX1edcc"
        },
        {
            imageSrc: "images/ugly/uninsubria.jpg",
            formPhase1ActionId: "1XrzSa_4DNPtoa5KBJpFpoQ9m1JzEiEGud5nz5V4-f9E",
            formPhase1GoalId: "1zprr02qJcYLUK8ug0gIaF4FKlYZ8a-r_IRTRSUnyaKU",
            formPhase2ActionId: "",
            formPhase2ActionId: "1-Pi_yRej1gbSWsObyCdY6Jd6nvVmtbhrF93UuZ3yJsE"
        },
        {
            imageSrc: "images/ugly/unior.jpg",
            formPhase1ActionId: "1N7a3NttsUmdZDyQgaxL_unqHjwJNfKFgMSUzNu8GTLY",
            formPhase1GoalId: "1bKhTuDMeMsrSmjX_h1vsic0zOAcdL0mUFqt56zhVjrg",
            formPhase2ActionId: "",
            formPhase2ActionId: "1e6mnXOh0USKOf-GQhBTaMKTq14Wph5y07DBthOslQOc"
        },
        {
            imageSrc: "images/ugly/unirc.jpg",
            formPhase1ActionId: "1OgOION_kUUxXaUBVRjPcMll0ntKQPt7YYE3Ure_mhQA",
            formPhase1GoalId: "12w5jZ--Q2lE_ZDqOqu1Mlf2BZ_b5VAdz1_lYDJnhNdQ",
            formPhase2ActionId: "",
            formPhase2ActionId: "1Cfrgity3VbjMicTu2JRVyqDE4wP4Pe85b7iNy0d1gJk"
        },
        {
            imageSrc: "images/ugly/uniroma1.jpg",
            formPhase1ActionId: "1KglR5vmIvTOoCujiPXP-gp8sn72oA_C_T9AtASywGzs",
            formPhase1GoalId: "1LoIiC1IRDcs_HOT2wnobDLWKiNlMrVYHsXdbSkEMMC0",
            formPhase2ActionId: "",
            formPhase2ActionId: "1Ngh29Ws1u7UtzBrfIvEPehkO1jddRXJkl_5E5QfbdZU"
        },
        {
            imageSrc: "images/ugly/uniroma2.jpg",
            formPhase1ActionId: "1RRAsDPI-tF1kYPbJKzlMlK9JnSjfjznPPRxJLsgaH5E",
            formPhase1GoalId: "1W40ZtFnRmvR-Xoi_5-vxcQd7hiS8h8ew6UOQMqq6PiI",
            formPhase2ActionId: "",
            formPhase2ActionId: "1d_eM5lAcNTVllRj5R8yQFzUGwpvtd_G_KS7H8UsLtFk"
        },
        {
            imageSrc: "images/ugly/unisalento.jpg",
            formPhase1ActionId: "1cgsgLVnuRMf7ro5KedMoLrtGMkcRIWfOW2FiRnCkzZs",
            formPhase1GoalId: "1eHjitXIq775D4JzCgwNGqOE9A12HqO0KTYp18_tU-JY",
            formPhase2ActionId: "",
            formPhase2ActionId: "1TDYjOlyxP2eYtUwup9UwFONDO_XTYXk54UsWzdMSxm0"
        },
        {
            imageSrc: "images/ugly/unisannio.jpg",
            formPhase1ActionId: "1Fz2zoXiaFfhRgOjn8gcTX2-z0EyGX8bFtWLR_1peeqA",
            formPhase1GoalId: "1L92-QwZ6sQ1m3wnGRLXLpn9HAhPyzYx29koyBE5iQyw",
            formPhase2ActionId: "",
            formPhase2ActionId: "18en6UtQVLk1bclRduAtOETB0VFNVW2a5DDybsiaFrR4"
        },
        {
            imageSrc: "images/ugly/unisob.jpg",
            formPhase1ActionId: "1sYnGzcYCVU2GLP6GAzcchnKq81Hrnf0RzrVEJ8n7J10",
            formPhase1GoalId: "1ArP12Rz0-5OgfXb_MmIVijLibYU7XyVp8BTUh0S2JJs",
            formPhase2ActionId: "",
            formPhase2ActionId: "1sAuqIt0AbuM0P4QYo5tqfy4ksUYoacKB4fRTtXRTvSE"
        },
        {
            imageSrc: "images/ugly/uniss.jpg",
            formPhase1ActionId: "1bKcNXJfnTx5_VKiWSm81QYklU0G8kc9pq7rwNqaPVyw",
            formPhase1GoalId: "18CRK6uaKltuWw3xjF3vhmJFDnlCPlMLS2ljAfoxyzxM",
            formPhase2ActionId: "",
            formPhase2ActionId: "1qgIxa_ME7ZPFfjIffMi5uFRiy6Npqog376keAuYVDrM"
        },
        {
            imageSrc: "images/ugly/units.jpg",
            formPhase1ActionId: "1rZhiYQ7j995_RgPXoNYj_wjc-9ufjjHHR-eLn2Hvvv8",
            formPhase1GoalId: "1w2DZBoa9f6Ds5QKvS7OEF9UQx7nufWlbh9P6yWvBVWU",
            formPhase2ActionId: "",
            formPhase2ActionId: "1k-_cRR75swr4fQ2VdvXE8d6dzK68TuHLJwKgvg7ZzYo"
        },
        {
            imageSrc: "images/ugly/unitus.jpg",
            formPhase1ActionId: "1p_1KjcJgHkYfYwCJf1DRz9udD8jdOIn6NL905qqMGns",
            formPhase1GoalId: "1GSb0Y5o6xeNVfjGvAP1oNDxK9W6aBBjC7P1CPrGxUo4",
            formPhase2ActionId: "",
            formPhase2ActionId: "1bcFER848pGdYeJdjUgyFt2qth2d8cmVffZyV841Mevk"
        },
        {
            imageSrc: "images/ugly/univaq.jpg",
            formPhase1ActionId: "18Iv285ObOI50t6J3h2XJIvjesbyihn1m6OKOICIfsm4",
            formPhase1GoalId: "1M6VxHaZ8oCv1NhoIx8Kz2lcO0WrQAgz8pUSWiWE_8sg",
            formPhase2ActionId: "",
            formPhase2ActionId: "1gLDZcfr95w1GoV7VeKwDKfVSROjcWDb2Jt25wPRropg"
        },
    ];

    var testImages = [
        {
            imageSrc: "images/test_images/iulm.jpg",
            formPhase1ActionId: "122uWT0zcpWTqYHIDPpwCFa_R7ucJ0KSHc76uOwf1jC8",
            formPhase2ActionId: "1Yo0qMqTeg4FPXUbdoOsRUeaI-WNkpv1JZ1yYod0mMa8"
        },
        {
            imageSrc: "images/test_images/iusspavia.jpg",
            formPhase1ActionId: "1ZY_9CngRsPsn9QsCwcxGdsT7lfTsEeQQFK0YFGpc9NY",
            formPhase2ActionId: "1JLzHQIqxQAZ6wIDgBSpMrNN8Vu42dJ8KXorVrESHAa0"
        },
        {
            imageSrc: "images/test_images/lumsa.jpg",
            formPhase1ActionId: "16fTucg3EU6azjCP4t_buGxHTE5Yhjp8OFOy9bf_kqoI",
            formPhase2ActionId: "1cxiwuxC5pXjk1pnexyS8OMK_fs9sCVADX8IrGXBkg64"
        },
        {
            imageSrc: "images/test_images/polimi.jpg",
            formPhase1ActionId: "1Hr_eVRCuaT4FoqXmnGWIN_fqXMFdoHNz3Zb525H5_u4",
            formPhase2ActionId: "1nP6gOaUl4VTuAB2r90xlsdWtNa06y1hOQdFelK8NfHk"
        },
        {
            imageSrc: "images/test_images/polito.jpg",
            formPhase1ActionId: "1id55UFNwz25_YRCgWeDIYt3Itp64XS8zbV2KhFh8n10",
            formPhase2ActionId: "1KXQ3OeEWBsdht6URhisPGErYZCmIBHY4yP7bg9FKbEU"
        },
        {
            imageSrc: "images/test_images/unibs.jpg",
            formPhase1ActionId: "1vw3KtMbGGuXnVDp9qkbT4nRc1bHTkcCnuAYJBYI0JtU",
            formPhase2ActionId: "1hUQrHzn_HuCn3IIB0_0GmQX4D4777HAbYjyyOvkgnBI"
        },
        {
            imageSrc: "images/test_images/unicatt.jpg",
            formPhase1ActionId: "1TFxZN1wLjiR94Rt7kjkRocdS6PyaH2K-j3E-VYN5He8",
            formPhase2ActionId: "1Ds_3LjdBcLLTTD_bUqVXq4-B7G5i4I_8cH-okPl89QI"
        },
        {
            imageSrc: "images/test_images/uniurb.jpg",
            formPhase1ActionId: "1z9IbNebepL6a3dm3hUoJlYcf46RAcwzWTCIhtPfa_G8",
            formPhase2ActionId: "11r6oxs4iCUAzBWjDboWF_YPenHH5r5CfJcGnJp76QSs"
        },
        {
            imageSrc: "images/test_images/unive.jpg",
            formPhase1ActionId: "1L8jmxTnlqFr1FonBtcFH7U66jInuujYrKwOuM9dquJk",
            formPhase2ActionId: "1_XfCJljrMyoQnBvQRmPhoL9zCa2ecyJa0mtdIwef33c"
        },
        {
            imageSrc: "images/test_images/universitaeuropeadiroma.jpg",
            formPhase1ActionId: "1HOnoy5gv-fLIBO-vr8mkNYf_OLknUh3I_Bfkt70exWo",
            formPhase2ActionId: "1sUuwIG69aO-1v_Cf73V6tgNt7_VsTung-Md7ZNjdVWo"
        },
    ];

    return service;

    function getImages(beautifulness) {
        if (beautifulness == "b" || beautifulness == "u") {
            return (beautifulness == "b") ? beautifulImages : uglyImages;
        }
        if (beautifulness == "t") {
            return testImages;
        }
        return false;
    }
}
