'use strict';

/**
 * @ngdoc function
 * @name cemyeomantestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cemyeomantestApp
 */
angular.module('cemyeomantestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
