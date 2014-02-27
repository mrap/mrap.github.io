
var directives = angular.module('mrap.directives', []);

directives.directive('stella', function(){
  var applyStella = function(scope, element, attrs) {
    $('.main-page').stellar({
      horizontalScrolling: false,
      verticalScrolling: true
    });
  };

  return {
    restrict: 'A',
    link: applyStella
  };
});

directives.directive('flowtype', function(){
  var applyFlowType = function(scope, element, attrs) {
    $('body').flowtype({
      minimum   : 500,
      maximum   : 1200,
      minFont   : 12,
      maxFont   : 60
    });
  };

  return {
    restrict: 'E',
    link: applyFlowType
  };
});
