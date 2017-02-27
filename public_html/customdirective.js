/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app= angular.module("myapp",[]);
app.directive("navBar", function(){
    return{
        restrict:'AE',
        templateUrl:'navdirective.html',
        replace: false,
        
        transclude: true,
        scope: {navlist: '='},
        
        
        
        controller: function($scope){
//            $scope.list=[
//                {"header":"Home", "url":"#Home"},
//                {"header":"Front Desk", "url":"#FD"},
//                {"header":"Employee", "url":"#Emp"},
//                {"header":"Schedule", "url":"#schedule"},                
//                {"header":"Call Around", "url":"#callaround"}
//            ];
        }
        
    };
});

app.directive('fontscale', function(){
    return{
        restrict:'A',
        transclude:true,
        link: function(scope,element,attr){
            scope.$watch(attr['fontscale'], function(newval){
                element.css({'font-size' : newval+'px'});
            });
        }
    };
});

app.controller("mainctrl", ['$scope', function($scope){
        
        $scope.list1=[
            {"header": "Header 1", "url":"#header1"},
            {"header": "Header 2", "url":"#header2"},
            {"header": "Header 3", "url":"#header3"},
            {"header": "Header 4", "url":"#header4"},
            {"header": "Header 5", "url":"#header5"}
        ];
          $scope.list2=[
                {"header":"Home", "url":"#Home"},
                {"header":"Front Desk", "url":"#FD"},
                {"header":"Employee", "url":"#Emp"},
                {"header":"Schedule", "url":"#schedule"},                
                {"header":"Call Around", "url":"#callaround"}
            ];
        $scope.addnew = function(x)
        {
            if(x==1)
                $scope.list1.push({"header":$scope.header, "url":$scope.url});
            else
                $scope.list2.push({"header":$scope.header, "url":$scope.url});
        }
}]);