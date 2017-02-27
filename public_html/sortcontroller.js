/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module("sortapp", []);

//app.controller("data", function ($scope){
//    });
    
app.controller("data", function ($scope){
    
    $scope.arr=[
        {"name" : "Vinod", "country" : "India"},
        {"name" : "Deniss", "country" : "Denmark"},
        {"name" : "Trump", "country" : "Russia"},
        {"name" : "Obama", "country" : "Africa"},
        {"name" : "Hillary", "country" : "United States"},
        {"name" : "Donald", "country" : "United States"},
        {"name" : "Hazel", "country" : "Germany"},
        {"name" : "Ravi", "country" : "India"}
    ];
    
    $scope.$emit("send", {key : $scope.arr});
});

app.controller("main", function ($scope){
    
    $scope.obj=0;
    $scope.$on("send", function(event, args){
        $scope.obj=args.key;
    });
    
    $scope.orderbyme= function(x){
        $scope.order=x;
    };
});

