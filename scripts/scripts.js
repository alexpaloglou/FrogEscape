FrogEscapeApp = {

    
    lilypad: [],

    init: function() {
        for (let i = 1; i < 100; i++) {
            this.lilypad.push(this.createLilypad());
        };
        this.lilypad[0].frogOn = true;

        // window.onkeydown = function() {}
    }, 
    createBubba: function() {

    },
    animateBubba: function() {

    },

    createLilypad: function() {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        this.container.append(lilypaddiv);
        let lilypad = {
            frogOn: false,
            x_velocity: 0,
            y_velocity: 0
        }
    },

    checkforLilypad: function() {

    },

    moveBubba: function() {

    },

    startFrogEscape: function() {

    },

    backroundScroll: function() {

    },

    createLongboiHawk: function() {

    },

    animateLongboiHawk: function() {

    },

    CreateGameOver: function() {

    }, 

    checkforCollision: function() {

    },

    
},

FrogEscapeApp.init();
    













