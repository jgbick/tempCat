
angular.module('catniss').controller('homeController', ['$scope', 'catnissService', function($scope, catnissService) {
    
    $scope.goToLogin = function(){
        window.location.href = "#/login";
    }
    $scope.goToRegistor = function(){
        window.location.href = "#/registor";
    }
    
    document.getElementById("login").addEventListener("click", $scope.goToLogin);
    document.getElementById("registor").addEventListener("click", $scope.goToRegistor);
}])