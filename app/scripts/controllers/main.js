'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
  .controller('MainCtrl', function ($scope,$firebaseArray) {

    var fbtodos = new Firebase("https://todoapp-8b557.firebaseio.com/todos");
    $scope.todos = $firebaseArray(fbtodos);
    console.log($scope.todos);

    //$scope.todos=['Item 1','Item 2','Item 3'];
    $scope.addTodo = function () {
      $scope.todo.timestamp = $scope.todo.timestamp.getDate()+"/"+$scope.todo.timestamp.getMonth()+"/"+$scope.todo.timestamp.getYear().toString().substring(1,3);
      fbtodos.push($scope.todo);
      $scope.todo = null;

    };
    $scope.removeTodo = function (index) {
      //$scope.todos.splice(index, 1);
      fbtodos.child($scope.todos[index].$id).remove();
    };
  });
