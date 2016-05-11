var app = angular.module("app", []);
    app.controller("MyCtrl", function ($scope,$window) {
        $scope.saved = {};
        $scope.update = function(user) {
            $scope.saved = angular.copy(user);
        };
 
        $scope.reset = function() {
            $scope.user = angular.copy($scope.saved);
        };
 
        $scope.isUnchanged = function(user) {
            return angular.equals(user, $scope.saved);
        };
 
        $scope.reset();
    });