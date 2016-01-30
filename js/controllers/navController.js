//Use this controller for the home page!

angular.module('catniss').controller('navController', ['$scope', 'catnissService', function($scope, catnissService){
    /*
    * for now all pages will have a link here, but soon the links will be moved out if they
    * dont belong here
    */
    $scope.pages = [/*{url:"login", href :"#/login"},
                    {url:"Registor", href:"#/registor"},*/
                    {url:"Game", href:"#/joinGame"},
                    {url:"logout", href :"#/"},
                    /*{url:"home", href:"#/"},*/
                    {url:"Account", href:"#/AccountPage"},
                    {url:"spacificGame", href:"#/spacificGame"}
                    ];
}]);