
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
