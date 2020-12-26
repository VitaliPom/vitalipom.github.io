var start = new Date();
$("#time").html(start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds()).delay(1000);
func();

function func(){
    setTimeout(function(){
        var start = new Date();
        $("#time").html(pad(start.getHours(),2) + ":" + pad(start.getMinutes(),2) + ":" + pad(start.getSeconds(),2)).delay(1000);
        func();
    },1000); 

    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
}
