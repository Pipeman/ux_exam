"use strict";function MainCtrl(){var a=this;a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}function AboutCtrl(a){var b=this,c=a.beautifulness,d=a.mode;b.beautifulness="",b.mode="","b"==c||"u"==c?b.beautifulness=c:b.beautifulness=Math.random()<.5?"b":"u","a"==d||"g"==d?b.mode=d:b.mode=Math.random()<.5?"a":"g"}function Test1Ctrl(a,b,c,d,e,f){function g(){l.step=0}function h(){return n>=r.length?(f.url("images/"+p+"/"+q),!0):void(l.step!=m?(l.step++,l.imageSrc=r[n].imageSrc,i()):l.step=0)}function i(){var b=o;l.missingSeconds=b,a(function(){b--,l.missingSeconds=b,0===b&&(l.step++,j())},1e3,3)}function j(){a(function(){k()},500,1)}function k(){l.formSrc=b.trustAsResourceUrl("https://docs.google.com/forms/d/"+r[n].formPhase1ActionId+"/viewform?embedded=true"),n++,l.step++,l.currentImage++}var l=this,m=3,n=0,o=3,p=e.beautifulness,q=e.mode,r=c.getImages("t");return l.step=-1,l.imagesCount=r.length,l.currentImage=n+1,l.imageSrc="",l.formSrc="",l.missingSeconds=0,l.isLoading=!0,l.isSuccessful=!1,l.mode=q,console.log(q),l.starter=g,d.preloadImages(r).then(function(a){l.isLoading=!1,l.isSuccessful=!0,l.viewChanger=h},function(a){l.isLoading=!1,l.isSuccessful=!1,console.error("Image Failed",a),console.info("Preload Failure")}),l}function ImagesCtrl(a,b,c,d,e,f){function g(){l.step=0}function h(){return n>=r.length?(f.url("test2/"+p+"/"+q),!0):void(l.step!=m?(l.step++,l.imageSrc=r[n].imageSrc,i()):l.step=0)}function i(){var b=o;l.missingSeconds=b,a(function(){b--,l.missingSeconds=b,0===b&&(l.step++,j())},1e3,3)}function j(){a(function(){k()},500,1)}function k(){var a="";"a"==q&&(a=r[n].formPhase1ActionId),"g"==q&&(a=r[n].formPhase1GoalId),l.formSrc=b.trustAsResourceUrl("https://docs.google.com/forms/d/"+a+"/viewform?embedded=true"),n++,l.step++,l.currentImage++}var l=this,m=3,n=0,o=3,p=e.beautifulness,q=e.mode,r=c.getImages(p);return l.step=-1,l.imagesCount=r.length,l.currentImage=n+1,l.imageSrc="",l.formSrc="",l.missingSeconds=0,l.isLoading=!0,l.isSuccessful=!1,l.mode=q,l.starter=g,d.preloadImages(r).then(function(a){l.isLoading=!1,l.isSuccessful=!0,l.viewChanger=h},function(a){l.isLoading=!1,l.isSuccessful=!1,console.error("Image Failed",a),console.info("Preload Failure")}),l}function Test2Ctrl(a,b,c,d,e,f){function g(){k.step=0}function h(){m>=1&&f.url("phase2/"+n+"/"+o),k.isLoading=!1,k.isSuccessful=!0,i()}function i(){k.step!=l?(k.step++,k.imageSrc=p[m].imageSrc,j()):k.step=0}function j(){var a=p[m].formPhase2ActionId;k.formSrc=b.trustAsResourceUrl("https://docs.google.com/forms/d/"+a+"/viewform?embedded=true"),m++,k.currentImage++}var k=this,l=1,m=0,n=e.beautifulness,o=e.mode,p=c.getImages("t");return k.step=-1,k.imagesCount=1,k.currentImage=m+1,k.imageSrc="",k.formSrc="",k.isLoading=!0,k.isSuccessful=!0,k.mode=o,k.starter=g,k.viewChanger=h,k.imageViewer=i,k.questionnaire=j,k}function PhaseTwoCtrl(a,b,c,d,e,f){function g(){k.step=0}function h(){k.isLoading=!1,k.isSuccessful=!0,m>=p.length&&f.url("questions/"+n+"/"+o),i()}function i(){k.step!=l?(k.step++,k.imageSrc=p[m].imageSrc,j()):k.step=0}function j(){var a="";"a"==o&&(a=p[m].formPhase2ActionId),"g"==o&&(a=p[m].formPhase2GoalId),k.formSrc=b.trustAsResourceUrl("https://docs.google.com/forms/d/"+a+"/viewform?embedded=true"),m++,k.currentImage++}var k=this,l=1,m=0,n=e.beautifulness,o=e.mode,p=c.getImages(n);return k.step=-1,k.imagesCount=p.length,k.currentImage=m+1,k.imageSrc="",k.formSrc="",k.isLoading=!0,k.isSuccessful=!0,k.mode=o,k.viewChanger=h,k.imageViewer=i,k.questionnaire=j,k.starter=g,k}function QuestionsCtrl(a,b,c,d,e){function f(){e.url("thanks/")}function g(){var b="1v6Wp-pPOlDxPuMrFWDXj8lvr_d81wk7sJLI2ma3Nx5U";h.formSrc=a.trustAsResourceUrl("https://docs.google.com/forms/d/"+b+"/viewform?embedded=true")}var h=this,i=d.beautifulness;b.getImages(i);return h.formSrc="",h.isLoading=!0,h.isSuccessful=!0,h.goToThankYouPage=f,h.questionnaire=g,g(),h}function ImagesSrv(){function a(a){return"b"==a||"u"==a?"b"==a?c:d:"t"==a?e:!1}var b={};b.getImages=a;var c=[{imageSrc:"images/beautiful/hunimed.849aa8dc.jpg",formPhase1ActionId:"1tG5aNCL98y5ZzNBw3RNNmuVbOe1g5COwa66OVLpTKn4",formPhase1GoalId:"1aBJNCKtkCYdDqUwFJcLcgBRgSIwmkjjO4C5I5doOYpI",formPhase2ActionId:"1qTCFvizN75hvg0k0ZftfjbHrS3mb2it7bAx4FMRDNBM",formPhase2GoalId:"1mWVMp7oaGAqAe7-sf0jSkHYg1FX2aYGFXefa5coNSNo"},{imageSrc:"images/beautiful/imtlucca.f8ab1984.jpg",formPhase1ActionId:"1w_-ra_tKG-Q8WoWNdGI42LtAGETGdSMToWyS1wq_6zk",formPhase1GoalId:"1hvyIIQmRjySISlmVDjfcJPeqf1CqJIc9SpXXFF7uAsc",formPhase2ActionId:"142Vm6yKu3DdrmivhW9MTSK64ZayReUolAM7_ZkAl9vU",formPhase2GoalId:"1g7X4UgHIgyUh2Nupi5G-GUerv2JO3PizoaO5DOYDoos"},{imageSrc:"images/beautiful/luiss.f7e0efd3.jpg",formPhase1ActionId:"1H5t1_-QltnHIkHTplxKsimRizkSanNWWlnFJlwEFxYc",formPhase1GoalId:"1wX5vGkDCAzRQgTgkfohw5jiD_VpqpIFnJNaZRMyhDFU",formPhase2ActionId:"1MsEcjHhKqv3p9YJF_lX-bNa1sWNANyvDFLgsPXz3nAg",formPhase2GoalId:"1M3EfKx0JCp7eGmMsQCGU_JxTifv3HM2bfFWnRi-lHfs"},{imageSrc:"images/beautiful/lum.6d52a58c.jpg",formPhase1ActionId:"1UUWKT4VdjN-K2YVKtQbpo9NNVvX4oBgA-ARkxY91BNY",formPhase1GoalId:"1Pj-JhQ3pQCXVVc6Kj91WWzMrNDxcKtxLHP-zCsQEs_o",formPhase2ActionId:"1IkaoK5s8hDOEFd85xcxkc3xmABjywkSi2571dElEvD8",formPhase2GoalId:"1s1IvtAV5DnPj3KSyhMBdfmlxhS4EihrRg0JR5sAK7vA"},{imageSrc:"images/beautiful/poliba.34bc1f03.jpg",formPhase1ActionId:"19KfPv24hmS4ZPdymXm32vstz39mATK84C8bYxG7zEeA",formPhase1GoalId:"1kzdai3Bj-oTTqhdSKriyXiE90ZEj8D-j_lngbQsRjoc",formPhase2ActionId:"1AD6TiEDMRqTaEmxnCxM09AU6IMEhAwfYFdL1UpNE1m0",formPhase2GoalId:"1b5rnmAAD8b3BH2M-KAuBPfvWT1PPRvI9BniYPpfTNYI"},{imageSrc:"images/beautiful/santannapisa.80d3071a.jpg",formPhase1ActionId:"1qMMFRMle8zZXqEdQ938sXz8XVRwTZ3q21KF4FvujNuY",formPhase1GoalId:"1gi-CWIuk-JlqJBs2HPnewLfcMCuvGzQjV9aHsfEiQ-0",formPhase2ActionId:"1gnDLbMj3x9mxBYnWdII2hnCMLeDTjTnm5Ew3Qz8MUGg",formPhase2GoalId:"1-vHMX-hAkWJw7HUSY1lp3Qh6u2wd4G7oZquv9UoR-OQ"},{imageSrc:"images/beautiful/unibg.bda6ae12.jpg",formPhase1ActionId:"1L4tBSSNJKIFjngymAxGNj0Xkd0bUPi8kRmo_NO2wuUI",formPhase1GoalId:"1CxB3hEQ4gF_K_gCRhaLLC2RHYDv-yWDthboxDVjXi-c",formPhase2ActionId:"1ZGcICfMaIGvu96jfVB7mX5NLmrwcN2g-EAZs34ek5JY",formPhase2GoalId:"1FH9ZS62_Ba8YaYFf8tB-LfUxoPUtHtRervu8rQwK5qQ"},{imageSrc:"images/beautiful/unibo.6538969e.jpg",formPhase1ActionId:"1dK16_VAtI81C01ee8UT4M7y56AP4cow61X5ip807kNM",formPhase1GoalId:"1kIP8PasXoSKrezTI99L3TmiDXJ23ZcX1YUqAqwd6s24",formPhase2ActionId:"1V71vMXGvivAc9XHfH-AqNfRiQhXGC2yfaooCfC1yAek",formPhase2GoalId:"1ggAdGuZSJSjqIegAlSVqKpDwKcDPL7UXycnJuGOVUQo"},{imageSrc:"images/beautiful/unibocconi.a46c8f0b.jpg",formPhase1ActionId:"1SA2uq_gS8Qh6QvEHQnsSwKcJBf1HJDlZtySKG0WSRRU",formPhase1GoalId:"1zOeNmADUXjc_OVjM-c1sWWxdRMwccctCCyFaFj0pbNk",formPhase2ActionId:"1t2AlZuYAn3NG07E5FKuQesWOgBqmH3qSbmIYrLDW5ck",formPhase2GoalId:"1nkCLL2To1S20wXhF81AdRStncrBi5Whv80DlK_x0dhU"},{imageSrc:"images/beautiful/unicampus.d596beda.jpg",formPhase1ActionId:"1YeKVfBTVVexULMMQqLNbJ-0xGYuVoDoPrfdNPc1rwSg",formPhase1GoalId:"1ewj84vBbcImoLX12QLn6KmZstiCs29OgD_uOC_Vizh8",formPhase2ActionId:"1aktTdy76qEhKMKEwCq3zszHMehgEUsgiBAYw1B0KEiU",formPhase2GoalId:"1R8vGRGRGsR1onbh3U5oVL3hXdUcFXEMp6kQ27T70aHQ"},{imageSrc:"images/beautiful/unifi.b014b967.jpg",formPhase1ActionId:"1WhhOLbfsqxr16zEBdH6mca2H_KCLbxB07BrXcrVkS1k",formPhase1GoalId:"1pFxBKtweZGtg7AUUcg7DpembM3grbGNHUKspgtsPi2Y",formPhase2ActionId:"1jAsup-aXIFUuFpmEk83o9PHYmidDIB8G5quhQr7QUbo",formPhase2GoalId:"1pYmt8RYNfY-w4exMjQeinTC9KKAIJlvaLNraVIvVoDA"},{imageSrc:"images/beautiful/unimol.23e46af1.jpg",formPhase1ActionId:"1cAlLz08nHYvG1kZih9dk2kMXtJoOYakn0Ryws728DhY",formPhase1GoalId:"1npBJaEbx-Gj0P79K-BTvpbBeM0U79tMLyXIm3dKK1gs",formPhase2ActionId:"1UDnnJ14iH-wcRpcYlVDSXXWjNTWv-YW_dRZ1cevfd6Q",formPhase2GoalId:"1kU8m3zWx8RcZLmHkF8-YdvP6aM0s7L7fMRPywSGjIyw"},{imageSrc:"images/beautiful/unina.b96d97f7.jpg",formPhase1ActionId:"1RIHbGvXBEu01sV1h0r11vgrFtfOWZDO4DAtUg9smvZc",formPhase1GoalId:"1yEfi01KmRcWKKweJDfjfGtVV921SbLGKORTEkjkii_Y",formPhase2ActionId:"1sAMt778pza9oxr-izVvPCJaKJ48DpyGoQa9AqGCYPd0",formPhase2GoalId:"1rdxF-_r05sX3glyf_leLAQ5ZNvgQnYghJtcZYOjFSOU"},{imageSrc:"images/beautiful/unint.3fa3a591.jpg",formPhase1ActionId:"1YEeh2M9ieT3uYUbrYaxO_byBeNjQ7XzINABoR33_8jk",formPhase1GoalId:"1Z0VkeK1IwCY_B1qIr6mEnpd_YjeZPkgWOIcVzMhYc_g",formPhase2ActionId:"1K3NDkllYTWEpXTO4az-Yr-9RsJyS7vdv_I6bPKhXrz0",formPhase2GoalId:"13MDJ6OH_ltw1yjYxjG7xJMtXStKK8_16UcxGRfOmF9s"},{imageSrc:"images/beautiful/unipd.c18d91ed.jpg",formPhase1ActionId:"1AEvpSfqEqHG7o-s7iV00h4sx6nX3zZjQRS37tzMhLzE",formPhase1GoalId:"1VngZGCOc-8DJkCaCSvL_Gn8PkwfsqtV2ddZ0fmlbbUA",formPhase2ActionId:"1o99S92HwZ9jwxWG0KT_F9OImrebDHIJBTsu5wCevsVM",formPhase2GoalId:"1lSIyrw2caxPqGx7Zme0yws18kndgbgwR07hI4_2jrwE"},{imageSrc:"images/beautiful/unipi.be9227f0.jpg",formPhase1ActionId:"1cRXof5_aL4gmN57FsUgBXEP6nrV36SPB-J6q2aLejuU",formPhase1GoalId:"1naglzQb1zTz8bkGg1EdoeAKNIHHkT9_T57HAZWtwlg8",formPhase2ActionId:"14W2q7g3pDx7SNWvJmblJxRn4aapGhoqBopmQ-u2sjf0",formPhase2GoalId:"1EUfdTaClUU5aIBFj3Amf7_kqoxD5WrB25DhYRNW1MG4"},{imageSrc:"images/beautiful/unipr.e3d083c5.jpg",formPhase1ActionId:"1xwvcQbO1UaXkftcFvcFBdnZawCnyB-KvVoddn_iO9Vw",formPhase1GoalId:"1GRAPMefTA7BHTYIjJfYs3XEjXspB60s3gfB7XsP9LAo",formPhase2ActionId:"1JpSkuemMM-BcutSLTRw4_TqzYzL-V3uBAE4RYcszK2M",formPhase2GoalId:"1O6Jh5sRMgfzM8h6VOZ-bJLxoC_P3NNY6gA7NArRgkJk"},{imageSrc:"images/beautiful/unisa.e20b2f46.jpg",formPhase1ActionId:"1MgPnLq9kwW4MzTMks79aXFSlaBYn9GVRQzSFald_AqQ",formPhase1GoalId:"1nFxtjld4DGqSza8cS9du0BwW98bh2dE9H-2sHv7Fm84",formPhase2ActionId:"1E6E2QuAixePJclzj17Xyoy89WCU_u1VRI-LWxvtHJzA",formPhase2GoalId:"1ZlVqGPI_7wBYGYNUza8Nj71ltbkqw9ySEc6KWZuk2hU"},{imageSrc:"images/beautiful/unisg.87e9708d.jpg",formPhase1ActionId:"1O_0nYQRadt9vPNFqQ76taInx7QHveK0guAbkd2kpqSA",formPhase1GoalId:"15fCMBmg2sXd18KAd0NIYcYZ1SYjvcnEBayN1wjgLric",formPhase2ActionId:"1BStVS_N1pKOZJJt0g9XsU5c16GNTaWttj8MNKrcRbbc",formPhase2GoalId:"1QuIBCZhDaZ7bQKSdgWJez9SBVg7gdM-owN7Cu9NOUq4"},{imageSrc:"images/beautiful/unisi.a8aa729d.jpg",formPhase1ActionId:"1HUlqfqCf0EQ0IdO67w9iEK3d-ZlkeSrjZOFHZ6NLKkw",formPhase1GoalId:"199a4UfzL85V4Nupt7jBTRuSK7vqcpGjwT5ftSyt6FVQ",formPhase2ActionId:"112dpNzPsF7us7o-4KA70QJRvegGNvaeL7qvUWt9hBc4",formPhase2GoalId:"1zTpjbuqspWqIj79qJceqzrFTV53BwcjPf2ndGqYtS_U"},{imageSrc:"images/beautiful/unistrapg.f5284e1d.jpg",formPhase1ActionId:"149rZiYEjeL3oJYASwFV0yX_BJlBedLGaTQPMlbz-StQ",formPhase1GoalId:"14XXyeeZJgAXvbo_c-DzTGMbXaYf297BU568XSsSn4JA",formPhase2ActionId:"1mG_ofNvFA_sSZP8roZ2DTTxF1lhLpW5LKV5Ff7APbrE",formPhase2GoalId:"1f2QGUOmyZ3gY3w0H9Iym8zCUAvJrlptX2yGDomYIs-g"},{imageSrc:"images/beautiful/unite.3d09274a.jpg",formPhase1ActionId:"1FAnUuVTFbCXoO7wFKG1LyYx1uRZWyrJ_m_WD1st0ZEI",formPhase1GoalId:"1xK7IsD3EgpLmyia46hNgQn4RVuzs4qu_5Tiy2taU6Bo",formPhase2ActionId:"1aqEiN8SkHvdRzdIS3ZlqDXcKpWhNdxmKPUMsueyL5RQ",formPhase2GoalId:"13woEwAw72Lq3_VJETmHUr0uk3470x4PIcP3ZYgFzmkY"},{imageSrc:"images/beautiful/unitn.9504199e.jpg",formPhase1ActionId:"1iHpDwVNB6U3vdrleRkXQBbjhnS3GigeWKpgaKGtNSZ0",formPhase1GoalId:"1kqXp1Tcyof40B8V0NsYDitYt0kY4oRq8kX4X2WBPJMI",formPhase2ActionId:"1YIMKrecyw33SLVkkcqR_cFyOu-vTHOjCgesvK-GmWas",formPhase2GoalId:"1jJ_ouARqX7qoeA8-w-jCQf0j3oHmrXtw6EMy_qJrmq8"},{imageSrc:"images/beautiful/uniud.8a67a218.jpg",formPhase1ActionId:"1TqP1xzaLyo9yGe5GZDCgENDD15jxLzrDL7wXibeV9uU",formPhase1GoalId:"1mZk-REEaIIQOfdPene_lmyedPBRs8OEq-yUawi3VpVI",formPhase2ActionId:"17zZtGjM1zPKZRiAmeIsN1_aHnWQ_eofkaLfbWZsU9Xk",formPhase2GoalId:"1R8AhuOddKjL6GeyKe8en6OyXrdXKHcj8TXwvP2XIGvU"},{imageSrc:"images/beautiful/univpm.cae9fdf5.jpg",formPhase1ActionId:"1cV3PUDmFwGNrAH-948VS67nyycQ4peYUKXOyPNLDa4c",formPhase1GoalId:"1AVctIyYtSViDHeOLVgWHCj6vBVwiasaS4Lbu3M3wcq8",formPhase2ActionId:"1vECbype5PyfdTt7xc_mBwS4eTxSxooluYwi77qJ3ZEA",formPhase2GoalId:"1snh-Iqs4ypsImSoCWhIaethYEwixA1u55hPQajk_NNQ"}],d=[{imageSrc:"images/ugly/iuav.d1516eab.jpg",formPhase1ActionId:"1ch0oAEBmylSvMtyJ7FVfWklP9pBaytr5xUZTqhqivv0",formPhase1GoalId:"1wlVVXDcQf87WZTTrZHHRe-MWLbOfIa9HlySwLRuG8JY",formPhase2ActionId:"1_WQx9w6UhFeQS0GazV3nkl0CGq62Cc3_FFa8MxgwQl8",formPhase2GoalId:"1yeSPq5cr5KIP4W3btnsiU9DWvpoJvC56cCViBvN1Arg"},{imageSrc:"images/ugly/liuc.b16c1ad6.jpg",formPhase1ActionId:"1Lnwa9FlVb29C5kinnTLIisQFv3ShCrzTvKgE3FyI6Y0",formPhase1GoalId:"12lwOz-b6W_yoKYMQCMwDgjlMMQhyrRr7LoZwfaeC32A",formPhase2ActionId:"11YmgI1JO2EfxQq4_jCHjRJ-HWvJ65dZlG-kWrTTAhgo",formPhase2GoalId:"1OC6OnGx91v4U6bmLiy1kHAfGo4iiBjE5NZo89hPQ8gM"},{imageSrc:"images/ugly/sumitalia.7b100dc7.jpg",formPhase1ActionId:"1XfpYK7vxv_DYRPGgZtShjr4m0aUxlVKH6K6_i6CyIQI",formPhase1GoalId:"1zsxJKAIWY3YxtK3shz0HxhsboLB2oHrb4HSA2aYr3uI",formPhase2ActionId:"1aQWqatd9XxABRUrWjb94tJZ6ayP_hsri_T9njI_51kI",formPhase2GoalId:"1f9WtY8eaHyNtHTSzz5O2BJnarBhYDI0fZgsABQIvyZU"},{imageSrc:"images/ugly/uniba.d9afe647.jpg",formPhase1ActionId:"1H2rsPnZuR5sXiJ6g0AQojrTLRBai2nnhvrOIBkiZ2-I",formPhase1GoalId:"1dfsI1JBOVAERU_dD_RLwaoL7KoTXO3oHJirb5pGhhDk",formPhase2ActionId:"1gXPFLoeUKaX2yayo8P2zCg4ARjMVi6AxBcQlqAL7u6o",formPhase2GoalId:"1Na0-TtwJO1gLiEb6kYhrWa0XREuw7WoRCObTXPQnDYs"},{imageSrc:"images/ugly/unibas.39a11529.jpg",formPhase1ActionId:"1v_quAai8htYBW-PFVYP0o2Q-j2khkAk2pnYp9R_lld0",formPhase1GoalId:"1w8YGzjNqkqZtHe5mG_0KbS5Ko2u4yCFrIt696JySlKg",formPhase2ActionId:"1U9LM0HArKZY-NeGz0UslXNKnx4H8N_CvVUkeEMOT88Y",formPhase2GoalId:"16tr3F-U_-fIRls3Cq-aoQSDTDaQoXplbiKC9Q2hY7RY"},{imageSrc:"images/ugly/unica.b6b36f76.jpg",formPhase1ActionId:"1Sv1VxBy4w9XoKe1JzShQXsKd_J61eEHxx9Q0IsV4y70",formPhase1GoalId:"1BVhFL8c30uwj1Z_14Mpe4n-M_xQ2H4XuHN9_87YUiec",formPhase2ActionId:"1YVlMp8zCvrk_pqBYQCDMrmBdH8tF2tMAZ8XAe6eu2TI",formPhase2GoalId:"1YjrIQWXmLmjqK02f8BLn4XNcXYaiwd07gVdZyZ4KGxY"},{imageSrc:"images/ugly/unical.509855e6.jpg",formPhase1ActionId:"1krTOICGqpH2arylIDLEzeTcqiYL9dFD6LmN4pt0f1Iw",formPhase1GoalId:"1K8DNBiE0hJQO8I23ivsVcdbeI-u396Hn5MN1Vyu6Cxo",formPhase2ActionId:"1FK8ICJH1m9EEv5CPUa8_aavSoLr4rizQPGqv4bdCFgQ",formPhase2GoalId:"10hu18UvvmaTWzxNJMmRtzyniFtnMbnI-o53W7PnN0EM"},{imageSrc:"images/ugly/unicam.7b40d9a6.jpg",formPhase1ActionId:"1NbVgEFOzH91jj8_TxrmzMm8qCHmDEDQWr08-51eFeOs",formPhase1GoalId:"1o0UK5HHPVpK6sGi6tac5TBe-SL4xCGq6ims9e-2xhT0",formPhase2ActionId:"1_QvbjtE3lEX1AilSJVYrezUMn1JCoZ1lT5V_MYVDkBM",formPhase2GoalId:"1bUIRMleVtCUqFK_gRKQML2wJx5hQQ_YSuA4jt2n6scs"},{imageSrc:"images/ugly/unict.9d3752e5.jpg",formPhase1ActionId:"1Ad7ZIYfz5RZl3nkQnGfjEZMjDXseOUpJ7Zw0U3bkssI",formPhase1GoalId:"10AL6jNN_tQBWeChSrLLqz52nCFINQCg0dpLiY98pgXs",formPhase2ActionId:"1dK_3E8e4X6MP0LZ4Xyv7VoeSGsKIp9k0OZD7IWJVqkQ",formPhase2GoalId:"1lmEIJ13TKr3tmXLZt03HDOR3_dqnp-ZBMzYZaTH9mHc"},{imageSrc:"images/ugly/unifg.a964cad8.jpg",formPhase1ActionId:"1phx0NLlFbNdkboELvyZr9TjEv2Mrng8pxgp5t11VWMw",formPhase1GoalId:"1i2-WI-aPFfoycTzMSVvvQeQ651QO2Rqfx8yhUa9Iz50",formPhase2ActionId:"1-Z0S3UoWQkrcC0Eeqke74F7Z4bewuyguKzik-hZBkFg",formPhase2GoalId:"1FbRoJCNTL7IB025VPowBteiDaXjizWNv-HpQJl8EyGo"},{imageSrc:"images/ugly/unimi.dc5131f3.jpg",formPhase1ActionId:"1gxFWrDWglpCp8zbGP_uDlecC6rAQxSahHDHU9BRDHow",formPhase1GoalId:"1NLnnvJnBxzpumvTGYfDEqU9vY53P77ZN94HSWeXLibM",formPhase2ActionId:"1tYrRPNFXaiyBUtyd2ecMn_l6nsH_u6jQgCnXSGkteVU",formPhase2GoalId:"1gFFM9jqDKLJsKwRvU2h-Rr05EdPwpUOeOp3HYQP8CIQ"},{imageSrc:"images/ugly/unimib.ee2be013.jpg",formPhase1ActionId:"1-qhIHAFR5sSvQ-33Z--ZXwEwwXjrGhGMIMjrf7bgu_s",formPhase1GoalId:"1C1ss1CBjFh8qJ0ydMINya7hbYn1MWlAv9L8T2OsSqEk",formPhase2ActionId:"1PAASVjPXgaFnMg75c0x1XJsW4Rl1cgwcdZI0B5crOSs",formPhase2GoalId:"1-seLU-dGpqamFx0Xk7mlirsjrqZfEoifRmL2P4F2qpI"},{imageSrc:"images/ugly/unimore.253da3e7.jpg",formPhase1ActionId:"133E3DH4Kp2VR58z42yOTYlssClDgfB-ZU6JyeGhRjag",formPhase1GoalId:"1A9Z2jnKGUKVdlHyp3-Uf-ejff4pEJD4ogADBBAt_SWg",formPhase2ActionId:"16Y2WjoHfT6eTD_AEprPs_B4DtO0LMbc2gzCeEX1edcc",formPhase2GoalId:"1Ot9tggcROUcKfAMUF2cOfonBjXoJJy77lUDd6qx1NM4"},{imageSrc:"images/ugly/uninsubria.050a3038.jpg",formPhase1ActionId:"1XrzSa_4DNPtoa5KBJpFpoQ9m1JzEiEGud5nz5V4-f9E",formPhase1GoalId:"1zprr02qJcYLUK8ug0gIaF4FKlYZ8a-r_IRTRSUnyaKU",formPhase2ActionId:"1-Pi_yRej1gbSWsObyCdY6Jd6nvVmtbhrF93UuZ3yJsE",formPhase2GoalId:"1OXkDKxZfz1lSz7d1guSYASAx30vLoDSuncOmspEADSg"},{imageSrc:"images/ugly/unior.c668a8aa.jpg",formPhase1ActionId:"1N7a3NttsUmdZDyQgaxL_unqHjwJNfKFgMSUzNu8GTLY",formPhase1GoalId:"1bKhTuDMeMsrSmjX_h1vsic0zOAcdL0mUFqt56zhVjrg",formPhase2ActionId:"1e6mnXOh0USKOf-GQhBTaMKTq14Wph5y07DBthOslQOc",formPhase2GoalId:"1rBBZqz6teF6rP0KsJOnwOGhgXdWwOrL0KmHmVlO3obc"},{imageSrc:"images/ugly/unirc.f1d54806.jpg",formPhase1ActionId:"1OgOION_kUUxXaUBVRjPcMll0ntKQPt7YYE3Ure_mhQA",formPhase1GoalId:"12w5jZ--Q2lE_ZDqOqu1Mlf2BZ_b5VAdz1_lYDJnhNdQ",formPhase2ActionId:"1Cfrgity3VbjMicTu2JRVyqDE4wP4Pe85b7iNy0d1gJk",formPhase2GoalId:"1Q0N3_2VGTb_p-rlHNSOO-jb8vzILz01Fdi41l--LdTw"},{imageSrc:"images/ugly/uniroma1.5522bd8b.jpg",formPhase1ActionId:"1KglR5vmIvTOoCujiPXP-gp8sn72oA_C_T9AtASywGzs",formPhase1GoalId:"1LoIiC1IRDcs_HOT2wnobDLWKiNlMrVYHsXdbSkEMMC0",formPhase2ActionId:"1Ngh29Ws1u7UtzBrfIvEPehkO1jddRXJkl_5E5QfbdZU",formPhase2GoalId:"1R63p07qGoMxJyT8cod1nBU2172wBn31tFmK-em5Qncw"},{imageSrc:"images/ugly/uniroma2.c007d847.jpg",formPhase1ActionId:"1RRAsDPI-tF1kYPbJKzlMlK9JnSjfjznPPRxJLsgaH5E",formPhase1GoalId:"1W40ZtFnRmvR-Xoi_5-vxcQd7hiS8h8ew6UOQMqq6PiI",formPhase2ActionId:"1d_eM5lAcNTVllRj5R8yQFzUGwpvtd_G_KS7H8UsLtFk",formPhase2GoalId:"1DMaI3QMnzLHRdPe6GUfKjI1xRozgBUmJ3bzPHsBtS9g"},{imageSrc:"images/ugly/unisalento.e745d813.jpg",formPhase1ActionId:"1cgsgLVnuRMf7ro5KedMoLrtGMkcRIWfOW2FiRnCkzZs",formPhase1GoalId:"1eHjitXIq775D4JzCgwNGqOE9A12HqO0KTYp18_tU-JY",formPhase2ActionId:"1TDYjOlyxP2eYtUwup9UwFONDO_XTYXk54UsWzdMSxm0",formPhase2GoalId:"19FObIzOM4fHkqtlRhRmPbrwNJHNvfJQXdgnT-EC-ZE8"},{imageSrc:"images/ugly/unisannio.43e5ff23.jpg",formPhase1ActionId:"1Fz2zoXiaFfhRgOjn8gcTX2-z0EyGX8bFtWLR_1peeqA",formPhase1GoalId:"1L92-QwZ6sQ1m3wnGRLXLpn9HAhPyzYx29koyBE5iQyw",formPhase2ActionId:"18en6UtQVLk1bclRduAtOETB0VFNVW2a5DDybsiaFrR4",formPhase2GoalId:"1qnRRxSEmRLohCldRhwBatKWDfARiuJBprMbM-pIUeEA"},{imageSrc:"images/ugly/unisob.4d429f48.jpg",formPhase1ActionId:"1sYnGzcYCVU2GLP6GAzcchnKq81Hrnf0RzrVEJ8n7J10",formPhase1GoalId:"1ArP12Rz0-5OgfXb_MmIVijLibYU7XyVp8BTUh0S2JJs",formPhase2ActionId:"1sAuqIt0AbuM0P4QYo5tqfy4ksUYoacKB4fRTtXRTvSE",formPhase2GoalId:"1kXgcLaHpcHqxJIEYsx9wNXVCaEV7lpfvqUtdlV7rPWs"},{imageSrc:"images/ugly/uniss.c5de94a6.jpg",formPhase1ActionId:"1bKcNXJfnTx5_VKiWSm81QYklU0G8kc9pq7rwNqaPVyw",formPhase1GoalId:"18CRK6uaKltuWw3xjF3vhmJFDnlCPlMLS2ljAfoxyzxM",formPhase2ActionId:"1qgIxa_ME7ZPFfjIffMi5uFRiy6Npqog376keAuYVDrM",formPhase2GoalId:"1FFAnTZcXtERn6wMKzF5_uuWlwiok4gb88IX-lE1tvtw"},{imageSrc:"images/ugly/units.f5878d8d.jpg",formPhase1ActionId:"1rZhiYQ7j995_RgPXoNYj_wjc-9ufjjHHR-eLn2Hvvv8",formPhase1GoalId:"1w2DZBoa9f6Ds5QKvS7OEF9UQx7nufWlbh9P6yWvBVWU",formPhase2ActionId:"1k-_cRR75swr4fQ2VdvXE8d6dzK68TuHLJwKgvg7ZzYo",formPhase2GoalId:"1TQa26qHNuzb1dbFkmxJxEqDD4EbS3hfixFrmRn6aPFs"},{imageSrc:"images/ugly/unitus.b0a65f63.jpg",formPhase1ActionId:"1p_1KjcJgHkYfYwCJf1DRz9udD8jdOIn6NL905qqMGns",formPhase1GoalId:"1GSb0Y5o6xeNVfjGvAP1oNDxK9W6aBBjC7P1CPrGxUo4",formPhase2ActionId:"1bcFER848pGdYeJdjUgyFt2qth2d8cmVffZyV841Mevk",formPhase2GoalId:"1e9TkGlIco5SdEdJJ9o8VbDXEXEos_7iGjSWaZGJYVLs"},{imageSrc:"images/ugly/univaq.e78efbc6.jpg",formPhase1ActionId:"18Iv285ObOI50t6J3h2XJIvjesbyihn1m6OKOICIfsm4",formPhase1GoalId:"1M6VxHaZ8oCv1NhoIx8Kz2lcO0WrQAgz8pUSWiWE_8sg",formPhase2ActionId:"1gLDZcfr95w1GoV7VeKwDKfVSROjcWDb2Jt25wPRropg",formPhase2GoalId:"1MmjugGJuv3uO1AKMC3KTiLk4VR5gp2qrsNGbt6n4SSI"}],e=[{imageSrc:"images/test_images/iulm.58afa2af.jpg",formPhase1ActionId:"122uWT0zcpWTqYHIDPpwCFa_R7ucJ0KSHc76uOwf1jC8",formPhase2ActionId:"1Yo0qMqTeg4FPXUbdoOsRUeaI-WNkpv1JZ1yYod0mMa8"},{imageSrc:"images/test_images/iusspavia.195f2580.jpg",formPhase1ActionId:"1ZY_9CngRsPsn9QsCwcxGdsT7lfTsEeQQFK0YFGpc9NY",formPhase2ActionId:"1JLzHQIqxQAZ6wIDgBSpMrNN8Vu42dJ8KXorVrESHAa0"},{imageSrc:"images/test_images/lumsa.f35fdaf7.jpg",formPhase1ActionId:"16fTucg3EU6azjCP4t_buGxHTE5Yhjp8OFOy9bf_kqoI",formPhase2ActionId:"1cxiwuxC5pXjk1pnexyS8OMK_fs9sCVADX8IrGXBkg64"},{imageSrc:"images/test_images/polimi.813069ac.jpg",formPhase1ActionId:"1Hr_eVRCuaT4FoqXmnGWIN_fqXMFdoHNz3Zb525H5_u4",formPhase2ActionId:"1nP6gOaUl4VTuAB2r90xlsdWtNa06y1hOQdFelK8NfHk"},{imageSrc:"images/test_images/polito.8b723d19.jpg",formPhase1ActionId:"1id55UFNwz25_YRCgWeDIYt3Itp64XS8zbV2KhFh8n10",formPhase2ActionId:"1KXQ3OeEWBsdht6URhisPGErYZCmIBHY4yP7bg9FKbEU"},{imageSrc:"images/test_images/unibs.d6ae546a.jpg",formPhase1ActionId:"1vw3KtMbGGuXnVDp9qkbT4nRc1bHTkcCnuAYJBYI0JtU",formPhase2ActionId:"1hUQrHzn_HuCn3IIB0_0GmQX4D4777HAbYjyyOvkgnBI"},{imageSrc:"images/test_images/unicatt.ef529fd3.jpg",formPhase1ActionId:"1TFxZN1wLjiR94Rt7kjkRocdS6PyaH2K-j3E-VYN5He8",formPhase2ActionId:"1Ds_3LjdBcLLTTD_bUqVXq4-B7G5i4I_8cH-okPl89QI"},{imageSrc:"images/test_images/uniurb.e6408170.jpg",formPhase1ActionId:"1z9IbNebepL6a3dm3hUoJlYcf46RAcwzWTCIhtPfa_G8",formPhase2ActionId:"11r6oxs4iCUAzBWjDboWF_YPenHH5r5CfJcGnJp76QSs"},{imageSrc:"images/test_images/unive.ac908c8e.jpg",formPhase1ActionId:"1L8jmxTnlqFr1FonBtcFH7U66jInuujYrKwOuM9dquJk",formPhase2ActionId:"1_XfCJljrMyoQnBvQRmPhoL9zCa2ecyJa0mtdIwef33c"},{imageSrc:"images/test_images/universitaeuropeadiroma.22f526eb.jpg",formPhase1ActionId:"1HOnoy5gv-fLIBO-vr8mkNYf_OLknUh3I_Bfkt70exWo",formPhase2ActionId:"1sUuwIG69aO-1v_Cf73V6tgNt7_VsTung-Md7ZNjdVWo"}];return b}function preloaderSrv(a,b){function c(b){this.imageLocations=b,this.imageCount=this.imageLocations.length,this.loadCount=0,this.errorCount=0,this.states={PENDING:1,LOADING:2,RESOLVED:3,REJECTED:4},this.state=this.states.PENDING,this.deferred=a.defer(),this.promise=this.deferred.promise}return c.preloadImages=function(a){var b=new c(a);return b.load()},c.prototype={constructor:c,isInitiated:function(){return this.state!==this.states.PENDING},isRejected:function(){return this.state===this.states.REJECTED},isResolved:function(){return this.state===this.states.RESOLVED},load:function(){if(this.isInitiated())return this.promise;this.state=this.states.LOADING;for(var a=0;a<this.imageCount;a++)this.loadImageLocation(this.imageLocations[a].imageSrc);return this.promise},handleImageError:function(a){this.errorCount++,this.isRejected()||(this.state=this.states.REJECTED,this.deferred.reject(a.imageSrc))},handleImageLoad:function(a){this.loadCount++,this.isRejected()||(this.deferred.notify({percent:Math.ceil(this.loadCount/this.imageCount*100),imageLocation:a}),this.loadCount===this.imageCount&&(this.state=this.states.RESOLVED,this.deferred.resolve(this.imageLocations)))},loadImageLocation:function(a){var c=this,d=$(new Image).load(function(a){b.$apply(function(){c.handleImageLoad(a.target.src),c=d=a=null})}).error(function(a){b.$apply(function(){c.handleImageError(a.target.src),c=d=a=null})}).prop("src",a)}},c}angular.module("uxExam",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$sceDelegateProvider",function(a,b){a.when("/home",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"vm"}).when("/home/:beautifulness/:mode",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"vm"}).when("/test1/:beautifulness/:mode",{templateUrl:"views/test1.html",controller:"Test1Ctrl",controllerAs:"vm"}).when("/images/:beautifulness/:mode",{templateUrl:"views/images.html",controller:"ImagesCtrl",controllerAs:"vm"}).when("/test2/:beautifulness/:mode",{templateUrl:"views/test2.html",controller:"Test2Ctrl",controllerAs:"vm"}).when("/phase2/:beautifulness/:mode",{templateUrl:"views/phase2.html",controller:"PhaseTwoCtrl",controllerAs:"vm"}).when("/questions/:beautifulness/:mode",{templateUrl:"views/questions.html",controller:"QuestionsCtrl",controllerAs:"vm"}).when("/thanks",{templateUrl:"views/thanks.html"}).otherwise({redirectTo:"/home"}),b.resourceUrlWhitelist(["self","https://docs.google.com/forms/"])}]),angular.module("uxExam").controller("MainCtrl",MainCtrl),angular.module("uxExam").controller("AboutCtrl",AboutCtrl),AboutCtrl.$inject=["$routeParams"],angular.module("uxExam").controller("Test1Ctrl",Test1Ctrl),Test1Ctrl.$inject=["$interval","$sce","ImagesSrv","preloaderSrv","$routeParams","$location"],angular.module("uxExam").controller("ImagesCtrl",ImagesCtrl),ImagesCtrl.$inject=["$interval","$sce","ImagesSrv","preloaderSrv","$routeParams","$location"],angular.module("uxExam").controller("Test2Ctrl",Test2Ctrl),Test2Ctrl.$inject=["$interval","$sce","ImagesSrv","preloaderSrv","$routeParams","$location"],angular.module("uxExam").controller("PhaseTwoCtrl",PhaseTwoCtrl),PhaseTwoCtrl.$inject=["$interval","$sce","ImagesSrv","preloaderSrv","$routeParams","$location"],angular.module("uxExam").controller("QuestionsCtrl",QuestionsCtrl),QuestionsCtrl.$inject=["$sce","ImagesSrv","preloaderSrv","$routeParams","$location"],angular.module("uxExam").factory("ImagesSrv",ImagesSrv),ImagesSrv.$inject=[],angular.module("uxExam").factory("preloaderSrv",preloaderSrv),preloaderSrv.$inject=["$q","$rootScope"],angular.module("uxExam").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <div class="row"> <div class="col-sm-12"> <h1>Grazie...</h1> <p>...per aver accettato di partecipare a questo esperimento.</p> <h3>Come funziona</h3> <p>Il funzionamento &egrave; molto semplice: ti verranno mostrate una serie di immagini di alcune home page di Universit&agrave; italiane. Una volta visualizzata un\'immagine ti verr&agrave; proposto un questionario a cui dovrai rispondere prima di procedere con l\'immagine successiva.</p> <div class="bs-callout bs-callout-warning"> <h4>Ti chiediamo di fare particolare attenzione quando compili il questionario</h4> <p>Prima di cliccare il tasto <span class="btn btn-default">Prossimo</span>, che si trova al di sotto del questionario stesso, ricordati di premere il tasto <span class="jfk-button jfk-button-action">Submit</span> all\'interno del questionario. <br> Se per caso dovessi premere il tasto <span class="btn btn-default">Prossimo</span> prima di aver inviato le risposte al questionario, queste andranno perse rendendo vano il <strong>tuo</strong> lavoro!</p> </div> <div class="divide100 text-center"> <a class="btn btn-primary" ng-href="/#/test1/{{vm.beautifulness}}/{{vm.mode}}">Sono pronto ad iniziare!</a> </div> </div> </div> </div>'),a.put("views/images.html",'<div class="container" ng-if="vm.step == -1"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Inizio fase 1</h2> <p>Adesso inizia l\'esperimento vero e proprio. Lo svolgimento è identico a quello del test appena completato.</p> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.starter()">Clicca qui per procedere</a> </div> </div> </div> </div> <div ng-if="vm.isLoading && vm-step >= 0"> <p class="text-center">Caricamento immagini in corso...</p> </div> <div class="container parent-container" ng-if="!vm.isLoading" ng-hide="vm.step == 2"> <div class="ready step-container" ng-if="vm.step == 0"> <div class="bs-callout bs-callout-warning"> <p ng-if="vm.mode == \'g\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni specifiche sull\'ateneo di destinazione, per esempio quali corsi propone. Decidi di visitare il sito dell\'università per questo motivo. </p> <p ng-if="vm.mode == \'a\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni sull\'ateneo di destinazione. Decidi di visitare il sito dell\'università per questo motivo. </p> </div> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.viewChanger()">Vai all\'immagine {{vm.currentImage}}/{{vm.imagesCount}}</a> </div> </div> <div class="set step-container" ng-if="vm.step == 1"> <div class="text-center"> <h2 class="countdown">{{vm.missingSeconds}}</h2> </div> </div> <div class="results text-center" ng-if="vm.step == 3"> <h3>Rispondi al questionario</h3> <div> <iframe ng-src="{{vm.formSrc}}" width="760" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <div class="divide100"> <h4>Ricordati di inviare il questionario prima di procedere</h4> <button class="btn btn-default" ng-click="vm.viewChanger()"> Prossimo </button> </div> <div class="divide100"></div> </div> </div> <div class="go" ng-if="vm.step == 2 && vm.isSuccessful"> <img class="screenshot" ng-src="{{vm.imageSrc}}"> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/phase2.html",'<div class="container" ng-if="vm.step == -1"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Inizio fase 2</h2> <p>Adesso inizia la fase 2 dell\'esperimento. Lo svolgimento è identico a quello del test appena completato.</p> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.starter()">Clicca qui per procedere</a> </div> </div> </div> </div> <div class="container parent-container" ng-if="vm.step == 0"> <div class="ready step-container"> <div class="bs-callout bs-callout-warning"> <p ng-if="vm.mode == \'g\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni specifiche sull\'ateneo di destinazione, per esempio quali corsi propone. Decidi di visitare il sito dell\'università per questo motivo. </p> <p ng-if="vm.mode == \'a\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni sull\'ateneo di destinazione. Decidi di visitare il sito dell\'università per questo motivo. </p> </div> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.imageViewer()">Vai all\'immagine {{vm.currentImage}}/{{vm.imagesCount}}</a> </div> </div> </div> <div ng-if="vm.step == 1 && vm.isSuccessful"> <div class="go"> <img class="screenshot" ng-src="{{vm.imageSrc}}"> </div> <div class="text-center"> <h3>Rispondi al questionario</h3> <div> <iframe ng-src="{{vm.formSrc}}" width="760" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <div class="divide100"> <h4>Ricordati di inviare il questionario prima di procedere</h4> <button class="btn btn-default" ng-click="vm.viewChanger()"> Prossimo </button> </div> <div class="divide100"></div> </div> </div>'),a.put("views/questions.html",'<div class="container"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Ultimo passo</h2> <p> Il test è finito, ti ringraziamo di aver tenuto duro fino a questo punto. L\'ultimo sforzo che resta da fare è rispondere a qualche domanda di carattere anagrafico, dopodiché ti lasceremo andare senza ulteriori domande. Trovi il questionario in questa stessa pagina. </p> <div class="text-center"> <iframe ng-src="{{vm.formSrc}}" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <div class="text-center divide100"> <h4>Ricordati di inviare il questionario prima di procedere</h4> <button class="btn btn-default" ng-click="vm.goToThankYouPage()"> Fine </button> </div> <div class="divide100"></div> </div> </div> </div>'),a.put("views/test1.html",'<div class="container" ng-if="vm.step == -1"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Test fase 1</h2> <p>Adesso ti verranno mostrate 10 immagini di test che servono solamente per farti abituare. Ogni immagine sarà preceduta da un countdown di 3 secondi e verrà visualizzata per 0.5 secondi. Al termine della visualizzazione ti sarà mostrato un questionario composto da una domanda; ricordati inviarlo cliccando sul bottone <span class="jfk-button jfk-button-action">Submit</span> prima di procedere all\'immagine successiva.</p> <p>Prima del coutdown ti verrà presentato un possibile caso d\'uso di un utente reale. Leggilo attentamente e cerca di immedesimarti nell\'utente descritto prima di procedere. In questa fase il caso d\'uso sarà sempre lo stesso, ma ti verrà presentato sempre per permetterti di rileggerlo nel caso tu ne abbia bisogno.</p> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.starter()">Clicca qui per procedere</a> </div> </div> </div> </div> <div ng-if="vm.isLoading && vm.step >= 0"> <p class="text-center">Caricamento immagini in corso...</p> </div> <div class="container parent-container" ng-if="!vm.isLoading" ng-hide="vm.step == 2"> <div class="ready step-container" ng-if="vm.step == 0"> <div class="bs-callout bs-callout-warning"> <p ng-if="vm.mode == \'g\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni specifiche sull\'ateneo di destinazione, per esempio quali corsi propone. Decidi di visitare il sito dell\'università per questo motivo. </p> <p ng-if="vm.mode == \'a\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni sull\'ateneo di destinazione. Decidi di visitare il sito dell\'università per questo motivo. </p> </div> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.viewChanger()">Vai all\'immagine {{vm.currentImage}}/{{vm.imagesCount}}</a> </div> </div> <div class="set step-container" ng-if="vm.step == 1"> <div class="text-center"> <h2 class="countdown">{{vm.missingSeconds}}</h2> </div> </div> <div class="results text-center" ng-if="vm.step == 3"> <h3>Rispondi al questionario</h3> <div> <iframe ng-src="{{vm.formSrc}}" width="760" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <div class="divide100"> <h4>Ricordati di inviare il questionario prima di procedere</h4> <button class="btn btn-default" ng-click="vm.viewChanger()"> Prossimo </button> </div> <div class="divide100"></div> </div> </div> <div class="go" ng-if="vm.step == 2 && vm.isSuccessful"> <img class="screenshot" ng-src="{{vm.imageSrc}}"> </div>'),
a.put("views/test2.html",'<div class="container" ng-if="vm.step == -1"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Test fase 2</h2> <p> Adesso ti verrà mostrata un\'immagine di test per farti prendere confidenza con la fase 2 dell\'esperimento. L\'immagine rimarrà visibile a schermo per quanto tempo desideri. Scrollando dopo l\'immagine, troverai il questionario a cui potrai rispondere continuando a guardare l\'immagine. Prima di visualizzare l\'immagine potrai sempre rileggere il caso d\'uso a cui fare riferimento. </p> <p> Come sempre, ricordati di inviare il questionario cliccando sul bottone <span class="jfk-button jfk-button-action">Submit</span> prima di procedere all\'immagine successiva. </p> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.starter()">Clicca qui per procedere</a> </div> </div> </div> </div> <div class="container parent-container" ng-hide="vm.step == 1"> <div class="ready step-container" ng-if="vm.step == 0"> <div class="bs-callout bs-callout-warning"> <p ng-if="vm.mode == \'g\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni specifiche sull\'ateneo di destinazione, per esempio quali corsi propone. Decidi di visitare il sito dell\'università per questo motivo. </p> <p ng-if="vm.mode == \'a\'"> Immagina di essere uno studente che ha deciso di cambiare università. Vuoi ottenere delle informazioni sull\'ateneo di destinazione. Decidi di visitare il sito dell\'università per questo motivo. </p> </div> <div class="text-center"> <a class="btn btn-primary" ng-click="vm.imageViewer()">Vai all\'immagine {{vm.currentImage}}/{{vm.imagesCount}}</a> </div> </div> </div> <div ng-if="vm.step == 1 && vm.isSuccessful"> <div class="go"> <img class="screenshot" ng-src="{{vm.imageSrc}}"> </div> <div class="text-center"> <h3>Rispondi al questionario</h3> <div> <iframe ng-src="{{vm.formSrc}}" width="760" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <div class="divide100"> <h4>Ricordati di inviare il questionario prima di procedere</h4> <button class="btn btn-default" ng-click="vm.viewChanger()"> Prossimo </button> </div> <div class="divide100"></div> </div> </div>'),a.put("views/thanks.html",'<div class="container"> <div class="row"> <div class="col-sm-12"> <h2 class="text-center">Grazie</h2> <p> Ti ringraziamo per aver partecipato, sappi che per noi il tuo aiuto significa molto. </p> </div> </div> </div>')}]);