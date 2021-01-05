FrogEscapeApp = {

    lanes: [
        document.getElementById("pondLane1"), 
        document.getElementById("pondLane2"),
        document.getElementById("pondLane3"),
        document.getElementById("pondLane4"),
    ],

    lilypad: [],
    game: undefined,
    container: document.getElementById("frog_container"),

    init: function () {
        



       
        

        // window.onkeydown = function() {}
        this.startFrogEscape();

    },

    animateGame: function () {
        this.createLilypad(); 
        this.moveLilypads();
        this.removeLilypads();
        // this.animateBubba();
        this.checkBubbaPosition();
    },

    createLilypad: function () {
        console.log("Creating Lilypads.")
       // let lilypaddiv = document.createElement("div");
       // lilypaddiv.className = "lilypad";
        // Randomly decide which row 0,1,2,3
        // Append to that chosen row
        // Set the vertical position to the top
    

        //let lilypad = {
          //  frogOn: false,
           // x_velocity: 0,
           // y_velocity: 20,
           // element: lilypaddiv,
            
        


        
       // console.log(lilypad);
// return lilypad
    },



    moveLilypads: function () {
        console.log("Moving Lilypads")

    },

    removeLilypads: function () {
        console.log("Removing any Lilypads that needs to be removed.")
    },

    moveBubba: function () {

    },

    checkBubbaPosition: function () {
        console.log("Checking Bubba's position.")
    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 30);
    },



    
},

    FrogEscapeApp.init();














