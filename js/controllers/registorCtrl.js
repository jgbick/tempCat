angular.module('catniss').controller('registorCtrl', ['$scope', 'catnissService', 'userService',function($scope, catnissService, userService) {
    $scope.fName="";
    $scope.lName="";
    $scope.uName="";
    $scope.uPass="";
    $scope.uEmail="";
    $scope.validate = function(){
        if($scope.fName.length < 1 || $scope.lName < 1 || $scope.uName < 1 || $scope.uPass < 1){
            console.log($scope.fName + $scope.lName + $scope.uName + $scope.uPass);
            return false;
        }
        return true;
    }
    $scope.registor = function(){
        console.log($scope.fName);console.log($scope.lName+$scope.uName+$scope.uPass+$scope.uEmail);
        if($scope.validate){
            info = {name:$scope.uName,
                   password:$scope.uPass,
                   info:{
                        fName:$scope.fName,
                       lName:$scope.lName
                   },
                   email:$scope.uEmail}
            console.log(info);
            catnissService.postRequest("register", info, function(err, res){
                if(err){
                    console.log("failed to registor");
                    console.log("err: "+err);
                    console.log(res);
                }
                else{
                    console.log("registored correctly");
                    userService.user.userName=$scope.fName+$scope.lName;
                    console.log("username: "+userService.user.userName);
                    console.log(res);
                    window.location.href = "#/accountPage";
                }
            });
        }
    }
    
    document.getElementById("registor").addEventListener("click",$scope.registor);
    
}])