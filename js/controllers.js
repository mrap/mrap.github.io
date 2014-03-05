
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
      description: "Helping each other see what places look right now.",
      link: "https://itunes.apple.com/us/app/spot-places-right-now/id820068868?ls=1&mt=8",
      photoUrl: "http://25.media.tumblr.com/11efc3686d380f349dbf5a75583ba30a/tumblr_mzmpn2UExS1sp583mo1_1280.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Battery Hero",
      description: "Keep your mac's battery healthy.",
      link: "https://itunes.apple.com/us/app/battery-hero/id782015477?mt=12",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/battery-hero-screenshot-tint.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Sunriser",
      description: "Waking up early was never this easy.",
      link: "https://itunes.apple.com/de/app/sunriser/id684789140?l=en&mt=8",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/sunriser-screenshot.jpg"
    }
  );
  $scope.workSamples.push(
    {
      name: "Coffeeshop",
      description: "A place to be productive with others (open source project)",
      link: "http://doingnow.herokuapp.com/",
      photoUrl: "https://mrap-blog.s3.amazonaws.com/coffeeshop-tint.jpg"
    }
  );
});

controllers.controller('ResumeCtrl', function($scope){
  $scope.stories = [];
  $scope.stories.push({chapter: "Leaves film school to build his career from scratch.", 
                      prevTitle: "Student Filmmaker",
                      nextTitle: "Freelance Filmmaker"});
  $scope.stories.push({chapter: "While assembling his portfolio, he discovers unsolved problems.  Decides to change the world.", 
                      prevTitle: "Freelance Filmmaker",
                      nextTitle: "Idealistic Entrepreneur"});
  $scope.stories.push({chapter: "Starts a software company and launches a social network as a \"non-technical cofounder\". Immediately fails because the app sucked (among other things).", 
                      prevTitle: "Idealistic Entrepreneur",
                      nextTitle: "Real Entrepreneur"});
  $scope.stories.push({chapter: "Post-launch, codes a better version of the app. Leaves startup to detach from a greedy cofounder. Discovers his true passion: programming and building great products.", 
                      prevTitle: "Real Entrepreneur",
                      nextTitle: "Programming Noob"});
  $scope.stories.push({chapter: "Learns Objective-C, Ruby (rails), Java in 5 months. He's obsessed with learning and building. Launches a mac app.", 
                      prevTitle: "Programming Noob",
                      nextTitle: "Code Addict"});
  $scope.stories.push({chapter: "Accelerates his learning: masters VIM, TDD/BDD. Writes DRY, clean, and concise code. Starts to collaborate with others. Launches: another mac app, two iOS apps, open-sourced realtime web app project, fullstack (REST API server to iPhone client).  Competes in two hackathons (wins in one).", 
                      prevTitle: "Code Addict",
                      nextTitle: "Code Ninja"});
  $scope.stories.push({chapter: "Works at Google. Builds world-class products alongside other passionate individuals.", 
                      prevTitle: "Code Ninja",
                      nextTitle: "?"});
});
