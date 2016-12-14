var app = angular.module('MyFirstApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
// Config
app.config(function($log) {
  $log.info('Successfully initialized!');
});
app.controller('MainController', function($scope) {
  $scope.version = '1.0.0';
});
app.controller('SideNavController', function ($scope, $mdSidenav) {
    console.info('SideNavController successfully loaded!');
});