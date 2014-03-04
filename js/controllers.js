
var controllers = angular.module('mrap.controllers', []);

controllers.controller('LanguagesCtrl', function($scope){
  $scope.languages = [];
  $scope.languages.push({name: "Objective-C", level: "100%"});
  $scope.languages.push({name: "Ruby", level: "100%"});
  $scope.languages.push({name: "Javascript", level: "80%"});
  $scope.languages.push({name: "Java", level: "40%"});
});

controllers.controller('SkillsCtrl', function($scope){
  $scope.skills = [];
  $scope.skills.push({name: "Ruby on Rails", level: "100%"});
  $scope.skills.push({name: "HTML + CSS", level: "100%"});
  $scope.skills.push({name: "BDD/TDD", level: "100%"});
  $scope.skills.push({name: "iOS Development", level: "80%"});
  $scope.skills.push({name: "Angular.js", level: "60%"});
  $scope.skills.push({name: "JQuery", level: "60%"});
  $scope.skills.push({name: "Node.js", level: "40%"});
});

controllers.controller('PortfolioCtrl', function($scope){
  $scope.workSamples = [
    {
      name: "Spot",
      link: "https://itunes.apple.com/us/app/spot-places-right-now/id820068868?ls=1&mt=8"
    }
  ];
});
