(function(){
'use strict';

angular.module('myApp', [])

.controller('myController', function($scope){
	$scope.name = "Desu";
	$scope.saySomethin = function() {
		return "Haha i returned";
	};
});





})();