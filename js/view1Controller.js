angular.module('catniss').controller('View1Ctrl', ['$scope', 'catnissService', function($scope, catnissService) {
    
    

    catnissService.userService.username = "page 1 set";    
    
    $scope.thefunction = function() {
        
        alert("The scope function ran");
    };
    
}]);
