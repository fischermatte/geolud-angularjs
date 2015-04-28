'use strict';

angular.module('geolud', ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html'
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
          projects: function() {
            return [{name: 'P1'}, {name: 'P2'}];
          }
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      });

    $urlRouterProvider.otherwise('/home');
  })
;
