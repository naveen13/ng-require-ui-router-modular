define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope',function ($scope) {
    	console.log("in controller 2");
    }]);
});
