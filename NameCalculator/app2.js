(function(){
'use strict';

angular.module('NameCalculator', [])

.controller('CalculatorController', CalController);
	
	CalController.$inject = ['$scope'];

	function CalController($scope){

	$scope.name = "";
	$scope.totalValue = 0;

	$scope.displayVal = function(){
		var hold = calculateNumericValue($scope.name);
		$scope.totalValue = hold;
	};

	function calculateNumericValue(string){
		var totalStringVal = 0;
		for (var i = 0; i < string.length; i++) {
			totalStringVal += string.charCodeAt(i);
		}

		return totalStringVal;
	}
}






})();