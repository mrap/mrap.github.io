
var directives = angular.module('mrap.directives', []);

directives.directive('stellar', function(){
  var applyStellar = function(scope, element, attrs) {
    $(document).ready(function(){
      $(window).stellar({
        horizontalScrolling: false,
        verticalScrolling: true
      });
    });
  };

  return {
    restrict: 'A',
    link: applyStellar
  };
});

directives.directive('flowtype', function(){
  var applyFlowType = function(scope, element, attrs) {
    $(document).ready(function(){
      $('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 60
      });
    });
  };

  return {
    restrict: 'E',
    link: applyFlowType
  };
});

directives.directive('mrapNavigation', function(){
  var applyStickyNavigation = function(scope, element, attrs) {
    $(document).ready(function(){
      var navBarY = function(){
        // Vertical middle of the window
        return $('.navigation').offset().top;
      };

      var navOriginY = navBarY();

      // Resize Navigation
      var resizeNavigation = function() {
        var bodyWidth = $(window).width();
        var newNavHeight = bodyWidth * 0.20; // 20%
        $('.navigation').height(newNavHeight);
      };
      $(window).bind('resize', resizeNavigation);

      // Sticky Navigation
      var stickNavigation = function(scope, element, attributes) {
        if ($(window).scrollTop() >= navOriginY) {
          $('.navigation').addClass('fixed');
        } else {
          $('.navigation').removeClass('fixed');
        }
      };
      $(window).bind('scroll', stickNavigation);

    });
  };

  return {
    restrict: 'A',
    link: applyStickyNavigation
  };
});
