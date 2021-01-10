FrogEscapeApp = {

    lanes: [
        document.getElementById("pondLane1"),
        document.getElementById("pondLane2"),
        document.getElementById("pondLane3"),
        document.getElementById("pondLane4"),
    ],

    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_pond"),

    init: function () {
        for (let i = 0; i < 5; i++) {
            this.lilypads.push(this.createLilypad(0))
        
        }
        this.lilypads[0].x_pos = 35
            this.lilypads[2].x_pos = 285

            this.lilypads[3].x_pos = 410
            this.lilypads[3].y_pos = 35
            this.lilypads[4].x_pos = 410
            this.lilypads[4].y_pos = 100

        
        // window.onkeydown = function() {}
        this.startFrogEscape();

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

    createLilypad: function (lane) {
        console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
        FrogEscapeApp.lanes[lane].append(lilypaddiv);
        
        // Randomly decide which row 0,1,2,3
        // Append to that chosen row
        // Set the vertical position to the top
        // Append all lilypads to one lane (test)
        // Make x_pos: 35, 160, 285, 410

        let lilypad = {
            x_pos: 160,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 3,

            element: lilypaddiv,
        }
        // console.log(lilypad);
        return lilypad
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
                if (this.lilypads[i].x_pos != null) {
                    if (this.lilypads[i].y_pos >= 700) {
                    this.lanes[0].removeChild(this.lilypads[i].element)
                   
                
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














