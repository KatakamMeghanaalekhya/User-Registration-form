
angular.module('registrationApp', [])
  .controller('FormController', function($scope) {
    $scope.user = {};
    $scope.submitted = false;
    $scope.errorMessage = "";

    $scope.submitForm = function() {
      if ($scope.registrationForm.$valid && $scope.user.agree) {
        $scope.submitted = true;
        $scope.errorMessage = "";
      } else {
        $scope.submitted = false;
        $scope.errorMessage = " Please fill in all required fields correctly before submitting.";
      }
    };
  });