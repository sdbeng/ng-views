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
	{text:'build an angular app with v1.26', done: false },
	{text:'eat more fruits and vegetables', done: true }

	];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todotext, done: false});
		$scope.todotext = '';
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function() {
			
		});
	};
}]);




