'use strict';

angular.module('geoludApp', []).
      config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
          $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
                .when('/resume', {templateUrl: 'views/resume.html', controller: 'ResumeCtrl'})
                .when('/skills', {templateUrl: 'views/skills.html', controller: 'SkillCtrl'})
                .when('/projects', {templateUrl: 'views/projects.html', controller: 'ProjectCtrl'})
                .when('/contact', {templateUrl: 'views/contact.html', controller: 'ContactCtrl'});
          $locationProvider.html5Mode(true);
        }]);