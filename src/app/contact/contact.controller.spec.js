'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('geolud'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define email', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('ContactCtrl', {
      $scope: scope
    });

    expect(scope.email).toContain('@');
  }));
});
