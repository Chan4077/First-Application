var app = angular.module('MyFirstApp', ['ngMaterial']);
// Config
app.config(function($log) {
  $log.info('Successfully initialized!');
});
app.controller('MainController', function($scope) {
  $scope.version = '1.0.0';
});
app.controller('SideNavController', function ($scope, $mdSidenav) {
    console.info('SideNavController successfully loaded!');

    $scope.main = [
        { url: 'https://chan4077.github.io', title: 'Main', icon: 'home' },
        { url: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account-box' },
        { url: 'https://chan4077.github.io/blog', title: 'Blog', icon: 'blogger' },
        { url: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'google-plus' },
        { url: 'https://chan4077.github.io/angular', title: 'Angular', icon: 'angular' },
    ];
    $scope.other = [
        { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: 'github-circle' },
        { url: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings' },
        { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' }
    ];
    $scope.projects = [
        { url: 'https://chan4077.github.io/projects', title: 'Projects', icon: ''},
        { url: 'https://chan4077.github.io/MyFirstApp', title: 'MyFirstApp', icon: ''},
    ]
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
/*
*  Directives
*/
// Sidenav
app.directive('siteSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
});
app.directive('siteToolbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/toolbar.html',
        transclude: true
    };
});