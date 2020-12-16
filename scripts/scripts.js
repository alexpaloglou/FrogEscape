FrogEscapeApp = {

    rows: null,

    lilypad: [],
    game: undefined,
    container: document.getElementById("frog_container"),

    init: function () {
        for (let i = 1; i < 100; i++) {
            this.lilypad.push(this.createLilypad());
        };
        this.lilypad[0].frogOn = true;

       
        

        // window.onkeydown = function() {}
    },

    createBubba: function () {
        let Bubbadiv = document.createElement("div");
        Bubbadiv.className = "Bubba";
        this.container.append(Bubbadiv);
        let Bubba = {
            lilypadOn: false,
            element: Bubbadiv,

        }
        return Bubba;
    },

    animateBubba: function () {

    },

    createLilypad: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        this.container.append(lilypaddiv);
        let lilypad = {
            frogOn: false,
            x_velocity: 0,
            y_velocity: 0,
        }
        return lilypad
    },

    checkforLilypad: function () {

    },

    moveBubba: function () {

    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateBubba.bind(FrogEscapeApp), 30);
    },

    backroundScroll: function () {

    },

    createLongboiHawk: function () {

    },

    animateLongboiHawk: function () {
        let Longboihawkdiv = document.createElement("div");
        Longboihawkdiv.className = "LongboiHawk";
    },

    CreateGameOver: function () {

    },

    checkforCollision: function () {

    },


    
},

    FrogEscapeApp.init();














