angular.module("moreDirectivesApp", [])
		.controller("MoreDirectivesCtrl",MoreDirectivesCtrl);

function MoreDirectivesCtrl() {
	this.myList = [ 2, 3, 6, 7 ];

	this.myObjList = [ {
		'Name' : "foo",
		'age' : 20
	}, {
		'Name' : "zoo",
		'age' : 30
	}, {
		'Name' : "soo",
		'age' : 40
	} ]
}
a