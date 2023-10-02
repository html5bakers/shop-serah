function isScrolledIntoView(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop)); 
}
// Animation
$('.animate').each(function(){
  $(this).addClass('animated');
});
$(window).scroll(function(){
  $('.animate').each(function(){
    if(isScrolledIntoView(this)){
        $(this).addClass('animated');
    }
  });
});