$(document).ready(function(){

    $('#lightvid').prop('volume', 0.2);
    $('#darkvid').prop('volume', 0.2);

    $(document).on('keydown', function (e) {
        if(e.keyCode === 82){
            $('#lightvidcont').css('top', -2000 + 'px');
            $('#lightvid').prop('muted', true);
            $('#darkvid').prop('muted', false);
        }
    });

    $(document).on('keyup', function(e){
        if(e.keyCode === 82){
            $('#lightvidcont').css('top', 0 + 'px');
            $('#lightvid').prop('muted', false);
            $('#darkvid').prop('muted', true);
        }
    });

    $('video').on('pause', function() {
        for(var i = 0; i < 2; i++){
            $('video').get(i).pause();
        }
    });

    $('video').on('play', function() {
        for(var i = 0; i < 2; i++){
            $('video').get(i).play();
        }
    });
});