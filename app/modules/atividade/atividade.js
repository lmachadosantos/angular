"use strict";

angular.module("angular.atividade", []).config(
	[ "$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {
		$routeProvider.when("/atividade", {
			controller : "AtividadeController",
			templateUrl : "app/modules/atividade/partials/atividade.tpl.html"
		});
				
	}])
	.controller("AtividadeController",
	[ "$scope", "$http", function($scope, $http) {
	
		$scope.atividades = [];
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:4242/public/atividade?include=modulo'
			}).then(function (response) {
				$scope.atividades = response.data;
			  });
	}]);