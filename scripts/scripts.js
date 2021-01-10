FrogEscapeApp = {

    lanes: document.getElementById("pondLane1"),

    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_pond"),
    interval: undefined,

    init: function () {




        // window.onkeydown = function() {}
        this.startFrogEscape();
        this.intervalLilypad();

    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 30);

    },

    animateGame: function () {
        // this.createLilypad(); 
        this.moveLilypads();
        this.renderLilypads();
        this.removeLilypads();
        // this.animateBubba();
        // this.checkBubbaPosition();
    },

    createLilypad: function () {
        console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        FrogEscapeApp.lanes.append(lilypaddiv);

        // Randomly decide which row 0,1,2,3
        // Append to that chosen row
        // Set the vertical position to the top
        // Append all lilypads to one lane (test)
        // Make x_pos: 35, 160, 285, 410

        let lilypad = {
            x_pos: Math.round(Math.random() * 3) * 125 + 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 3,

            element: lilypaddiv,
        }
        FrogEscapeApp.lilypads.push(lilypad);
        // console.log(lilypad);
        return lilypad
    },

    intervalLilypad: function () {
        this.interval = window.setInterval(this.createLilypad.bind(FrogEscapeApp), 1000)
    },


    moveLilypads: function () {
        console.log("Moving Lilypads")
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].y_pos = this.lilypads[i].y_pos + this.lilypads[i].y_velocity;
            this.lilypads[i].x_pos = this.lilypads[i].x_pos + this.lilypads[i].x_velocity;
        }
    },

    renderLilypads: function () {
        console.log("Rendering Lilypads");
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].element.style.top = this.lilypads[i].y_pos + "px";
            this.lilypads[i].element.style.left = this.lilypads[i].x_pos + "px";
        }
    },



    removeLilypads: function () {
        console.log("Removing any Lilypads that needs to be removed.")
        for (let i = 0; i < this.lilypads.length; i++) {
            if (this.lilypads[i].y_pos != null) {
                if (this.lilypads[i].y_pos >= 700) {
                    this.lilypads[i].y_pos = null;
                    this.lanes.removeChild(this.lilypads[i].element)


                }
            }
        }



        //  console.log("Removing any Lilypads that needs to be removed.")
    },

    moveBubba: function () {

    },

    checkBubbaPosition: function () {
        //  console.log("Checking Bubba's position.")
    },




},

    FrogEscapeApp.init();














