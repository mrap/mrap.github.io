
var controllers = angular.module('mrap.controllers', []);

controllers.controller('PortfolioCtrl', function($scope){
  $scope.workSamples = [
    {
      name: "Spot",
      link: "https://itunes.apple.com/us/app/spot-places-right-now/id820068868?ls=1&mt=8"
    }
  ];
});
