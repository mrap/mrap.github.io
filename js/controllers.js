
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
  $scope.workSamples = [];
  $scope.workSamples.push(
    {
      name: "Spot",
      link: "https://itunes.apple.com/us/app/spot-places-right-now/id820068868?ls=1&mt=8",
      photoUrl: "http://25.media.tumblr.com/11efc3686d380f349dbf5a75583ba30a/tumblr_mzmpn2UExS1sp583mo1_1280.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Battery Hero",
      link: "https://itunes.apple.com/us/app/battery-hero/id782015477?mt=12",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/battery-hero-screenshot-tint.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Sunriser",
      link: "https://itunes.apple.com/de/app/sunriser/id684789140?l=en&mt=8",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/sunriser-screenshot.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Coffeeshop",
      link: "http://doingnow.herokuapp.com/",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/coffeeshop-tint.jpg"
    }
  );
});
