
var app = angular.module('todoApp', []);

app.controller('TodoController', function($scope, $http) {
    $scope.todos = [];

    $http.get('/tasks').then(function(response) {
        $scope.todos = response.data;
    });

    $scope.addTodo = function() {
        if ($scope.newTodo) {
            $scope.todos.push({ task: $scope.newTodo, done: false });
            $scope.newTodo = "";
            $scope.saveTodos();
        }
    };

    $scope.deleteTodo = function(index) {
        $scope.todos.splice(index, 1);
        $scope.saveTodos();
    };

    $scope.saveTodos = function() {
        $http.post('/tasks', $scope.todos).then(function(response) {
            console.log("Saved");
        });
    };
});
