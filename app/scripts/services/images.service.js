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
            formPhase1ActionId: "1tG5aNCL98y5ZzNBw3RNNmuVbOe1g5COwa66OVLpTKn4",
            formPhase1GoalId: "1aBJNCKtkCYdDqUwFJcLcgBRgSIwmkjjO4C5I5doOYpI",
            formPhase1ControlId: "1Am0vEZDK1er8c3r1pilrYaM9KfrlYR7FTmRwseUmoug",
            formPhase2ActionId: "1qTCFvizN75hvg0k0ZftfjbHrS3mb2it7bAx4FMRDNBM",
            formPhase2GoalId: "1mWVMp7oaGAqAe7-sf0jSkHYg1FX2aYGFXefa5coNSNo",
            formPhase2ControlId: "1J7kpO55yRJIPFYRbs-GsEf1mllG91JymLc3yem38Nbg"
        },
        {
            imageSrc: "images/beautiful/imtlucca.jpg",
            formPhase1ActionId: "1w_-ra_tKG-Q8WoWNdGI42LtAGETGdSMToWyS1wq_6zk",
            formPhase1GoalId: "1hvyIIQmRjySISlmVDjfcJPeqf1CqJIc9SpXXFF7uAsc",
            formPhase1ControlId: "1K9WMDfLsFBVcL8FbxEh7ZSZmfnq0mlgC2eKPK8Kl3UM",
            formPhase2ActionId: "142Vm6yKu3DdrmivhW9MTSK64ZayReUolAM7_ZkAl9vU",
            formPhase2GoalId: "1g7X4UgHIgyUh2Nupi5G-GUerv2JO3PizoaO5DOYDoos",
            formPhase2ControlId: "1Prm7nIp9psuQONJ7FANxarRHiabwvbNvRs51uEshAAs"
        },
        {
            imageSrc: "images/beautiful/luiss.jpg",
            formPhase1ActionId: "1H5t1_-QltnHIkHTplxKsimRizkSanNWWlnFJlwEFxYc",
            formPhase1GoalId: "1wX5vGkDCAzRQgTgkfohw5jiD_VpqpIFnJNaZRMyhDFU",
            formPhase1ControlId: "17POK1_2oyMWGk7F2PvvDsMJEEWs8eWLENWimVwjbVj4",
            formPhase2ActionId: "1MsEcjHhKqv3p9YJF_lX-bNa1sWNANyvDFLgsPXz3nAg",
            formPhase2GoalId: "1M3EfKx0JCp7eGmMsQCGU_JxTifv3HM2bfFWnRi-lHfs",
            formPhase2ControlId: "1l05RjR4Y7w7xrHYs2qW71lgo7vvWChszWaEjP-tKPjc"
        },
        {
            imageSrc: "images/beautiful/lum.jpg",
            formPhase1ActionId: "1UUWKT4VdjN-K2YVKtQbpo9NNVvX4oBgA-ARkxY91BNY",
            formPhase1GoalId: "1Pj-JhQ3pQCXVVc6Kj91WWzMrNDxcKtxLHP-zCsQEs_o",
            formPhase1ControlId: "1x2ZCnlwBLUrmy3njULVKP_SjVZOGdSVgg8fnkKbIaPc",
            formPhase2ActionId: "1IkaoK5s8hDOEFd85xcxkc3xmABjywkSi2571dElEvD8",
            formPhase2GoalId: "1s1IvtAV5DnPj3KSyhMBdfmlxhS4EihrRg0JR5sAK7vA",
            formPhase2ControlId: "1-wRcDDgWRmhjQMEgKvkq-bGsVG-X0JCVY3OWVPDEEYM"
        },
        {
            imageSrc: "images/beautiful/poliba.jpg",
            formPhase1ActionId: "19KfPv24hmS4ZPdymXm32vstz39mATK84C8bYxG7zEeA",
            formPhase1GoalId: "1kzdai3Bj-oTTqhdSKriyXiE90ZEj8D-j_lngbQsRjoc",
            formPhase1ControlId: "1u9gKs59JqVoZDWwBVUConS1Ud4CucbzT2WdK6ULVr1k",
            formPhase2ActionId: "1AD6TiEDMRqTaEmxnCxM09AU6IMEhAwfYFdL1UpNE1m0",
            formPhase2GoalId: "1b5rnmAAD8b3BH2M-KAuBPfvWT1PPRvI9BniYPpfTNYI",
            formPhase2ControlId: "1YY9Wa9WvnpqJVcqcoQVoEKz7bOZsL7ZrJMrYvNkp-nI"
        },
        {
            imageSrc: "images/beautiful/santannapisa.jpg",
            formPhase1ActionId: "1qMMFRMle8zZXqEdQ938sXz8XVRwTZ3q21KF4FvujNuY",
            formPhase1GoalId: "1gi-CWIuk-JlqJBs2HPnewLfcMCuvGzQjV9aHsfEiQ-0",
            formPhase1ControlId: "1yahCu5UNOA6rhb0rlIwTnQf3jq_Mkz_FR5qCR6fQULo",
            formPhase2ActionId: "1gnDLbMj3x9mxBYnWdII2hnCMLeDTjTnm5Ew3Qz8MUGg",
            formPhase2GoalId: "1-vHMX-hAkWJw7HUSY1lp3Qh6u2wd4G7oZquv9UoR-OQ",
            formPhase2ControlId: "1zYmGgDLuPMPHT-J0adWQ9oXggEJSXGvYZGOaAft2sSo"
        },
        {
            imageSrc: "images/beautiful/unibg.jpg",
            formPhase1ActionId: "1L4tBSSNJKIFjngymAxGNj0Xkd0bUPi8kRmo_NO2wuUI",
            formPhase1GoalId: "1CxB3hEQ4gF_K_gCRhaLLC2RHYDv-yWDthboxDVjXi-c",
            formPhase1ControlId: "1QGo8Nq2hSRTh7AtDgaaTg7TSWM2QsbRe447LzFFFKrA",
            formPhase2ActionId: "1ZGcICfMaIGvu96jfVB7mX5NLmrwcN2g-EAZs34ek5JY",
            formPhase2GoalId: "1FH9ZS62_Ba8YaYFf8tB-LfUxoPUtHtRervu8rQwK5qQ",
            formPhase2ControlId: "1wsVVV2lJCC38a75_7Ua8zSQ2QtlIiX2ERwA-Q-Eib9U"
        },
        {
            imageSrc: "images/beautiful/unibo.jpg",
            formPhase1ActionId: "1dK16_VAtI81C01ee8UT4M7y56AP4cow61X5ip807kNM",
            formPhase1GoalId: "1kIP8PasXoSKrezTI99L3TmiDXJ23ZcX1YUqAqwd6s24",
            formPhase1ControlId: "1LOwKrorXnA6KI28vKy2qyQALQwbMYGQgM7JZq0anm-U",
            formPhase2ActionId: "1V71vMXGvivAc9XHfH-AqNfRiQhXGC2yfaooCfC1yAek",
            formPhase2GoalId: "1ggAdGuZSJSjqIegAlSVqKpDwKcDPL7UXycnJuGOVUQo",
            formPhase2ControlId: "1wNAAQUUtA-DkZn0T6Tg3qvSrk-vZXUA8gfbgUh1xGhk"
        },
        {
            imageSrc: "images/beautiful/unibocconi.jpg",
            formPhase1ActionId: "1SA2uq_gS8Qh6QvEHQnsSwKcJBf1HJDlZtySKG0WSRRU",
            formPhase1GoalId: "1zOeNmADUXjc_OVjM-c1sWWxdRMwccctCCyFaFj0pbNk",
            formPhase1ControlId: "11wLcGHh2MaaFlKt-Tej3RbMSTlBGSnDDSgiQJSow13k",
            formPhase2ActionId: "1t2AlZuYAn3NG07E5FKuQesWOgBqmH3qSbmIYrLDW5ck",
            formPhase2GoalId: "1nkCLL2To1S20wXhF81AdRStncrBi5Whv80DlK_x0dhU",
            formPhase2ControlId: "1OnuXSwIQf5A7Jxg2T4z_Te_LkwZgbFyZ4EtFMJS-WZ8"
        },
        {
            imageSrc: "images/beautiful/unicampus.jpg",
            formPhase1ActionId: "1YeKVfBTVVexULMMQqLNbJ-0xGYuVoDoPrfdNPc1rwSg",
            formPhase1GoalId: "1ewj84vBbcImoLX12QLn6KmZstiCs29OgD_uOC_Vizh8",
            formPhase1ControlId: "1pDgmq0miVtgZBM4LoVV5Tv0RkndLA1QD7qnZjVJ4rLA",
            formPhase2ActionId: "1aktTdy76qEhKMKEwCq3zszHMehgEUsgiBAYw1B0KEiU",
            formPhase2GoalId: "1R8vGRGRGsR1onbh3U5oVL3hXdUcFXEMp6kQ27T70aHQ",
            formPhase2ControlId: "1R8cGmPw-oQQXJarqqBAMX7ox5ws4ejudR55unhZVQco"
        },
        {
            imageSrc: "images/beautiful/unifi.jpg",
            formPhase1ActionId: "1WhhOLbfsqxr16zEBdH6mca2H_KCLbxB07BrXcrVkS1k",
            formPhase1GoalId: "1pFxBKtweZGtg7AUUcg7DpembM3grbGNHUKspgtsPi2Y",
            formPhase1ControlId: "115BZCZz0E9aoF8IsU8dvLFzcNXug5VC1FKXJ1SYg9vI",
            formPhase2ActionId: "1jAsup-aXIFUuFpmEk83o9PHYmidDIB8G5quhQr7QUbo",
            formPhase2GoalId: "1pYmt8RYNfY-w4exMjQeinTC9KKAIJlvaLNraVIvVoDA",
            formPhase2ControlId: "1mmczNBc9o0IGYluSG1WvN3VmvbiBzTXJQ2YTuHnthSU"
        },
        {
            imageSrc: "images/beautiful/unimol.jpg",
            formPhase1ActionId: "1cAlLz08nHYvG1kZih9dk2kMXtJoOYakn0Ryws728DhY",
            formPhase1GoalId: "1npBJaEbx-Gj0P79K-BTvpbBeM0U79tMLyXIm3dKK1gs",
            formPhase1ControlId: "12rC2cF0_x32zqnf-2XmaI7b3H6uLi0zkIJlkqcdTQJM",
            formPhase2ActionId: "1UDnnJ14iH-wcRpcYlVDSXXWjNTWv-YW_dRZ1cevfd6Q",
            formPhase2GoalId: "1kU8m3zWx8RcZLmHkF8-YdvP6aM0s7L7fMRPywSGjIyw",
            formPhase2ControlId: "1FyskLPgMG6kwAE-vMOJpHD6q7P1Mi8rh9rnOuwIUQlw"
        },
        {
            imageSrc: "images/beautiful/unina.jpg",
            formPhase1ActionId: "1RIHbGvXBEu01sV1h0r11vgrFtfOWZDO4DAtUg9smvZc",
            formPhase1GoalId: "1yEfi01KmRcWKKweJDfjfGtVV921SbLGKORTEkjkii_Y",
            formPhase1ControlId: "1sNuB6eE4Fnkaw-Aq8nVx7CsEFFMnbtyOSNi_Ci7q7fk",
            formPhase2ActionId: "1sAMt778pza9oxr-izVvPCJaKJ48DpyGoQa9AqGCYPd0",
            formPhase2GoalId: "1rdxF-_r05sX3glyf_leLAQ5ZNvgQnYghJtcZYOjFSOU",
            formPhase2ControlId: "1B8pBxRNZ-zG-Km_Eb9gYk5HQBuZnOpAPIW9KMEfJAe4"
        },
        {
            imageSrc: "images/beautiful/unint.jpg",
            formPhase1ActionId: "1YEeh2M9ieT3uYUbrYaxO_byBeNjQ7XzINABoR33_8jk",
            formPhase1GoalId: "1Z0VkeK1IwCY_B1qIr6mEnpd_YjeZPkgWOIcVzMhYc_g",
            formPhase1ControlId: "1B57ELPmk3h49YwdMjdgMt_gS9maaMzwXnLy4xDtwqoI",
            formPhase2ActionId: "1K3NDkllYTWEpXTO4az-Yr-9RsJyS7vdv_I6bPKhXrz0",
            formPhase2GoalId: "13MDJ6OH_ltw1yjYxjG7xJMtXStKK8_16UcxGRfOmF9s",
            formPhase2ControlId: "13MkIC2GK-ao5b2GlaOwXIkL67TMGsdJIlSo0JVwQbKY"
        },
        {
            imageSrc: "images/beautiful/unipd.jpg",
            formPhase1ActionId: "1AEvpSfqEqHG7o-s7iV00h4sx6nX3zZjQRS37tzMhLzE",
            formPhase1GoalId: "1VngZGCOc-8DJkCaCSvL_Gn8PkwfsqtV2ddZ0fmlbbUA",
            formPhase1ControlId: "1OLtqOJvJbzihuOjdGjG3sod-WYQBMRagPKcYgMTld-s",
            formPhase2ActionId: "1o99S92HwZ9jwxWG0KT_F9OImrebDHIJBTsu5wCevsVM",
            formPhase2GoalId: "1lSIyrw2caxPqGx7Zme0yws18kndgbgwR07hI4_2jrwE",
            formPhase2ControlId: "1rTjgW1T5lWtJQ92lptJo9rx0TOjlqoY96hdlidSH_oo"
        },
        {
            imageSrc: "images/beautiful/unipi.jpg",
            formPhase1ActionId: "1cRXof5_aL4gmN57FsUgBXEP6nrV36SPB-J6q2aLejuU",
            formPhase1GoalId: "1naglzQb1zTz8bkGg1EdoeAKNIHHkT9_T57HAZWtwlg8",
            formPhase1ControlId: "1jBPf9FI9sVDK005brzQ2LpK4Glxn4afBKGmak6bKYOc",
            formPhase2ActionId: "14W2q7g3pDx7SNWvJmblJxRn4aapGhoqBopmQ-u2sjf0",
            formPhase2GoalId: "1EUfdTaClUU5aIBFj3Amf7_kqoxD5WrB25DhYRNW1MG4",
            formPhase2ControlId: "1QCOdpeHEEERLZTbyweTh-5EVtiM-KXAwfAYnjT36w7o"
        },
        {
            imageSrc: "images/beautiful/unipr.jpg",
            formPhase1ActionId: "1xwvcQbO1UaXkftcFvcFBdnZawCnyB-KvVoddn_iO9Vw",
            formPhase1GoalId: "1GRAPMefTA7BHTYIjJfYs3XEjXspB60s3gfB7XsP9LAo",
            formPhase1ControlId: "1Fk9QzcCshFFTQnTxD0Pcv9vweolCvWAgmDW_Zne5uJI",
            formPhase2ActionId: "1JpSkuemMM-BcutSLTRw4_TqzYzL-V3uBAE4RYcszK2M",
            formPhase2GoalId: "1O6Jh5sRMgfzM8h6VOZ-bJLxoC_P3NNY6gA7NArRgkJk",
            formPhase2ControlId: "1PIigLLUtHl1Td1NYuP63hE0LTjCMPRHm6v1zgRH8q2w"
        },
        {
            imageSrc: "images/beautiful/unisa.jpg",
            formPhase1ActionId: "1MgPnLq9kwW4MzTMks79aXFSlaBYn9GVRQzSFald_AqQ",
            formPhase1GoalId: "1nFxtjld4DGqSza8cS9du0BwW98bh2dE9H-2sHv7Fm84",
            formPhase1ControlId: "1ZmdGAq9UVzivc9sFnUAcBH0Z5fx-Nu-p_EWXWl9u06M",
            formPhase2ActionId: "1E6E2QuAixePJclzj17Xyoy89WCU_u1VRI-LWxvtHJzA",
            formPhase2GoalId: "1ZlVqGPI_7wBYGYNUza8Nj71ltbkqw9ySEc6KWZuk2hU",
            formPhase2ControlId: "111-AqO1i4WGLPtsRkQv6D8ysqMOfgqH9MOSfweshSJo"
        },
        {
            imageSrc: "images/beautiful/unisg.jpg",
            formPhase1ActionId: "1O_0nYQRadt9vPNFqQ76taInx7QHveK0guAbkd2kpqSA",
            formPhase1GoalId: "15fCMBmg2sXd18KAd0NIYcYZ1SYjvcnEBayN1wjgLric",
            formPhase1ControlId: "1AhiKuNtP3RyZjBaS8PvY89F-fBCQH3E4GWb9nO5sc90",
            formPhase2ActionId: "1BStVS_N1pKOZJJt0g9XsU5c16GNTaWttj8MNKrcRbbc",
            formPhase2GoalId: "1QuIBCZhDaZ7bQKSdgWJez9SBVg7gdM-owN7Cu9NOUq4",
            formPhase2ControlId: "1QQ5y4uQRSmAhyAo_-pLVoiqvrxXdfRJXjmleDA1JNAM"
        },
        {
            imageSrc: "images/beautiful/unisi.jpg",
            formPhase1ActionId: "1HUlqfqCf0EQ0IdO67w9iEK3d-ZlkeSrjZOFHZ6NLKkw",
            formPhase1GoalId: "199a4UfzL85V4Nupt7jBTRuSK7vqcpGjwT5ftSyt6FVQ",
            formPhase1ControlId: "1jrgAiWSKJyi8UKqHVHthcFjOArdal5njQFjGRBIw1l4",
            formPhase2ActionId: "112dpNzPsF7us7o-4KA70QJRvegGNvaeL7qvUWt9hBc4",
            formPhase2GoalId: "1zTpjbuqspWqIj79qJceqzrFTV53BwcjPf2ndGqYtS_U",
            formPhase2ControlId: "1M4CJgIUEEf4uwcWB3sI-h66DCmsAhuPnCaT8qG_KxxA"
        },
        {
            imageSrc: "images/beautiful/unistrapg.jpg",
            formPhase1ActionId: "149rZiYEjeL3oJYASwFV0yX_BJlBedLGaTQPMlbz-StQ",
            formPhase1GoalId: "14XXyeeZJgAXvbo_c-DzTGMbXaYf297BU568XSsSn4JA",
            formPhase1ControlId: "1lkLJg3lWb5lZYW-lX-LzaaTqLb-8_ol-i4Q4bHSWzvI",
            formPhase2ActionId: "1mG_ofNvFA_sSZP8roZ2DTTxF1lhLpW5LKV5Ff7APbrE",
            formPhase2GoalId: "1f2QGUOmyZ3gY3w0H9Iym8zCUAvJrlptX2yGDomYIs-g",
            formPhase2ControlId: "1DRqjxXe4sGEHdyHHQz5NrlRcoBielhOzr24Cquw6xvY"
        },
        {
            imageSrc: "images/beautiful/unite.jpg",
            formPhase1ActionId: "1FAnUuVTFbCXoO7wFKG1LyYx1uRZWyrJ_m_WD1st0ZEI",
            formPhase1GoalId: "1xK7IsD3EgpLmyia46hNgQn4RVuzs4qu_5Tiy2taU6Bo",
            formPhase1ControlId: "1p19v05k6XRCQ3tiEbp5Wg-zh-9JHDhJGYEDw1cQfQXg",
            formPhase2ActionId: "1aqEiN8SkHvdRzdIS3ZlqDXcKpWhNdxmKPUMsueyL5RQ",
            formPhase2GoalId: "13woEwAw72Lq3_VJETmHUr0uk3470x4PIcP3ZYgFzmkY",
            formPhase2ControlId: "1XafhHxzGZehOCguIoEtPcJbZKwUcP6H8-OVkCZfEYgs"
        },
        {
            imageSrc: "images/beautiful/unitn.jpg",
            formPhase1ActionId: "1iHpDwVNB6U3vdrleRkXQBbjhnS3GigeWKpgaKGtNSZ0",
            formPhase1GoalId: "1kqXp1Tcyof40B8V0NsYDitYt0kY4oRq8kX4X2WBPJMI",
            formPhase1ControlId: "1LZldT9C8PienRe718ROm3iMto2Fi6Ks6XA2Heh5PFTc",
            formPhase2ActionId: "1YIMKrecyw33SLVkkcqR_cFyOu-vTHOjCgesvK-GmWas",
            formPhase2GoalId: "1jJ_ouARqX7qoeA8-w-jCQf0j3oHmrXtw6EMy_qJrmq8",
            formPhase2ControlId: "1-b6XVkqWeAPFDZgPLtIQCh7KdI4mTyMS99Hfl38cwnw"
        },
        {
            imageSrc: "images/beautiful/uniud.jpg",
            formPhase1ActionId: "1TqP1xzaLyo9yGe5GZDCgENDD15jxLzrDL7wXibeV9uU",
            formPhase1GoalId: "1mZk-REEaIIQOfdPene_lmyedPBRs8OEq-yUawi3VpVI",
            formPhase1ControlId: "1LwtA-3NKSY0U5GoknX1c9S0haa3xpEbmP_8cQjMcmiw",
            formPhase2ActionId: "17zZtGjM1zPKZRiAmeIsN1_aHnWQ_eofkaLfbWZsU9Xk",
            formPhase2GoalId: "1R8AhuOddKjL6GeyKe8en6OyXrdXKHcj8TXwvP2XIGvU",
            formPhase2ControlId: "1i8OuhtCJK3jHvtHrluGydAZzs_5wX646uHVYesKC1sg"
        },
        {
            imageSrc: "images/beautiful/univpm.jpg",
            formPhase1ActionId: "1cV3PUDmFwGNrAH-948VS67nyycQ4peYUKXOyPNLDa4c",
            formPhase1GoalId: "1AVctIyYtSViDHeOLVgWHCj6vBVwiasaS4Lbu3M3wcq8",
            formPhase1ControlId: "1ib6ai2me9FAx711SOzfXtc3-nFDkCA-uXnbn6vC-Bvg",
            formPhase2ActionId: "1vECbype5PyfdTt7xc_mBwS4eTxSxooluYwi77qJ3ZEA",
            formPhase2GoalId: "1snh-Iqs4ypsImSoCWhIaethYEwixA1u55hPQajk_NNQ",
            formPhase2ControlId: "11IQv6_Rw0Y7mWS7OZdwoL4OFiu6Y4yqRmc7wPNZK4ks"
        },
    ];

    var uglyImages = [
        {
            imageSrc: "images/ugly/iuav.jpg",
            formPhase1ActionId: "1ch0oAEBmylSvMtyJ7FVfWklP9pBaytr5xUZTqhqivv0",
            formPhase1GoalId: "1wlVVXDcQf87WZTTrZHHRe-MWLbOfIa9HlySwLRuG8JY",
            formPhase1ControlId: "1xhYltEs9KaJtURpBLXJkJk8Su6yLvZfTy6VZr_j46pY",
            formPhase2ActionId: "1_WQx9w6UhFeQS0GazV3nkl0CGq62Cc3_FFa8MxgwQl8",
            formPhase2GoalId: "1yeSPq5cr5KIP4W3btnsiU9DWvpoJvC56cCViBvN1Arg",
            formPhase2ControlId: "1K4dyw5Z_yppFWWk0bDpQk1zwWsKvyD06Pt4F7kTw-bI"
        },
        {
            imageSrc: "images/ugly/liuc.jpg",
            formPhase1ActionId: "1Lnwa9FlVb29C5kinnTLIisQFv3ShCrzTvKgE3FyI6Y0",
            formPhase1GoalId: "12lwOz-b6W_yoKYMQCMwDgjlMMQhyrRr7LoZwfaeC32A",
            formPhase1ControlId: "1clruib-Qs0T_RzbIMzmxl2VIpgAsfD0ROuiiRAAiwPc",
            formPhase2ActionId: "11YmgI1JO2EfxQq4_jCHjRJ-HWvJ65dZlG-kWrTTAhgo",
            formPhase2GoalId: "1OC6OnGx91v4U6bmLiy1kHAfGo4iiBjE5NZo89hPQ8gM",
            formPhase2ControlId: "1Los07ZNO4F4z4vv7sIhGw7BmoLfnAijdsiw8ovyCocw"
        },
        {
            imageSrc: "images/ugly/sumitalia.jpg",
            formPhase1ActionId: "1XfpYK7vxv_DYRPGgZtShjr4m0aUxlVKH6K6_i6CyIQI",
            formPhase1GoalId: "1zsxJKAIWY3YxtK3shz0HxhsboLB2oHrb4HSA2aYr3uI",
            formPhase1ControlId: "11rE6t2rQoWNdp6yT8f4Rf_NgNKDVeWYzRDa3kmpRsA8",
            formPhase2ActionId: "1aQWqatd9XxABRUrWjb94tJZ6ayP_hsri_T9njI_51kI",
            formPhase2GoalId: "1f9WtY8eaHyNtHTSzz5O2BJnarBhYDI0fZgsABQIvyZU",
            formPhase2ControlId: "14cv3bRjov-bHfyF7XWmr79sj2IqyjfhvU9ntxNrNb9k"
        },
        {
            imageSrc: "images/ugly/uniba.jpg",
            formPhase1ActionId: "1H2rsPnZuR5sXiJ6g0AQojrTLRBai2nnhvrOIBkiZ2-I",
            formPhase1GoalId: "1dfsI1JBOVAERU_dD_RLwaoL7KoTXO3oHJirb5pGhhDk",
            formPhase1ControlId: "1HsPqz2i8T1gxJ4X2JxwpadPwKAW8OcBBzh-ZymhRuDg",
            formPhase2ActionId: "1gXPFLoeUKaX2yayo8P2zCg4ARjMVi6AxBcQlqAL7u6o",
            formPhase2GoalId: "1Na0-TtwJO1gLiEb6kYhrWa0XREuw7WoRCObTXPQnDYs",
            formPhase2ControlId: "1aQz0Zwb1N1D5D9R8kFnjUo-rh8oEGyc0PP1MkxBld7U"
        },
        {
            imageSrc: "images/ugly/unibas.jpg",
            formPhase1ActionId: "1v_quAai8htYBW-PFVYP0o2Q-j2khkAk2pnYp9R_lld0",
            formPhase1GoalId: "1w8YGzjNqkqZtHe5mG_0KbS5Ko2u4yCFrIt696JySlKg",
            formPhase1ControlId: "1A6Tfr6SSVhTgW5DHUU0jwVNlVd3Y76u0QR4QUVXB3Bg",
            formPhase2ActionId: "1U9LM0HArKZY-NeGz0UslXNKnx4H8N_CvVUkeEMOT88Y",
            formPhase2GoalId: "16tr3F-U_-fIRls3Cq-aoQSDTDaQoXplbiKC9Q2hY7RY",
            formPhase2ControlId: "10YtKr5zF3pgNeM4D3KUGt28a3nqEqWvhsi8ZBN2Bo28"
        },
        {
            imageSrc: "images/ugly/unica.jpg",
            formPhase1ActionId: "1Sv1VxBy4w9XoKe1JzShQXsKd_J61eEHxx9Q0IsV4y70",
            formPhase1GoalId: "1BVhFL8c30uwj1Z_14Mpe4n-M_xQ2H4XuHN9_87YUiec",
            formPhase1ControlId: "1wDqT5-d3d5HWW7hxhmuIew8yFDerigNl1htGt-U1Hg8",
            formPhase2ActionId: "1YVlMp8zCvrk_pqBYQCDMrmBdH8tF2tMAZ8XAe6eu2TI",
            formPhase2GoalId: "1YjrIQWXmLmjqK02f8BLn4XNcXYaiwd07gVdZyZ4KGxY",
            formPhase2ControlId: "1VqvnH3OqfSUoqVsWD_YagYZXfUHpUblNjr2Hhp78qOw"
        },
        {
            imageSrc: "images/ugly/unical.jpg",
            formPhase1ActionId: "1krTOICGqpH2arylIDLEzeTcqiYL9dFD6LmN4pt0f1Iw",
            formPhase1GoalId: "1K8DNBiE0hJQO8I23ivsVcdbeI-u396Hn5MN1Vyu6Cxo",
            formPhase1ControlId: "1cM7LOEyiSWqkYe3EAPTpD3o7dO4Yexz8tWCgwu_KjlU",
            formPhase2ActionId: "1FK8ICJH1m9EEv5CPUa8_aavSoLr4rizQPGqv4bdCFgQ",
            formPhase2GoalId: "10hu18UvvmaTWzxNJMmRtzyniFtnMbnI-o53W7PnN0EM",
            formPhase2ControlId: "16dGm4jisRid8bNX8DYnn0ZgdhO3I9syQl0G5-N0w1kU"
        },
        {
            imageSrc: "images/ugly/unicam.jpg",
            formPhase1ActionId: "1NbVgEFOzH91jj8_TxrmzMm8qCHmDEDQWr08-51eFeOs",
            formPhase1GoalId: "1o0UK5HHPVpK6sGi6tac5TBe-SL4xCGq6ims9e-2xhT0",
            formPhase1ControlId: "14w51KmtFquUgdkmhKnkfIc_6NuHYA6rQm949VbQSJ3c",
            formPhase2ActionId: "1_QvbjtE3lEX1AilSJVYrezUMn1JCoZ1lT5V_MYVDkBM",
            formPhase2GoalId: "1bUIRMleVtCUqFK_gRKQML2wJx5hQQ_YSuA4jt2n6scs",
            formPhase2ControlId: "19RqGEbrC1W397tfDzkhs4WA11HlatHik7hP_n21dOSU"
        },
        {
            imageSrc: "images/ugly/unict.jpg",
            formPhase1ActionId: "1Ad7ZIYfz5RZl3nkQnGfjEZMjDXseOUpJ7Zw0U3bkssI",
            formPhase1GoalId: "10AL6jNN_tQBWeChSrLLqz52nCFINQCg0dpLiY98pgXs",
            formPhase1ControlId: "1Q-vt7g_75wXp1mdznikjfC_6KU70vPgNwdBrwGTsRGI",
            formPhase2ActionId: "1dK_3E8e4X6MP0LZ4Xyv7VoeSGsKIp9k0OZD7IWJVqkQ",
            formPhase2GoalId: "1lmEIJ13TKr3tmXLZt03HDOR3_dqnp-ZBMzYZaTH9mHc",
            formPhase2ControlId: "12J7xiq4OBypBSqmYJyMhNc65gb5E5Fr6HwcrVyIpKMM"
        },
        {
            imageSrc: "images/ugly/unifg.jpg",
            formPhase1ActionId: "1phx0NLlFbNdkboELvyZr9TjEv2Mrng8pxgp5t11VWMw",
            formPhase1GoalId: "1i2-WI-aPFfoycTzMSVvvQeQ651QO2Rqfx8yhUa9Iz50",
            formPhase1ControlId: "1wKFajLNOmOQQj2LxDwwOGGr-KOKWXLGjGgdX46JcFFA",
            formPhase2ActionId: "1-Z0S3UoWQkrcC0Eeqke74F7Z4bewuyguKzik-hZBkFg",
            formPhase2GoalId: "1FbRoJCNTL7IB025VPowBteiDaXjizWNv-HpQJl8EyGo",
            formPhase2ControlId: "19ZSxRgUhD6MZy5lt8LzaioNYKPY9XUS_p09V9V43qas"
        },
        {
            imageSrc: "images/ugly/unimi.jpg",
            formPhase1ActionId: "1gxFWrDWglpCp8zbGP_uDlecC6rAQxSahHDHU9BRDHow",
            formPhase1GoalId: "1NLnnvJnBxzpumvTGYfDEqU9vY53P77ZN94HSWeXLibM",
            formPhase1ControlId: "1Aio5ZXNIyKLbcABh4ZmX30wXrxyOarCzJIXHhHLRMHE",
            formPhase2ActionId: "1tYrRPNFXaiyBUtyd2ecMn_l6nsH_u6jQgCnXSGkteVU",
            formPhase2GoalId: "1gFFM9jqDKLJsKwRvU2h-Rr05EdPwpUOeOp3HYQP8CIQ",
            formPhase2ControlId: "1eKL4DDbV3JGSbWZErX4-EIse1qS-XW6tqEFaCpSNUzk"
        },
        {
            imageSrc: "images/ugly/unimib.jpg",
            formPhase1ActionId: "1-qhIHAFR5sSvQ-33Z--ZXwEwwXjrGhGMIMjrf7bgu_s",
            formPhase1GoalId: "1C1ss1CBjFh8qJ0ydMINya7hbYn1MWlAv9L8T2OsSqEk",
            formPhase1ControlId: "1oeKxkymnL-ajX5hjx9lzY-747pBE029X-s7VQnqgDFM",
            formPhase2ActionId: "1PAASVjPXgaFnMg75c0x1XJsW4Rl1cgwcdZI0B5crOSs",
            formPhase2GoalId: "1-seLU-dGpqamFx0Xk7mlirsjrqZfEoifRmL2P4F2qpI",
            formPhase2ControlId: "1E8WcS-X8JyKA1gx2diLOmZzo38dgvVhPMvrc_705_Mw"
        },
        {
            imageSrc: "images/ugly/unimore.jpg",
            formPhase1ActionId: "133E3DH4Kp2VR58z42yOTYlssClDgfB-ZU6JyeGhRjag",
            formPhase1GoalId: "1A9Z2jnKGUKVdlHyp3-Uf-ejff4pEJD4ogADBBAt_SWg",
            formPhase1ControlId: "17K3_yiI7aRh3mR6HAwWIIRJGkn-Vm0iu9T0UNYa0tXM",
            formPhase2ActionId: "16Y2WjoHfT6eTD_AEprPs_B4DtO0LMbc2gzCeEX1edcc",
            formPhase2GoalId: "1Ot9tggcROUcKfAMUF2cOfonBjXoJJy77lUDd6qx1NM4",
            formPhase2ControlId: "1NKLO4LDyMhapSRBVCGhahX7VrlahGeom_s-4GVmaF9o"
        },
        {
            imageSrc: "images/ugly/uninsubria.jpg",
            formPhase1ActionId: "1XrzSa_4DNPtoa5KBJpFpoQ9m1JzEiEGud5nz5V4-f9E",
            formPhase1GoalId: "1zprr02qJcYLUK8ug0gIaF4FKlYZ8a-r_IRTRSUnyaKU",
            formPhase1ControlId: "1HWLxg5FJMxajP106Is4RcaCHhtO5BJqO3FUMHTMddsg",
            formPhase2ActionId: "1-Pi_yRej1gbSWsObyCdY6Jd6nvVmtbhrF93UuZ3yJsE",
            formPhase2GoalId: "1OXkDKxZfz1lSz7d1guSYASAx30vLoDSuncOmspEADSg",
            formPhase2ControlId: "1govVqrmgsO5HC4z8AoO-T2-2FaG6Qw8XWdAjjK-rfiM"
        },
        {
            imageSrc: "images/ugly/unior.jpg",
            formPhase1ActionId: "1N7a3NttsUmdZDyQgaxL_unqHjwJNfKFgMSUzNu8GTLY",
            formPhase1GoalId: "1bKhTuDMeMsrSmjX_h1vsic0zOAcdL0mUFqt56zhVjrg",
            formPhase1ControlId: "1kbEIAhdpBW1ghX3CFa-ls7C5IwTDQEA6rIZ-EOT5if0",
            formPhase2ActionId: "1e6mnXOh0USKOf-GQhBTaMKTq14Wph5y07DBthOslQOc",
            formPhase2GoalId: "1rBBZqz6teF6rP0KsJOnwOGhgXdWwOrL0KmHmVlO3obc",
            formPhase2ControlId: "1_IhS18wwZHCuAR6EyVt0VCceFVWxthqpqL5JOrJgcEI"
        },
        {
            imageSrc: "images/ugly/unirc.jpg",
            formPhase1ActionId: "1OgOION_kUUxXaUBVRjPcMll0ntKQPt7YYE3Ure_mhQA",
            formPhase1GoalId: "12w5jZ--Q2lE_ZDqOqu1Mlf2BZ_b5VAdz1_lYDJnhNdQ",
            formPhase1ControlId: "1c4St5Sfv8uEX2YYoAP0dGxJA6GxLc7tyg1uPxRSGRzk",
            formPhase2ActionId: "1Cfrgity3VbjMicTu2JRVyqDE4wP4Pe85b7iNy0d1gJk",
            formPhase2GoalId: "1Q0N3_2VGTb_p-rlHNSOO-jb8vzILz01Fdi41l--LdTw",
            formPhase2ControlId: "1UNeSm5SKcNKoiEv_VZUifvQiwhcGm2U1Pd-dIkMrK94"
        },
        {
            imageSrc: "images/ugly/uniroma1.jpg",
            formPhase1ActionId: "1KglR5vmIvTOoCujiPXP-gp8sn72oA_C_T9AtASywGzs",
            formPhase1GoalId: "1LoIiC1IRDcs_HOT2wnobDLWKiNlMrVYHsXdbSkEMMC0",
            formPhase1ControlId: "15LCuDwkZF8UvUph8M8WRQBZx2Rs7VuMbscC0kjgwYhM",
            formPhase2ActionId: "1Ngh29Ws1u7UtzBrfIvEPehkO1jddRXJkl_5E5QfbdZU",
            formPhase2GoalId: "1R63p07qGoMxJyT8cod1nBU2172wBn31tFmK-em5Qncw",
            formPhase2ControlId: "159krvJR4AQEowlgBKMy8yf-0BunXIKR5Oopuk0K9LvQ"
        },
        {
            imageSrc: "images/ugly/uniroma2.jpg",
            formPhase1ActionId: "1RRAsDPI-tF1kYPbJKzlMlK9JnSjfjznPPRxJLsgaH5E",
            formPhase1GoalId: "1W40ZtFnRmvR-Xoi_5-vxcQd7hiS8h8ew6UOQMqq6PiI",
            formPhase1ControlId: "1c_to2vQB5QjH0ayNrh-Kr4oHc2fVE1M2CS7MnVtnLl8",
            formPhase2ActionId: "1d_eM5lAcNTVllRj5R8yQFzUGwpvtd_G_KS7H8UsLtFk",
            formPhase2GoalId: "1DMaI3QMnzLHRdPe6GUfKjI1xRozgBUmJ3bzPHsBtS9g",
            formPhase2ControlId: "159krvJR4AQEowlgBKMy8yf-0BunXIKR5Oopuk0K9LvQ"
        },
        {
            imageSrc: "images/ugly/unisalento.jpg",
            formPhase1ActionId: "1cgsgLVnuRMf7ro5KedMoLrtGMkcRIWfOW2FiRnCkzZs",
            formPhase1GoalId: "1eHjitXIq775D4JzCgwNGqOE9A12HqO0KTYp18_tU-JY",
            formPhase1ControlId: "11TzoTaPx4ylPATSb7j_K1ngpGllIjhHCjha0cPTBtQw",
            formPhase2ActionId: "1TDYjOlyxP2eYtUwup9UwFONDO_XTYXk54UsWzdMSxm0",
            formPhase2GoalId: "19FObIzOM4fHkqtlRhRmPbrwNJHNvfJQXdgnT-EC-ZE8",
            formPhase2ControlId: "1tM77nkqu19esZpLdIExJeWMGHVeQN0ofbw8QuRROEtQ"
        },
        {
            imageSrc: "images/ugly/unisannio.jpg",
            formPhase1ActionId: "1Fz2zoXiaFfhRgOjn8gcTX2-z0EyGX8bFtWLR_1peeqA",
            formPhase1GoalId: "1L92-QwZ6sQ1m3wnGRLXLpn9HAhPyzYx29koyBE5iQyw",
            formPhase1ControlId: "1YTb_aBpq3aLF20JZxmwswNs-23YIE9bpgDLXD-p_ZV8",
            formPhase2ActionId: "18en6UtQVLk1bclRduAtOETB0VFNVW2a5DDybsiaFrR4",
            formPhase2GoalId: "1qnRRxSEmRLohCldRhwBatKWDfARiuJBprMbM-pIUeEA",
            formPhase2ControlId: "1oMb_OlzB2NkYhdBajsLQ-WZ9ri-lyiI4RIs9vilfH2M"
        },
        {
            imageSrc: "images/ugly/unisob.jpg",
            formPhase1ActionId: "1sYnGzcYCVU2GLP6GAzcchnKq81Hrnf0RzrVEJ8n7J10",
            formPhase1GoalId: "1ArP12Rz0-5OgfXb_MmIVijLibYU7XyVp8BTUh0S2JJs",
            formPhase1ControlId: "1IP95Qx2bKXB-Spiu_3V3jjfH1IIYN5Fij26MXmzx8qI",
            formPhase2ActionId: "1sAuqIt0AbuM0P4QYo5tqfy4ksUYoacKB4fRTtXRTvSE",
            formPhase2GoalId: "1kXgcLaHpcHqxJIEYsx9wNXVCaEV7lpfvqUtdlV7rPWs",
            formPhase2ControlId: "1PdbqsHPibmRyZq4WiFf4gwd8wpDE7IHZytOa3Ej3_-8"
        },
        {
            imageSrc: "images/ugly/uniss.jpg",
            formPhase1ActionId: "1bKcNXJfnTx5_VKiWSm81QYklU0G8kc9pq7rwNqaPVyw",
            formPhase1GoalId: "18CRK6uaKltuWw3xjF3vhmJFDnlCPlMLS2ljAfoxyzxM",
            formPhase1ControlId: "1vjmCh55weB260emhfXsXM6B8sBXyon6J02TwY7o-P28",
            formPhase2ActionId: "1qgIxa_ME7ZPFfjIffMi5uFRiy6Npqog376keAuYVDrM",
            formPhase2GoalId: "1FFAnTZcXtERn6wMKzF5_uuWlwiok4gb88IX-lE1tvtw",
            formPhase2ControlId: "1uZKHBed3b_I-DYNgGKrqhUya2a2Cmi0cEZ_V8_0CJ6E"
        },
        {
            imageSrc: "images/ugly/units.jpg",
            formPhase1ActionId: "1rZhiYQ7j995_RgPXoNYj_wjc-9ufjjHHR-eLn2Hvvv8",
            formPhase1GoalId: "1w2DZBoa9f6Ds5QKvS7OEF9UQx7nufWlbh9P6yWvBVWU",
            formPhase1ControlId: "124kQZ4UEFVDDDZ-V4sIz4wgZi8CzBZrU8-gjcJHiZuQ",
            formPhase2ActionId: "1k-_cRR75swr4fQ2VdvXE8d6dzK68TuHLJwKgvg7ZzYo",
            formPhase2GoalId: "1TQa26qHNuzb1dbFkmxJxEqDD4EbS3hfixFrmRn6aPFs",
            formPhase2ControlId: "1XZ2WqDnYDKjWv3B_L7oHlJk4JBV6OJJXw8oofqxc008"
        },
        {
            imageSrc: "images/ugly/unitus.jpg",
            formPhase1ActionId: "1p_1KjcJgHkYfYwCJf1DRz9udD8jdOIn6NL905qqMGns",
            formPhase1GoalId: "1GSb0Y5o6xeNVfjGvAP1oNDxK9W6aBBjC7P1CPrGxUo4",
            formPhase1ControlId: "1SS0WfNJEHCRGQW5fDOdZjWGH0lEVWqifmvG8oap5Blk",
            formPhase2ActionId: "1bcFER848pGdYeJdjUgyFt2qth2d8cmVffZyV841Mevk",
            formPhase2GoalId: "1e9TkGlIco5SdEdJJ9o8VbDXEXEos_7iGjSWaZGJYVLs",
            formPhase2ControlId: "1a3vm_2HS5jV658rocBpldNh9AHSSbSx-NdvU0YXLZAk"
        },
        {
            imageSrc: "images/ugly/univaq.jpg",
            formPhase1ActionId: "18Iv285ObOI50t6J3h2XJIvjesbyihn1m6OKOICIfsm4",
            formPhase1GoalId: "1M6VxHaZ8oCv1NhoIx8Kz2lcO0WrQAgz8pUSWiWE_8sg",
            formPhase1ControlId: "1IupsBpHQimpv7n0vU4rp7ewI4ebiaSui9vye0ij-T64",
            formPhase2ActionId: "1gLDZcfr95w1GoV7VeKwDKfVSROjcWDb2Jt25wPRropg",
            formPhase2GoalId: "1MmjugGJuv3uO1AKMC3KTiLk4VR5gp2qrsNGbt6n4SSI",
            formPhase2ControlId: "1ObgmsS4RHAQWlRXNibfhHBw8GIb2sgt93kX6IkaLvUM"
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
