
// megamenu mobile

$(document).ready(function(){
    if(window.matchMedia("(max-width: 1024px)").matches){
        // The viewport is less than 768 pixels wide
        //alert("This is a mobile device.");
        $(document).ready(function() {
  $('.ac-list > .expanded').on('click', function(e) {
    e.preventDefault();
    $(".expanded").removeAttr("style");
    if($(this).find('.sub-menu').is(':visible')) {
        $(this).removeClass('megaopen');
        $(this).removeAttr("style");
        $(this).find('.sub-menu').slideUp();
    } else {
        /* $('.ac-list > .expanded').removeClass('megaopen');
        $(this).addClass('megaopen');
        var newHeight = $(this).find('.sub-menu').height();
        $(this).height(newHeight+100);
        $('.ac-list > .expanded').find('.sub-menu').slideUp();
        $(this).find('.sub-menu').slideToggle(); */
    }
  });
  });
    } else{
        // The viewport is at least 768 pixels wide
        //alert("This is a tablet or desktop.");
    }
  });
