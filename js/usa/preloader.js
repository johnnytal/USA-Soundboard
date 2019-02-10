var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });
        
        this.game.load.image("bg", "assets/usa/images/usa.png");
        this.game.load.image("button", "assets/usa/images/button.png");
        this.game.load.image("gear", "assets/usa/images/gearBtn.png");
        this.game.load.image("ok", "assets/usa/images/ok.png");
        this.game.load.image("musicBtn", "assets/usa/images/musicBtn.png");
        this.game.load.image("panel", "assets/usa/images/panel.png");
        
        this.game.load.image("person00", "assets/usa/images/armstrong.png");
        this.game.load.image("person01", "assets/usa/images/bush.png");
        this.game.load.image("person02", "assets/usa/images/clinton.png");
        this.game.load.image("person03", "assets/usa/images/fdr.png");
        this.game.load.image("person04", "assets/usa/images/jfk.png");
        this.game.load.image("person05", "assets/usa/images/mlkj.png");
        this.game.load.image("person06", "assets/usa/images/nixon.png");
        this.game.load.image("person07", "assets/usa/images/obama.png");
        this.game.load.image("person08", "assets/usa/images/oprah.png");
        this.game.load.image("person09", "assets/usa/images/reagen.png");
        this.game.load.image("person010", "assets/usa/images/truman.png");
        this.game.load.image("person011", "assets/usa/images/trump.png");

        this.game.load.audio('usa1', 'assets/usa/audio/armstrong.ogg');
        this.game.load.audio('usa7', 'assets/usa/audio/nixon.ogg');
        this.game.load.audio('usa12', 'assets/usa/audio/trump.ogg');
        this.game.load.audio('usa9', 'assets/usa/audio/oprah.ogg');
        this.game.load.audio('usa5', 'assets/usa/audio/kennedy.ogg');
        this.game.load.audio('usa3', 'assets/usa/audio/clinton.ogg');
        this.game.load.audio('usa6', 'assets/usa/audio/mlkj.ogg');
        this.game.load.audio('usa4', 'assets/usa/audio/fdr.ogg');
        this.game.load.audio('usa10', 'assets/usa/audio/reagen.ogg');
        this.game.load.audio('usa2', 'assets/usa/audio/bush.ogg');
        this.game.load.audio('usa8', 'assets/usa/audio/obama.ogg');
        this.game.load.audio('usa11', 'assets/usa/audio/truman.ogg');

        this.game.load.audio('music1', 'assets/usa/audio/music1.ogg');
        this.game.load.audio('music2', 'assets/usa/audio/music2.ogg');
        this.game.load.audio('music3', 'assets/usa/audio/music3.ogg');
    },
    
    create: function(){
        this.game.state.start("Game"); 
        
        initAd(); 
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};