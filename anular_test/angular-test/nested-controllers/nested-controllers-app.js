var app = angular.module("nestedControllersApp",[])
app.controller("Ctrl1",Controller1);
app.controller("Ctrl2",Controller2);

function Controller1($scope) {
	$scope.testCtrl = "From Ctrl 1";
	
	}


function Controller2($scope) {
	//$scope.testCtrl = "From Ctrl 2";
}