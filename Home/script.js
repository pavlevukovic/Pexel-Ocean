$("#btn_contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_form").offset().top
    }, 2000);
});

$("#btn_works").click(function() {
    $('html, body').animate({
        scrollTop: $("#our_works").offset().top
    }, 2000);
});