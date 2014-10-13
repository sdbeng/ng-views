'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

	// $scope.datavar = "Dani";

	$scope.todos = [
	{text:'learn angular v1.26 seed structure', done:false},
	{text:'build an angular app woth v1.26', done: false },
	{text:'eat more fruits and vegetables', done: true }

	];
}]);