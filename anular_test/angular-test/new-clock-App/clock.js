
     var mod = angular.module("myClockApp",[]);
     mod.controller("TimeCtrl",Time);
     function Time($scope){
         var currentdate = new Date();
         $scope.timeString = currentdate.toTimeString();
         $scope.updateTime=function(){
             $scope.userName="";
             console.log("Button clicked");
             var currentdate = new Date();
             $scope.timeString = currentdate.toTimeString();
         }
     }