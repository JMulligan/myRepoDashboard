angular
.module('app')
.controller('openAccountCtrl', account);

account.$inject = ['$scope'];
function account($scope){

//$scope.account.title = 'Sample account title loaded in';
$scope.account.title='';
$scope.account.number ='';
$scope.account.currency ='USD';
$scope.account.type ='';
$scope.account.subType ='';
$scope.account.estimatedAUM ='';
$scope.region ='';




}