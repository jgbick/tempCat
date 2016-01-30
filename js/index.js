/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var catniss = angular.module('catniss', [
  'ngRoute'
]);


/*
 * SECTION - Routing for the app
 */
catniss.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
    //console.log($sceDelegateProvider.resourceUrlWhitelist(['self']));
  $routeProvider
        //find what's missing! How to we get them to the home page?
        // https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating   
      .when('/registor', {
        templateUrl: './html/registor.html',
        controller: 'registorCtrl'
    })
        .when('/login', {
        templateUrl: './html/login.html',
        controller: 'loginController'
    })
        .when('/joinGame', {
        templateUrl: './html/joinGame.html',
        controller: 'joinGameController'
    })
        .when('/AccountPage',{
        templateUrl:'./html/accountPage.html',
        controller:'accountCtrl'
    })
        .when('/spacificGame',{
        templateUrl:"./html/spacificGame.html",
        controller:'spacificGameCtrl'
    })
}]);
/*
 * END SECTION - Routing for the app
 */




catniss.factory('catnissService',['$http', function($http) {
    var baseUrl = "http://127.0.0.1:4400/";
    var factory = {};

    factory.loggedIn = false;

    factory.test = function () {
        console.log("Service function is working!");
    };
    
    factory.checkCurrentposts = function(url, callback){
            var containes = false;
            //console.log("pendingRequests");
            //console.log($http.pendingRequests);
            url = baseUrl + url;
            //console.log("checking url: "+url);
            angular.forEach($http.pendingRequests, function(request){
                //console.log(request.url);
                //console.log(request.url == url);
                console.log(request.url);
                if(request.url == url){
                    containes = true;
                }
            });
            callback(containes);
    }
    
    /*
    * for the http requests we need the enpoint, a json object that will be 
    * directly put in and a function describing what to do after words.
    * The callback (function on what to do) needs to follow this format
    * function(err, result) -err if there was an error with the request
    *                       -result if everything returned correctly
    * if there was an err then result should be null and if no err then
    * err should be null
    */
    factory.getRequest = function(endpoint, object, callback){
        factory.checkCurrentposts(endpoint, function(containes){
            if(!containes){
                $http.get(baseUrl+endpoint, object).
                then(function(res){
                    console.log(res.data.ok);
                    if(res.data.ok){
                        callback(null, res.data.message);
                    }
                    else
                        callback(res.data.message,null);
                },function(res){
                    console.log("failed: "+res);
                    callback(res, null);
        });}
    });}
             
    factory.postRequest = function(endpoint, object, callback){
        console.log(object);
        factory.checkCurrentposts(endpoint, function(containes){
            if(!containes){
                $http.post(baseUrl+endpoint, object).
                then(function(res){
                    //console.log(res.data.ok);
                    if(res.data.ok){
                        callback(null, res.data.message);
                    }
                    else
                        callback(res.data.message,null);
                },function(res){
                    console.log("failed: "+res);
                    callback(res, null);
        });}
    });}
    return factory;
}]);
