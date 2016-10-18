angular.module('angularJWT').controller('login', function ($scope, $http, $location) {
  $scope.canaryTest = 'helllo from inside /login/login.controller.js'
  $scope.create = function () {
    const user = {
      username: $scope.username,
      password: $scope.password
    }
    console.log(user);

  $http.post('/users/create', user) // '/users/create' is an express route... in express' app.js
    .then(function(result){
      // console.log(result);
      localStorage.setItem('user', JSON.stringify(result.data))

      $location.path('/dashboard') //redirecting, if successful, to dashboard (not res.redirect, but single page redirect)
    })
    .catch (function(err){
      console.log('There was an error', err);
    })
  }
})

// note cannot use fat arrow here because it acts as a constructor
