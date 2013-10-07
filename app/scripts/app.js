'use strict';

angular.module('geoludApp', []).
      config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
          $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl', title: "Home"})
                .when('/resume', {templateUrl: 'views/resume.html', controller: 'ResumeCtrl', title: "Résumé"})
                .when('/skills', {templateUrl: 'views/skills.html', controller: 'SkillCtrl', title: "Skills"})
                .when('/projects', {templateUrl: 'views/projects.html', controller: 'ProjectCtrl', title: "Projects"})
                .when('/contact', {templateUrl: 'views/contact.html', controller: 'ContactCtrl', title: "Contact"});
          $locationProvider.html5Mode(false);
        }]).run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  }]);