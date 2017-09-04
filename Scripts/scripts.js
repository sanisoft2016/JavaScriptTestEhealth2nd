﻿
var app = angular.module("appScripts", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/followers/:id", {
                templateUrl: "Templates/followers.html",
                controller: "dataController"
            })
            .when("/following/:id", {
                templateUrl: "Templates/following.html",
                controller: "dataController"
            })
            .when("/repositories/:id", {
                templateUrl: "Templates/repositories.html",
                controller: "dataController"
            })
        .otherwise({
            redirectTo: "/home"
        });
    });

app.controller("dataController", function ($scope, $routeParams) {
    var id = $routeParams.id;
    var jSon = { "Id": 1, "Name": "Prosper Otemuyiwa", "Login": "unicodeveloper", "Bio": "Engineer =\u003e Writer =\u003e Speaker Community Builder =\u003e OSS =\u003e Evangelist. Google Developer Expert.", "AvatarUrl": "https://avatars2.githubusercontent.com/u/2946769?v=3", "Company": "Unicode Labs, LLC", "Location": "Lagos, Nigeria", "Email": "", "CelebrityFollowing": [{ "Id": 1, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Abati Adewale acekyd", "Message": "Gamer, Developer, Designer", "Location": "Lagos, Nigeria", "PassportSting": "4003538.jpg" }, { "Id": 2, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 0, "FullNames": "MsTeerious MsTeerious", "Message": null, "Location": null, "PassportSting": "25868076.png" }, { "Id": 3, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Ilya Grigorik igrigorik", "Message": "Web performance engineer at @Google, co-chair of the @w3c Web Performance Working Group. In short, internet plumber.", "Location": "San Francisco, CA", "PassportSting": "10652.jpg" }, { "Id": 4, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Calvin Karundu calvinkarundu", "Message": "Fullstack developer - Node \u0026 Backbone experience", "Location": "Nairobi, Kenya", "PassportSting": "6193252.jpg" }, { "Id": 5, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "James Halliday substack", "Message": "Fullstack developer - Node \u0026 Backbone experience", "Location": "cyberspace", "PassportSting": "12631.jpg" }, { "Id": 6, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Kenneth Kinyanjui kenju254", "Message": "Steering to Africa 2.0 as CTO @wecashup and Google Cloud Expert in Sub Saharan Africa.", "Location": "Nairobi Kenya", "PassportSting": "2166051.png" }], "CelebrityFollowers": [{ "Id": 1, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Okunade Mubarak mubarakky", "Message": null, "Location": "@iQubeLabs Lagos, Nigeria.", "PassportSting": "8152338.png" }, { "Id": 2, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Awa Desmoline awadesmoline", "Message": "I am a Fellow at Andela", "Location": "", "PassportSting": "25609312.jpg" }, { "Id": 3, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Dennisdenny Dennisdenny", "Message": null, "Location": "", "PassportSting": "24385832.png" }, { "Id": 4, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "AdebayoKayode AdebayoKayode", "Message": null, "Location": "", "PassportSting": "23148455.jpg" }, { "Id": 5, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "Abdulazeez Murainah gceezle", "Message": "Islamist, Techie, Developer (Web, Mobile, Desktop...)", "Location": "Lagos, Nigeria", "PassportSting": "25187061.jpg" }, { "Id": 6, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "FullNames": "davidkathoh davidkathoh", "Message": null, "Location": "", "PassportSting": "18406487.jpg" }], "CelebrityRepositories": [{ "Id": 1, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "ProjectName": "miniflix", "Description": "Miniflix - A smaller version of Netflix powered by Cloudinary", "ProgLangName": "JavaScript", "UploadDate": null }, { "Id": 2, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "ProjectName": "logger-with-manifold", "Description": "Test Logger App with Manifold - http://manifold.co", "ProgLangName": "JavaScript", "UploadDate": "Updated 2 days ago" }, { "Id": 3, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "ProjectName": "resources-i-like", "Description": "💯 Collection of learning resources i like", "ProgLangName": null, "UploadDate": "Updated 11 days ago" }, { "Id": 4, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "ProjectName": "preact-boilerplate", "Description": "Forked from developit/preact-boilerplate \u003cbr /\u003e Ready-to-rock Preact starter project, powered by Webpack", "ProgLangName": "JavaScript", "UploadDate": "Updated 13 days ago" }, { "Id": 5, "CelebrityInfoSelection": null, "CelebrityInfoSelectionId": 1, "ProjectName": "awesome-nextjs", "Description": "A curated list of awesome resources : books, videos, articles about using \u003cbr /\u003e Next.js (A minimalistic framework for universal server-rendered React applications)", "ProgLangName": "JavaScript", "UploadDate": "Updated 19 days ago" }] };
    if (id == 1) {
        $scope.ListOfFollowers = jSon.CelebrityFollowers;
    } else if (id == 2) {
        $scope.ListOfFollowing = jSon.CelebrityFollowing;
    } else if (id == 3) {
        $scope.ListOfRepository = jSon.CelebrityRepositories;
    } else {
        
    }
});

app.controller("routeController", function ($scope, $location) {
    $scope.Followers = function () {
        var id = 1;
        $location.path('/followers/' + id);
    }
    $scope.Following = function () {
        var id = 2;
        $location.path('/following/' + id);
    }
    $scope.Repositories = function () {
        var id = 3;
        $location.path('/repositories/'+ id);
    }
});