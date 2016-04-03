var myPage = angular.module('myPage' , ['ui.router', 'ui.bootstrap', 'ngAnimate']);

myPage.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "../partials/Static/main.html"
    })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "../partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })

});
