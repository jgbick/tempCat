angular.module('catniss').controller('accountCtrl', ['$scope', 'catnissService','userService',
        function($scope, catnissService, userService) {
    $scope.username = userService.user.userName;
}])