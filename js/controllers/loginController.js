angular.module('catniss').controller('loginController', ['$scope', 'catnissService', function($scope, catnissService) {
    $scope.user = "";
    $scope.pass = "";
    $scope.checkUser = function(){
        catnissService.postRequest("login",{name:$scope.user, password:$scope.pass},function(res){
        console.log(res);

        });
    }
    document.getElementById("loginButton").addEventListener("click",$scope.checkUser);
}]);