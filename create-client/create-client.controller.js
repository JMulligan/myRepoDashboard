angular
.module('app')
.controller('createClientCtrl', client);

client.$inject = ['$scope'];
function client($scope){
  $scope.firstName = '';
  $scope.middleName = '';
  $scope.lastName = '';
  $scope.citizenship = '';
  $scope.dateOfBirth = new Date();
}
