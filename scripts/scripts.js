FrogEscapeApp = {

    lanes: [
        document.getElementById("pondLane1"),
        document.getElementById("pondLane2"),
        document.getElementById("pondLane3"),
        document.getElementById("pondLane4"),
    ],

    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_container"),

    init: function () {
        for (let i = 0; i < 10; i++) {
            this.lilypads.push(this.createLilypad());
        }
        
        // window.onkeydown = function() {}
        this.startFrogEscape();

    },

    animateGame: function () {
       // this.createLilypad(); 
        this.moveLilypads();
        this.renderLilypads();
        this.removeLilypads();
        // this.animateBubba();
        this.checkBubbaPosition();
    },

    createLilypad: function () {
        console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        this.container.append(lilypaddiv)

        // Randomly decide which row 0,1,2,3
        // Append to that chosen row
        // Set the vertical position to the top


        let lilypad = {
            x_pos: 0,
            y_pos: 10,
            y_veloctiy: 10,

            element: lilypaddiv,
        }
        // console.log(lilypad);
        return lilypad
    },



    moveLilypads: function () {
        console.log("Moving Lilypads")
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].y_pos = this.lilypads[i].y_pos + this.lilypads[i].y_velocity;
        }
    },

    renderLilypads: function () {
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].element.style.top = this.lilypads[i].y_pos + "px";
        }
    },



    removeLilypads: function () {
          console.log("Removing any Lilypads that needs to be removed.")
          let lilypad = document.getElementsByClassName('lilypad');
            for (let i = 0; i < this.lilypads.length; i++) {
                if (this.lilypads[i].y_pos = 700) {
                lilypad.parentNode.removeChild(lilypad);
            }
            }
        
        //  console.log("Removing any Lilypads that needs to be removed.")
    },

    moveBubba: function () {

    },

    checkBubbaPosition: function () {
        //  console.log("Checking Bubba's position.")
    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 30);
    },




},

    FrogEscapeApp.init();














