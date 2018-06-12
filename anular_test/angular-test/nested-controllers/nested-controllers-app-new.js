var app = angular.module("nestedControllersAppNew", [])
app.controller("Ctrl1", Controller1);
app.controller("Ctrl2", Controller2);

function Controller1() {
	//var this = $scope // something like this when use nested Cotroller
	this.testCtrlnew = "From Ctrl 1";

}

function Controller2() {

	//var this = $scope // something like this when use nested Cotroller
	this.testCtrlnew = "From Ctrl 2";
}