'use strict';

describe('controllers', function(){
  var scope, projects;

  beforeEach(module('geolud'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
    projects =[{name: 'P1'}, {name: 'P2'}];
  }));

  it('should define at least 2 projects', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('ProjectsCtrl', {
      $scope: scope,
      projects: projects
    });

    expect(angular.isArray(scope.projects)).toBeTruthy();
    expect(scope.projects.length > 1).toBeTruthy();
  }));
});
