
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
// $header_top.find('menu').on('click', function() {
//   $(this).parent().toggleClass('open-menu');
// });



// fullpage customization
// $('#fullpage').fullpage({
//   sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#262626'],
//   sectionSelector: '.vertical-scrolling',
//   slideSelector: '.horizontal-scrolling',
//   navigation: true,
//   slidesNavigation: true,
//   controlArrows: false,
//   anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection'],
//   menu: '#menu',

//   afterLoad: function(anchorLink, index) {
//     $header_top.css('background', 'transparent');
//     $nav.css('background', 'rgba(0, 47, 77, .25)');
//     if (index == 7) {
//         $('#fp-nav').hide();
//       }
//   },

//   onLeave: function(index, nextIndex, direction) {
//     if(index == 6) {
//       $('#fp-nav').show();
//     }
//   },

//   afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
//     if(anchorLink == 'fifthSection' && slideIndex == 1) {
//       $.fn.fullpage.setAllowScrolling(false, 'up');
//       $header_top.css('background', 'transparent');
//       $nav.css('background', 'transparent');
//       $(this).css('background', '#374140');
//       $(this).find('h2').css('color', 'white');
//       $(this).find('h3').css('color', 'white');
//       $(this).find('p').css(
//         {
//           'color': '#DC3522',
//           'opacity': 1,
//           'transform': 'translateY(0)'
//         }
//       );
//     }
//   },

//   onSlideLeave: function( anchorLink, index, slideIndex, direction) {
//     if(anchorLink == 'fifthSection' && slideIndex == 1) {
//       $.fn.fullpage.setAllowScrolling(true, 'up');
//       $header_top.css('background', 'rgba(0, 47, 77, .3)');
//       $nav.css('background', 'rgba(0, 47, 77, .25)');
//     }
//   } 
// }); 


var currentX = '';
var currentY = '';
var movementConstant = .115;
$(document).mousemove(function(e) {
  if(currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
   if(currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY; 
  $('.parallax div').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
    var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
    var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
    $(el).css('top', newY + 'px');
  });
});


$(document).ready(function () {
  $("div#blogItem:eq(0)").fadeTo("fast", 1, function () {
    $(this).next().fadeTo("fast", 1, arguments.callee);
  });
});
