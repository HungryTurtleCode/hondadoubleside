$(document).ready(function(){

    $("#lightvid").prop('volume', 0.2);
    $("#darkvid").prop('volume', 0.2);

    $(document).on("keydown", function (e) {
        if(e.keyCode === 82){
            console.log(e);
            $("#lightvidcont").css('top', -2000 + 'px');
            $("#lightvid").prop('muted', true);
            $("#darkvid").prop('muted', false);
        }
    });

    $(document).on("keyup", function(e){
        if(e.keyCode === 82){
            $("#lightvidcont").css('top', 0 + 'px');
            $("#lightvid").prop('muted', false);
            $("#darkvid").prop('muted', true);
        }
    });

    var darkvid = document.getElementById("darkvid");
    var lightvid = document.getElementById("lightvid");

    darkvid.onpause = function() {
        lightvid.pause();
    };

    lightvid.onpause = function() {
        darkvid.pause();
    };

    darkvid.onplay = function() {
        lightvid.play();
    };

    lightvid.onplay = function() {
        darkvid.play();
    };

});