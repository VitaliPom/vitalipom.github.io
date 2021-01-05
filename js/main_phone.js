$('#phone')
    .css('background-image','url(img/Geirangerfjord_.jpg)')
    .waitForImages(function() {
        alignPhoneImages();
            
        setPhoneHeight();
        $( window ).resize(function() {
            setPhoneHeight();
        });
        $(window).on("orientationchange",function(){
            setPhoneHeight();
        }); 

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

//set phone height which works for mobiles as well
function setPhoneHeight(){
    $('#top_image').css({ height: window.innerHeight });
    $('#underline_image').css({ height: window.innerHeight });
  
}
