(function () {
'use strict';

  angular.module('Module1Solution', [])
  .controller( 'Module1SolutionController', Module1SolutionController );

   Module1SolutionController.$inject = ['$scope'];
   function Module1SolutionController($scope){
    $scope.menuList = "";
    $scope.validateResult = "";
    $scope.validateMenu = function () {
      if ( $scope.menuList === "" ){
        $scope.validateResult = "Please enter data first";
      }else{
        var totalItems = countItemsByComma( $scope.menuList );
        $scope.validateResult = ( totalItems <= 3
                                  ? "Enjoy"
                                  : "Too much" );
      }

    };

    function countItemsByComma( str ){

      var totalItems = 0;
      var items = str.split(",");
      items = items.filter(function(e){return e});
      return items.length;
    }
  }
})();
