var app = angular.module("myModelApp",[])
app.controller("ModelsCtrl",ModelsExamples);

function ModelsExamples($scope) {
	$scope.textboxChange= function(){
		console.log("Text value change");
	}
}