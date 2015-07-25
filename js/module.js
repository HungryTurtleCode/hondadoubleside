var doubleSided = {
    init: function(){
        this.cacheDom();
        this.setVolume();
        this.bindEvents();
    },
    cacheDom: function(){
        this.$lvid = $('#lightvid');
        this.$dvid = $('#darkvid');
        this.$lvidcont = $('#lightvidcont');
        this.$vids = $('video');
        this.$doc = $(document);
    },
    bindEvents: function(){
        this.$doc.on('keydown', this.keydownFunc.bind(this));
        this.$doc.on('keyup', this.keyupFunc.bind(this));
        this.$vids.on('pause', this.pauseVid.bind(this));
        this.$vids.on('play', this.playVid.bind(this));
    },
    setVolume: function(){
        this.$lvid.prop('volume', 0.2);
        this.$dvid.prop('volume', 0.2);
    },
    keydownFunc: function(e){
        if(e.keyCode === 82){
            this.$lvidcont.css('top', -2000 + 'px');
            this.$dvid.prop('muted', false);
            this.$lvid.prop('muted', true);
        }
    },
    keyupFunc: function(e){
        if(e.keyCode === 82){
            this.$lvidcont.css('top', 0 + 'px');
            this.$lvid.prop('muted', false);
            this.$dvid.prop('muted', true);
        }
    },
    playVid: function(){
        for(var i = 0; i < 2; i++){
            this.$vids.get(i).play();
        }
    },
    pauseVid: function(){
        for(var i = 0; i < 2; i++){
            this.$vids.get(i).pause();
        }
    }
};

doubleSided.init();