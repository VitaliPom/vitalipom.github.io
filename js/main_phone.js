$('#phone')
    .css('background-image','url(img/Geirangerfjord_.jpg)')
    .waitForImages(function() {
        alignPhoneImages();

        showTextLine();
    }, $.noop, true);

function alignPhoneImages() {
        var offset_top_image = $('#top_image').offset().top;
        //$('#top_image').offset({top: 0});
        //$('#top_image').css({marginTop: '-120%'});

        $('#top_image').css({top: $('#underline_image').position().top});
        $('#underline_image').css({top: $('#underline_image').position().top});
        // This *does* work
}
