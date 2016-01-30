angular.module('catniss').controller('View2Ctrl', ['$scope', 'catnissService', function($scope, catnissService) {
    $scope.testUser = catnissService.userService.username;
}]);
