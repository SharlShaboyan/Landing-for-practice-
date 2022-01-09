$('.but2').click(function () {
    var elem = $('.main2'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1000);
});

$('.but2_h').click(function () {
    var elem = $('.main2'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1000);
});