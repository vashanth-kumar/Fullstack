var app = angular.module("counterApp", []);

app.controller("CounterController", function($scope) {
  $scope.count = 0;

  $scope.increment = function() {
    $scope.count++;
  };

  $scope.decrement = function() {
    if ($scope.count > 0) {
      $scope.count--;
    }
  };

  $scope.reset = function() {
    $scope.count = 0;
  };
});
