var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.text = 'Hello, Angular fanatic.';
}]);

myApp.controller('MainSecondCtrl', ['$scope', function ($scope) {
    $scope.text = 'Hello, Angular again.';
}]);

myApp.config(['$routeProvider', function ($routeProvider) {

  /**
   * $routeProvider
   */
  $routeProvider
  .when('/', {
    templateUrl: '1.html'
  })
  .when('/2', {
    templateUrl: '2.html'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);