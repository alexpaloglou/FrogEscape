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
        for (let i = 0; i < 1; i++) {
            this.lilypads.push(this.createLilypad())
        };




        // window.onkeydown = function() {}
        this.startFrogEscape();
        this.renderLilypads();
    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 20);
    },

    animateGame: function () {
      //  this.createLilypad(); 
        this.moveLilypads();
        this.removeLilypads();
        // this.animateBubba();
        this.checkBubbaPosition();
    },

    createLilypad: function () {
        console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        this.container.append(lilypaddiv)
        
        let lilypad = {
            x_pos: 10,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 40,


            element: lilypaddiv,
        // Randomly decide which row 0,1,2,3 <-- (New function)
        // Append to that chosen row
        // Set the vertical position to the top
        }
        // console.log(lilypad);
        return lilypad
    },

    



    moveLilypads: function () {
        console.log("Moving Lilypads");
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].y_pos = this.lilypads[i].y_pos + this.lilypads[i].y_velocity;
        }
    },

    renderLilypads: function () {
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].element.style.top = this.lilypads[i].y_pos + "px";
            this.lilypads[i].element.style.left = this.lilypads[i].x_pos + "px";
        }
    },



    removeLilypads: function () {
        //  console.log("Removing any Lilypads that needs to be removed.")
    },

    moveBubba: function () {

    },

    checkBubbaPosition: function () {
        //  console.log("Checking Bubba's position.")
    },


},

FrogEscapeApp.init();














