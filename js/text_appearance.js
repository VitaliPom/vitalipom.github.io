toptext = 65;
modulu2 = 0
function showTextLine(){
    addTextBox("hi");
    addTextBox("hi");
    addTextBox("how are you doing?");
    addTextBox("ok");
    addTextBox("?");
    addTextBox("what are you doing?");
    addTextBox("I'm coding");
    

}

function addTextBox(text){
    if(modulu2 % 2 == 1){
        $('#chat_text').append('<div style="'+'top:'+toptext+'vh'+';'+'" class="font_size padding textbox left_textbox">'+text+'</div>');
    }else{
        $('#chat_text').append('<div style=";'+'top:'+toptext+'vh'+';'+'" class="font_size padding textbox right_textbox">'+text+'</div>');
    }
    modulu2 = (modulu2 + 1) % 2;
    toptext+=5;
    updateScroll(); 
}

function updateScroll(){
    var element = document.getElementById("chat_text");
    element.scrollTop = element.scrollHeight;
}

