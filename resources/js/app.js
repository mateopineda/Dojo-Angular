'use strict';

var spinnerBankAngularApp=angular.module('spinnerBankAngularApp',
	[
	'ngRoute',
	'productos.controllers',
	'productos.services'
	])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'../../pages/Principal.html',
			controller:'prodController'
		})
		.when('/producto',{
			templateUrl:'../../pages/Productos.html',
			controller:'prodController'
		})
		.otherwise({
			redireTo:'/'
		});		
	});