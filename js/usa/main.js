var gameMain = function(game){
    var sounds;
   
    multiSounds = false;
    
    playModes = ['toggle', 'trigger', 'gate', 'pause', 'none'];
    mode = playModes[1];
};

gameMain.prototype = {
    create: function(){
        bg = this.add.image(0, 0, 'bg');
        bg.alpha = 0.6;
 
        buttonsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);

        button1 = buttonsGroup.create(126, 121, 'button');
        button1.tint = '0x000fff';
        button2 = buttonsGroup.create(295+106, 15+106, 'button');
        button3 = buttonsGroup.create(570+106, 15+106, 'button');
        button3.tint = '0x000fff';
        button4 = buttonsGroup.create(20+106, 235+106, 'button');
        button4.tint = '0x000fff';
        button5 = buttonsGroup.create(295+106, 235+106, 'button');
        button6 = buttonsGroup.create(570+106, 235+106, 'button');
        button6.tint = '0x000fff';
        
        button71 = buttonsGroup.create(20+106, 455+106, 'button');
        button71.tint = '0x000fff';
        button81 = buttonsGroup.create(295+106, 455+106, 'button');
        button91 = buttonsGroup.create(570+106, 455+106, 'button');
        button91.tint = '0x000fff';
        button101 = buttonsGroup.create(20+106, 675+106, 'button');
        button101.tint = '0x000fff';
        button111 = buttonsGroup.create(295+106, 675+106, 'button');
        button121 = buttonsGroup.create(570+106, 675+106, 'button');
        button121.tint = '0x000fff';
        
        buttons = [button1, button2, button3, button4, button5, button6, button71, button81, button91, button101, button111, button121];
        
        for (n=0; n<12; n++){
        	image = this.add.image(buttons[n].x, buttons[n].y, 'person0' + n);
        	buttons[n].alpha = 0.7;
        	buttons[n].scale.set(1.1, 1.1);
        	image.alpha = 0.85;
        	image.scale.set(1.1, 1.1);
        	image.anchor.set(.5,.5);
        	buttons[n].inputEnabled = true;
        	buttons[n].anchor.set(.5,.5);
        }
        
        button200 = buttonsGroup.create(425, 890, 'musicBtn');
        button200.scale.set(1.2, 1.2);
        button201 = buttonsGroup.create(225, 890, 'musicBtn');
        button201.scale.set(1.2, 1.2);
        button202 = buttonsGroup.create(25, 890, 'musicBtn');
        button202.scale.set(1.2, 1.2);
        
        button7 = this.add.sprite(650, 920, 'gear');
        button7.tint = 0xffff00;

        button7.inputEnabled = true;
        
        button200.inputEnabled = true;
        button201.inputEnabled = true;
        button202.inputEnabled = true;
        
        button200.tint = 0x3355ff;
        button201.tint = 0xffffff;
        button202.tint = 0xff2233;

		loadSounds();

        modal = new gameModal(game);

        button1.events.onInputDown.add(function(){
            playSound(sfxusa1, button1, 0xaa55ff, '#000055');
        }, this);
            
        button2.events.onInputDown.add(function(){
            playSound(sfxusa2, button2, 0xaa55ff, '#00ff00');
        }, this);
        
        button3.events.onInputDown.add(function(){
            playSound(sfxusa3, button3, 0xaa55ff, '#f3fff5');
        }, this);
        
        button4.events.onInputDown.add(function(){
            playSound(sfxusa4, button4, 0xaa55ff, '#00ffff');
        }, this);
        
        button5.events.onInputDown.add(function(){
            playSound(sfxusa5, button5, 0xaa55ff, '#000000');
        }, this);
        
        button6.events.onInputDown.add(function(){
            playSound(sfxusa6, button6, 0xaa55ff, '#ffd00f');
        }, this);
        
        button71.events.onInputDown.add(function(){
            playSound(sfxusa7, button71, 0xaa55ff, '#000055');
        }, this);
        
        button81.events.onInputDown.add(function(){
            playSound(sfxusa8, button81, 0xaa55ff, '#00ff00');
        }, this);
        
        button91.events.onInputDown.add(function(){
            playSound(sfxusa9, button91, 0xaa55ff, '#f3fff5');
        }, this);
        
        button101.events.onInputDown.add(function(){
            playSound(sfxusa10, button101, 0xaa55ff, '#00ffff');
        }, this);
        
        button111.events.onInputDown.add(function(){
            playSound(sfxusa11, button111, 0xaa55ff, '#ffd00f');
        }, this);
        
        button121.events.onInputDown.add(function(){
            playSound(sfxusa12, button121, 0xaa55ff, '#ffd00f');
        }, this);

        button7.events.onInputDown.add(function(){
            openOptions();
        }, this);
       
        button200.events.onInputDown.add(function(){
        	if (!sfxMusic1.isPlaying){
           	 	sfxMusic1.play();
           	 	button200.tint = 0xf0f000;
            }
            else{
            	sfxMusic1.stop();
            	button200.tint = 0x3355ff;
            }
        }, this);
        
        button201.events.onInputDown.add(function(){
        	if (!sfxMusic2.isPlaying){
           	 	sfxMusic2.play();
           	 	button201.tint = 0xf0f000;
            }
            else{
            	sfxMusic2.stop();
            	button201.tint = 0xffffff;
            }
        }, this);
        
        button202.events.onInputDown.add(function(){
        	if (!sfxMusic3.isPlaying){
           	 	sfxMusic3.play();
           	 	button202.tint = 0xf0f000;
            }
            else{
            	sfxMusic3.stop();
            	button202.tint = 0xff2233;
            }
        }, this);
        
        for (b = 0; b< buttons.length; b++){
            buttons[b].events.onInputUp.add(function(){
                if (mode == 'gate') stopSounds();
            }, this);  
        } 
		
		setTimeout(function(){
			try{
                StatusBar.hide;
            } catch(e){} 
	        try{
	            window.plugins.insomnia.keepAwake();
	        } catch(e){}   
		}, 2000);
    }
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}

function playSound(sound, button, color1, color2){
    if (!sound.isPlaying){
        if (!multiSounds) stopSounds();

        if (!sound.paused){
            sound.play();    
        }
        else{
            sound.resume();
        }
        
        button.scale.set(0.87, 0.87);

        sound.onStop.add(function(){
           button.scale.set(1,1);
        }, this);
        
        game.stage.backgroundColor = color2;
    } 
    
    else{
        if (mode == 'toggle'){
            sound.stop();
            game.stage.backgroundColor = '#fffa6f';
        }
        else if (mode == 'trigger'){
            sound.play();
        }
        else if (mode == 'pause'){
            sound.pause();
        }
    }    
}

function openOptions(){
    button7.inputEnabled = false;
    optionsColor = '0x49FFFE';
    optionsFontSize = 45;
    
    modal.createModal({
        type:"options",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [
            {
                type: "image", content: "panel", offsetY: 0, offsetX: 0, contentScale: 2
            },
            {
                type: "text", content: "Try different play modes:", fontSize: 34, color: "0xFEFF49",
                offsetY: -250, stroke: "0x000000", strokeThickness: 5, fontFamily: "Luckiest Guy",
            },
            {
                type: "text", content: "Toggle", fontSize: optionsFontSize, color: optionsColor,
                stroke: "0x000000", strokeThickness: 4,
                offsetY: -150, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[0], this);         
                }
            },
            {
                type: "text", content: "Trigger", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -70, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[1], this);
                }
            },
            {
                type: "text", content: "Gate", fontSize: optionsFontSize, 
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 10, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[2], this);
                }
            },
            {
                type: "text", content: "Pause", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 90, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[3], this);
                }
            },
            {
                type: "text", content: "None", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 170,  fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[4], this);
                }
            },
            {
                type: "text", content: "Multichannel", fontSize: optionsFontSize, color: '0xa9a9a9',
                offsetY: 270, offsetX: 0,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 4, 
                callback: function () {
                    allowMultiple(this);
                }
            },
            {
                type: "image", content: "ok", offsetY: 100, offsetX: 300, contentScale: 0.75,
                callback: function () {
                    modal.hideModal('options');
                    button7.inputEnabled = true;
                }
            },
        ]
   });
   
   modal.showModal("options"); 

   if (multiSounds) modal.getModalItem('options',9).tint = 0x00ff00;
   
   if (mode == 'toggle') modal.getModalItem('options',4).tint = 0x00ff00;
   else if (mode == 'trigger') modal.getModalItem('options',5).tint = 0x00ff00;
   else if (mode == 'gate') modal.getModalItem('options',6).tint = 0x00ff00;
   else if (mode == 'pause') modal.getModalItem('options',7).tint = 0x00ff00;
   else if (mode == 'none') modal.getModalItem('options',8).tint = 0x00ff00;

   for (n=0; n<11; n++){
       game.add.tween(modal.getModalItem('options',n)).from( { y: - 800 }, 500, Phaser.Easing.Linear.In, true);
   }    
}

function changePlayMode(_mode, btn){
    mode = _mode;
    for (n=8; n>3; n--){
        modal.getModalItem('options', n).tint = 0xffffff;
    }
    btn.tint = 0x00ff00;
}

function allowMultiple(btn){
    if (multiSounds) multiSounds = false;
    else { multiSounds = true; }
    
    if (btn.tint == 0xffffff) btn.tint = 0x00ff00;
    else { btn.tint = 0xffffff; }
}

function loadSounds(){
    sounds = [ 
        sfxusa1 = game.add.audio('usa1'),
        sfxusa2 = game.add.audio('usa2'),
        sfxusa3 = game.add.audio('usa3'),
        sfxusa4 = game.add.audio('usa4'),
        sfxusa5 = game.add.audio('usa5'),
        sfxusa6 = game.add.audio('usa6'),
        sfxusa7 = game.add.audio('usa7'),
        sfxusa8 = game.add.audio('usa8'),
        sfxusa9 = game.add.audio('usa9'),
        sfxusa10 = game.add.audio('usa10'),
        sfxusa11 = game.add.audio('usa11'),       
        sfxusa12 = game.add.audio('usa12')
    ];

    sfxMusic1 = game.add.audio('music1', 0.6, true);
    sfxMusic2 = game.add.audio('music2', 0.8, true);
    sfxMusic3 = game.add.audio('music3', 0.7, true);
}

function initAd(){
    var admobid = {};

    admobid = {
        banner: 'ca-app-pub-9795366520625065/6106370553'
    };

    if(AdMob) AdMob.createBanner({
       adId: admobid.banner,
       position: AdMob.AD_POSITION.BOTTOM_CENTER,
       autoShow: true,
       isTesting: false
    });
}