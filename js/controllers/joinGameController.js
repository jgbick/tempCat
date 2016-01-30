angular.module('catniss').controller('joinGameController', ['$scope', 'catnissService', function($scope, catnissService) {
    catnissService.userId = 1;
    $scope.gameFound = false;
    $scope.gameName="";
    $scope.gamePass="";
    $scope.gameInfo = {name:"Maura's Hungry", password:'pass', gameMasterId:catnissService.userId};
    $scope.sendCreateGame = function(gameInfo){
        console.log("seding create info");
        console.log(gameInfo);
        catnissService.postRequest('createGame', gameInfo, function(res){
            console.log(res);
            if(res.status > 0){
            if(res.data.ok){
            }
            else{
                console.log("The sever returned a false");
            }}
            else{
                console.log("sending info");
    }});}
    
    $scope.sendJoinGame = function(gameInfo){
        catnissService.postRequest('joinGame', gameInfo, function(res){
            console.log(res);
            if(res.status > 0){
                if(res.data.ok){
                }
                else{
                    console.log("The sever returned a false");
                }}
            else{
                console.log("sending info");
    }});}
    
    $scope.createGame = function(){
        console.log();
    }
    $scope.testCreateGame = function(){
        $scope.gameInfo = {name:"Maura's Hungry", password:'pass', gameMasterId:1};
        $scope.sendCreateGame($scope.gameInfo);
    }
    $scope.testJoinGame = function(){
        var gameInfo = {gamePassword:"pass", gameName:"Maura's Hungry"};
        $scope.sendJoinGame(gameInfo);
    }
    $scope.searchGame = function(){
        $scope.gameName = document.getElementById("gameName").value;
        $scope.gamePass = document.getElementById("gamePassword").value;
        console.log($scope.gameName + $scope.gamePass);
        
        catnissService.postRequest("findGame", {name:$scope.gameName, password:$scope.gamePass}, 
            function(res){
                console.log(res);
                if(res.status == 200 && res.data.ok){
                    //if game found set gameFound=true;
                    //also give element the eventListener;
                        $scope.gameInfo = {name:"Maura's Hunger Game", GameMaster:"Kevin"};
                        $scope.gameFound = true;
                }
            
        });

    }
    document.getElementById("testGameJoin").addEventListener("click",$scope.testJoinGame);
    document.getElementById("testGameCreate").addEventListener("click",$scope.testCreateGame);
    document.getElementById("createButton").addEventListener("click",$scope.createGame);
    document.getElementById("searchGame").addEventListener("click", $scope.searchGame);
}])