'use strict';

/**
 * @ngdoc overview
 * @name cemyeomantestApp
 * @description
 * # cemyeomantestApp
 *
 * Main module of the application.
 */
angular
  .module('cemyeomantestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
