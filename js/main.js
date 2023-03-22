$(document).ready(function () {
    // $("#loading").fadeOut(3000);
    let y = $('#we-will').offset().top;
    $(window).scroll(function () {
        let x = $(window).scrollTop();
        if (x > y - 300) {
            $('#main-nav').css('cssText', 'background-color: #fff !important; box-shadow: 0px 10px 30px 0px rgba(133, 66, 189, 0.1) !important')
            $("#btnUp").fadeIn(500);
        } else {
            $('#main-nav').css('cssText', 'background-color: transparent !important')
            $("#btnUp").fadeOut(500);
        }
    });
});

$("#btnUp").on("click", function () {
    $(window).scrollTop(0);

});

$('#nav-b').on('click', function () {
    $('#main-nav').css('cssText', 'background-color: #FFF !important')
});
