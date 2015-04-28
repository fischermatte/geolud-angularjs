'use strict';

angular.module('geolud')
  .controller('ProjectsCtrl', function ($scope, projects) {
    $scope.projects = projects;
  });
