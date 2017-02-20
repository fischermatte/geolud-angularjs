'use strict';

angular.module('geolud', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/resume/resume.html'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: 'app/skills/skills.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl',
        resolve: {
          projects: function ($http) {
            return $http({method: 'GET', url: 'assets/projects/projects.json'}).then(function (response) {
              return response.data;
            });
          }
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.otherwise('/home');
  })
  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })
;
