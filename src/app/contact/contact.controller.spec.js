'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('geolud'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('ContactCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.email)).toContain('@');
  }));
});
