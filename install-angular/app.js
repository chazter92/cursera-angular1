(function () {
'use strict';

  angular.module('myFirstApp', [])
  .controller( 'myFirstController', function($scope){
    $scope.name = "Chaz";
    $scope.sayHello = function () {
      return "Hi coursera";
    }
  });
})();
