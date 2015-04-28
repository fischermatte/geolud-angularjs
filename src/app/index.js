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
          projects: function () {
            return [
              {
                title: 'Document Management System for the Federal Office of Migration',
                client: {
                  name: 'Unisys Switzerland',
                  link: 'http://www.unisys.ch/index.htm'
                },
                period: '2012-2014',
                description: 'Technologies: Java, Spring, Hibernate, JPA, JSF, Primefaces, Oracle, Tomcat, CI (Maven, Hudson, Sonar, Nexus, Team Foundation Server) '
              },
              {
                title: 'Digital Archive of the Swiss National Library (e-Helvetica)',
                client: {
                  name: 'Unisys Switzerland',
                  link: 'http://www.unisys.ch/index.htm'
                },
                period: '2011-2012',
                description: 'Technologies: Java, Spring, Hibernate, JSF 2, ICEFaces 2, Luscene, Solr, Oracle Weblogic'
              }
            ];
          }
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      });

    $urlRouterProvider.otherwise('/home');
  })
  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })
;
