var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  // AngularJS will look for when the hash changes, checked the routes, find which one matches, and find the appropriate code.
  .when('/', {
    // route to page and controller when it's an empty hash (/)
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

})

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $scope.name = "main";

}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

  $scope.name = "second";

}]);
