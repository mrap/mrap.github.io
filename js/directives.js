
var directives = angular.module('mrap.directives', [
  'ngFitText'
]);

directives.directive('stellar', function(){
  var applyStellar = function(scope, element, attrs) {
    $(document).ready(function(){
      var isMobile = {
        Android: function() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };

      // Disables for mobile.
      if( !isMobile.any()) {
        $(window).stellar({
          horizontalScrolling: false,
          verticalScrolling: true,
          responsive: true
        });
      }
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
      $('.container').flowtype({
        minFont   : 12
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

directives.directive('skillbarPercent', function(){
  var applySkillbarPercent = function(scope, element, attrs) {
    $(document).ready(function(){
      var newPercentage = attrs.skillbarPercent + "%";
      $('.skillbar-active').css({ "width":newPercentage });
    });
  };

  return {
    restrict: 'A',
    link: applySkillbarPercent
  };
});
