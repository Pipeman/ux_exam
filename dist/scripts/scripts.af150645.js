"use strict";function MainCtrl(){var a=this;a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}function AboutCtrl(){var a=this;a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}function ImagesCtrl(a,b,c,d){function e(){i.step!=j?(i.step++,i.imageSrc=m[k].imageSrc,console.log(i.imageSrc),f()):i.step=0}function f(){var b=l;i.missingSeconds=b,a(function(){b--,i.missingSeconds=b,0===b&&(i.step++,g())},1e3,3)}function g(){a(function(){h()},500,1)}function h(){i.formSrc=b.trustAsResourceUrl("https://docs.google.com/forms/d/"+m[k].formItId+"/viewform?embedded=true"),k++,i.step++}var i=this,j=3,k=0,l=3,m=c.beautifulImages;return i.step=0,i.imageSrc="",i.formSrc="",i.missingSeconds=0,i.isLoading=!0,i.isSuccessful=!1,d.preloadImages(m).then(function(a){i.isLoading=!1,i.isSuccessful=!0,i.viewChanger=e},function(a){i.isLoading=!1,i.isSuccessful=!1,console.error("Image Failed",a),console.info("Preload Failure")}),i}function ImagesSrv(){var a={},b=[{imageSrc:"images/beautiful/hunimed.849aa8dc.jpg",formItId:"1mpOajNNwOul6aVI7-AcHMFit_mNFkX_8D31iUpju_AI",formEngId:"14nB_QgI1GCsWaPih3v2Iqq-J3lcYMlzWouOilLjtn28"},{imageSrc:"images/beautiful/imtlucca.f8ab1984.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/iusspavia.195f2580.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/luiss.f7e0efd3.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/lum.6d52a58c.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/lumsa.f35fdaf7.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/poliba.34bc1f03.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/polimi.813069ac.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/polito.8b723d19.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/santannapisa.80d3071a.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/sns.a4dddac9.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unibg.bda6ae12.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unibo.6538969e.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unibocconi.a46c8f0b.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unibs.d6ae546a.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unicampus.d596beda.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unicas.9903dc1a.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unich.ad6a4380.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unicz.12dd7a6b.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unife.b78a199d.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unifi.b014b967.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unige.5dfb9073.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unilink.675044a2.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unimc.73c29a91.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unime.974d79d6.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unimol.23e46af1.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unina.b96d97f7.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unina2.a65a24b1.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unint.3fa3a591.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipa.0dcd23d5.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/uniparthenope.ff93671b.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipd.c18d91ed.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipg.8ba0d5dd.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipi.be9227f0.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipo.ddd070a2.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipr.e3d083c5.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unipv.35cf8357.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/uniroma3.f23dc43c.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/uniroma4.e64e3c0c.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unisa.e20b2f46.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unisg.87e9708d.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unisi.a8aa729d.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unisr.164cd89d.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unisstral.7b1264f5.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unistrapg.f5284e1d.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unistrasi.54dfd3e7.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unite.3d09274a.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unitn.9504199e.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/unito.173015e9.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/uniud.8a67a218.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/univpm.cae9fdf5.jpg",formItId:"",formEngId:""},{imageSrc:"images/beautiful/univr.ed43ed25.jpg",formItId:"",formEngId:""}],c=[{imageSrc:"images/ugly/iuav.d1516eab.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/iulm.58afa2af.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/liuc.b16c1ad6.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/sumitalia.7b100dc7.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uniba.d9afe647.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unibas.39a11529.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unica.b6b36f76.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unical.509855e6.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unicam.7b40d9a6.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unicatt.ef529fd3.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unict.9d3752e5.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unifg.a964cad8.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unimi.dc5131f3.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unimib.ee2be013.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unimore.253da3e7.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uninsubria.050a3038.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unior.c668a8aa.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unirc.f1d54806.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uniroma1.5522bd8b.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uniroma2.c007d847.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unisalento.e745d813.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unisannio.43e5ff23.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unisob.4d429f48.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uniss.c5de94a6.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/units.f5878d8d.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unitus.b0a65f63.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/uniurb.e6408170.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/univaq.e78efbc6.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/unive.ac908c8e.jpg",formItId:"",formEngId:""},{imageSrc:"images/ugly/universitaeuropeadiroma.22f526eb.jpg",formItId:"",formEngId:""}];return a.beautifulImages=b,a.uglyImages=c,a}function preloaderSrv(a,b){function c(b){this.imageLocations=b,this.imageCount=this.imageLocations.length,this.loadCount=0,this.errorCount=0,this.states={PENDING:1,LOADING:2,RESOLVED:3,REJECTED:4},this.state=this.states.PENDING,this.deferred=a.defer(),this.promise=this.deferred.promise}return c.preloadImages=function(a){var b=new c(a);return b.load()},c.prototype={constructor:c,isInitiated:function(){return this.state!==this.states.PENDING},isRejected:function(){return this.state===this.states.REJECTED},isResolved:function(){return this.state===this.states.RESOLVED},load:function(){if(this.isInitiated())return this.promise;this.state=this.states.LOADING;for(var a=0;a<this.imageCount;a++)this.loadImageLocation(this.imageLocations[a].imageSrc);return this.promise},handleImageError:function(a){this.errorCount++,this.isRejected()||(this.state=this.states.REJECTED,this.deferred.reject(a.imageSrc))},handleImageLoad:function(a){this.loadCount++,this.isRejected()||(this.deferred.notify({percent:Math.ceil(this.loadCount/this.imageCount*100),imageLocation:a}),this.loadCount===this.imageCount&&(this.state=this.states.RESOLVED,this.deferred.resolve(this.imageLocations)))},loadImageLocation:function(a){var c=this,d=$(new Image).load(function(a){b.$apply(function(){c.handleImageLoad(a.target.src),c=d=a=null})}).error(function(a){b.$apply(function(){c.handleImageError(a.target.src),c=d=a=null})}).prop("src",a)}},c}angular.module("uxExam",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$sceDelegateProvider",function(a,b){a.when("/",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/images",{templateUrl:"views/images.html",controller:"ImagesCtrl",controllerAs:"images"}).otherwise({redirectTo:"/"}),b.resourceUrlWhitelist(["self","https://docs.google.com/forms/"])}]),angular.module("uxExam").controller("MainCtrl",MainCtrl),angular.module("uxExam").controller("AboutCtrl",AboutCtrl),angular.module("uxExam").controller("ImagesCtrl",ImagesCtrl),ImagesCtrl.$inject=["$interval","$sce","ImagesSrv","preloaderSrv"],angular.module("uxExam").factory("ImagesSrv",ImagesSrv),ImagesSrv.$inject=[],angular.module("uxExam").factory("preloaderSrv",preloaderSrv),preloaderSrv.$inject=["$q","$rootScope"],angular.module("uxExam").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <div class="row"> <div class="col-sm-12"> <h1>Grazie...</h1> <p>...per aver accettato di partecipare a questo esperimento, sappi che per noi significa molto.</p> <h3>Come funziona</h3> <p>Il funzionamento &egrave; molto semplice: ti verranno mostrate una serie di immagini di alcune home page di Universit&agrave; italiane. Una volta visualizzata un\'immagine ti verr&agrave; proposto un questionario a cui dovrai rispondere prima di procedere con l\'immagine successiva.</p> <div class="bs-callout bs-callout-warning"> <h4>Ti chiediamo di fare particolare attenzione quando compili il questionario</h4> <p>Prima di clickare il tasto <span class="btn btn-default">Prossimo</span>, che si trova al di sotto del questionario stesso, ricordati di premere il tasto <span class="jfk-button jfk-button-action">Submit</span> all\'interno del questionario. <br> Se per caso dovessi premere il tasto <span class="btn btn-default">Prossimo</span> prima di aver inviato le risposte al questionario, queste andranno perse rendendo vano il <strong>tuo</strong> lavoro!</p> </div> <div class="divide100 text-center"> <a class="btn btn-primary" href="/#/images">Sono pronto ad iniziare!</a> </div> </div> </div> </div>'),a.put("views/images.html",'<div ng-if="images.isLoading"> <p class="text-center">Caricamento immagini in corso...</p> </div> <div class="parent-container" ng-if="!images.isLoading" ng-hide="images.step == 2"> <div class="ready step-container" ng-if="images.step == 0"> <div class="text-center"> <a class="btn btn-primary" ng-click="images.viewChanger()">Quando sei pronto ad iniziare clicka qui</a> </div> </div> <div class="set step-container" ng-if="images.step == 1"> <div class="text-center"> <h2 class="countdown">{{images.missingSeconds}}</h2> </div> </div> <div class="results text-center" ng-if="images.step == 3"> <h3>Rispondi al questionario</h3> <div> <iframe ng-src="{{images.formSrc}}" width="760" height="1400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> <p><strong>Ricordati di inviare il questionario prima di procedere</strong></p> <button class="btn btn-default" ng-click="images.viewChanger()"> Prossimo </button> </div> </div> <div class="go" ng-if="images.step == 2 && images.isSuccessful"> <img class="screenshot" ng-src="{{images.imageSrc}}"> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);