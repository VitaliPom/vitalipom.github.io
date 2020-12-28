toptext = 100;
modulu2 = 0
wasVisible = false; 
elIndex = 1;

async function animate(){
    await sleep(1000);
    await addTextBox("hi");
    await sleep(1000);    
    await addTextBox("hi");
    await sleep(1000);    
    await addTextBox("how are you doing?");
    await sleep(1000);    
    await addTextBox("ok");
    await sleep(1000);    
    await addTextBox("?");
    await sleep(1000);
    await addTextBox("what are you doing?");
    await sleep(1000);
    await addTextBox("I'm coding");
    await sleep(1000);    

}

async function addTextBox(text){
    if(modulu2 % 2 == 1){
        $('#chat_text').append('<div id="textIndex'+elIndex+'" style="'+'top:'+toptext+'vh'+';'+'" class="font_size padding textbox left_textbox"></div>');
    }else{
        $('#chat_text').append('<div id="textIndex'+elIndex+'" style=";'+'top:'+toptext+'vh'+';'+'" class="font_size padding textbox right_textbox"></div>');
    }
    await typeWriter(text, elIndex);

    elIndex++;
    modulu2 = (modulu2 + 1) % 2;
    toptext+=5;
    updateScroll(); 
    
}

var speed = 200;

async function typeWriter(text, index) {
    var i = 0;

    while (i < text.length) {
        var el = $("#textIndex"+index)[0];
        var char_ = text.charAt(i);
        el.innerHTML += char_;
        i++;
        updateScroll(); 
        animateChar(char_); 
        await sleep(speed);
    }
}

var char_index = 1;
var colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
var colors_i = 0;

async function animateChar(char_){
    if (char_index > 1000){
        char_index = 1;
    }
    $("#phone_image").append('<div id="indexedChar'+char_index+'" class="indexedChar">'+char_+'</div>'); 
    var char_jobj = $("#indexedChar"+char_index);
    char_jobj.css("color", colors[colors_i]);
    
    asyncCharAnimation(char_jobj);
    colors_i++;
    colors_i = colors_i % colors.length;

     

    char_index++;
    
}


async function asyncCharAnimation(el){
    el.animate({
        opacity: "0",
        top: (Math.random()*100)+"%",
        left: (Math.random()*100)+"%",
        fontSize: "0" 
    }, 1000, "linear" ,function(){
        el.remove();
    } );
}

async function updateScroll(){
    var element = document.getElementById("chat_text");
    element.scrollTop = element.scrollHeight;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();



    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top + ((rect.bottom-rect.top)/2) <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
    }

function onVisibilityChange(el, callback) {
    return function () {
        var visible = isElementInViewport(el);
        if (visible == true && !wasVisible) {
            wasVisible = true;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange($("#phone_image")[0], function() {
   animate(); 
});


// jQuery
function showTextLine(){
    $(window).on('DOMContentLoaded load resize scroll', handler);
}
