// controller.js global controllers should be placed here
angular
.module('app')
.controller('footerCtrl', footerCtrl);

footerCtrl.$inject = ['$scope'];
function footerCtrl($scope){
  $scope.date = new Date();
  $scope.businessName = 'Replace Me with Business Name';
  $scope.businessUrl = 'http://www.acme.com'
}
