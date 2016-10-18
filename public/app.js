angular.module('angularJWT', ['ngRoute'])

.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when('/', {
    // template: '</h1>Hello from Angular Route</h1>'  // canary test for front-end routeProvider
    templateUrl: '/login/login.template.html', // create folder and file with this path in public
    // controller: function ($scope) {
    //   $scope.test = "I'm inside the controller function within /app.js"
    // }
    controller: 'login'  // this is refactored code for line 8-10 above
  })

  .when('/dashboard', {
    template: "<h1>Got to Dashboard Route</h1>"
    // templateUrl: '/dashboard/dashboard.template.html',
    // controller: 'dashboard'
  })
})
