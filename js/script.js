var app = angular.module("app",['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when("/", {
        templateUrl : "store.html"
    })
    .when("/main", {
          templateUrl : "templates/main.html",
          controller : "mainCtrl"
    })
    .when("/full/:id", {
        templateUrl : "templates/full.html",
        controller : "maindetailsCtrl"
    })
    .when("/luggages", {
          templateUrl : "templates/luggages.html",
          controller : "luggagesCtrl"
    })
    .when("/luggage/:id", {
          templateUrl : "templates/luggagefull.html",
          controller : "luggagedetailsCtrl"
    })
    .when("/laptops", {
          templateUrl : "templates/laptops.html",
          controller : "laptopsCtrl"
    })
    .when("/laptop/:id", {
      templateUrl : "templates/laptopfull.html",
      controller : "laptopdetailsCtrl"
    })
});
app.controller("mainCtrl",function($scope, $http){
   $http.get('json/templates.json').then(function(response){
       $scope.details = response.data;
   });
});
app.controller("maindetailsCtrl", function ($scope,$http,$routeParams) {
  $scope.setimage = function(arg,arg1)
  {
    var kik = arg.images[arg1].name;
    document.getElementById("mblock").src = "img/"+kik;
  };
  $http({
		    url: "json/templates.json",
		    method: "GET",
		    params: { id: $routeParams.id }
	}).then(function (response) {
        $scope.details = response.data;
        $scope.id = $routeParams.id - 1;
        $scope.items = $scope.details[$scope.id];
    })
});
app.controller("laptopsCtrl",function($scope, $http){
   $http.get('json/laptops.json').then(function(response){
       $scope.laptops = response.data;
   });
});
app.controller("laptopdetailsCtrl", function ($scope,$http,$routeParams) {
  $scope.setimage = function(arg,arg1)
  {
    var kik = arg.images[arg1].name;
    document.getElementById("mblock").src = "img/laptops/"+kik;
  };
  $http({
		    url: "json/laptops.json",
		    method: "GET",
		    params: { id: $routeParams.id }
	}).then(function (response) {
        $scope.details = response.data;
        $scope.id = $routeParams.id - 1;
        $scope.items = $scope.details[$scope.id];
        console.log($scope.items);
    })
});

app.controller("luggagesCtrl",function($scope, $http){
   $http.get('json/luggages.json').then(function(response){
       $scope.luggages = response.data;
   });
});
app.controller("luggagedetailsCtrl", function ($scope,$http,$routeParams) {
  $scope.setimage = function(arg,arg1)
  {
    var kik = arg.images[arg1].name;
    document.getElementById("mblock").src = "img/luggages/"+kik;
  };
  $http({
		    url: "json/luggages.json",
		    method: "GET",
		    params: { id: $routeParams.id }
	}).then(function (response) {
        $scope.details = response.data;
        $scope.id = $routeParams.id - 1;
        $scope.items = $scope.details[$scope.id];
    })
});
