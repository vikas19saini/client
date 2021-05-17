$(document).ready(function () {
    $('.tablinks').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('body_h');
    });
    $('.go_back').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('body_h');
        $('.tabcontent').removeAttr('style');
    });
});

//  $(document).ready(function() {
//    if($(this).find('.tabcontent').is(':visible')) {
//      $('body').addClass('body_h');
//    } else{
//      $('body').removeClass('body_h');
//    }
//  });

function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}