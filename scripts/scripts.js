FrogEscapeApp = {

    lanes: [document.getElementById("pondLane1"),
    document.getElementById("pondLane2"),
    document.getElementById("pondLane3"),
    document.getElementById("pondLane4"),],

    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_pond"),
    paused: false,
    interval: undefined,

    init: function () {
        for (let i = 0; i < 1; i++) {
            this.createLilypad();
            //this.lilypads.push(this.createLilypad());
            //this.lilypads[i].y_velocity = 3.5
            
    }

            //this.lilypads[0].y_pos =  Math.random() * 150 + 150,
           // this.lilypads[1].y_pos =  Math.random() * 150 + 300,
          //  this.lilypads[2].y_pos =  Math.random() * 150 + 450,
        window.onkeydown = function (event) {
            console.log(event.keyCode);
            
          // if (event.keyCode == 68)
          // Key: d
          // if (event.keyCode == 70)
          // Key: f
          // if (event.keyCode == 74)
          // Key: j
          // if (event.keycode == 75)
          // Key: k
           
        };



        // window.onkeydown = function() {}
        this.startFrogEscape();
        this.intervalLilypad();
        this.createBubba();
    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 30);

    },

    animateGame: function () {
        // this.createLilypad(); 
     //   this.placementLilypad();
        this.moveLilypads();
        this.renderLilypads();
        this.removeLilypads();
       // this.togglePause();
        // this.moveBubba();
        // this.animateBubba();
        // this.checkBubbaPosition();
    },

    createLilypad: function () {
        console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";
       // FrogEscapeApp.lanes.append(lilypaddiv);

        // Randomly decide which row 0,1,2,3
        // Append to that chosen row
        // Set the vertical position to the top
        // Append all lilypads to one lane (test)
        // Make x_pos: 35, 160, 285, 410

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 3,
            element: lilypaddiv,
            placement: Math.round(Math.random() * 3),
        }
        if(lilypad.placement == 0) {
            FrogEscapeApp.lanes[0].append(lilypad.element)
            }
            if(lilypad.placement == 1) {
            FrogEscapeApp.lanes[1].append(lilypad.element)
            }
            if(lilypad.placement == 2) {
            FrogEscapeApp.lanes[2].append(lilypad.element)
            }
            if(lilypad.placement == 3) {
            FrogEscapeApp.lanes[3].append(lilypad.element)
            }
        
        // console.log(lilypad);
        FrogEscapeApp.lilypads.push(lilypad);
    },

    intervalLilypad: function () {
        this.interval = window.setInterval(this.createLilypad.bind(FrogEscapeApp), 800)
    },


    moveLilypads: function () {
        //   console.log("Moving Lilypads")
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].y_pos = this.lilypads[i].y_pos + this.lilypads[i].y_velocity;
            this.lilypads[i].x_pos = this.lilypads[i].x_pos + this.lilypads[i].x_velocity;

        }
    },

    renderLilypads: function () {
        //   console.log("Rendering Lilypads");
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].element.style.top = this.lilypads[i].y_pos + "px";
            this.lilypads[i].element.style.left = this.lilypads[i].x_pos + "px";
        }
    },   

    removeLilypads: function () {
        //   console.log("Removing any Lilypads that needs to be removed.")
        for (let i = 0; i < this.lilypads.length; i++) {
            if (this.lilypads[i].y_pos >= 700) {
                if (this.lilypads[i].y_velocity != null) {
                    this.lilypads[i].y_velocity = null;
                    //this.lanes.splice(i, 1);
                    console.log(this.lanes[this.lilypads[i].placement])
                    console.log(this.lilypads[i].placement)
                this.lanes[this.lilypads[i].placement].removeChild(this.lilypads[i].element);

                }
            }
        }



        //  console.log("Removing any Lilypads that needs to be removed.")
    },

  createBubba: function () {
        //CSS Top: 650 Left: 425
    console.log("checking bubba")
    let bubbadiv = document.createElement("div");
     bubbadiv.className = "bubba";
     FrogEscapeApp.lilypads[0].element.append(bubbadiv);
   },

    moveBubba: function () {

    },

    checkBubbaPosition: function () {
        //  console.log("Checking Bubba's position.")

    },

    togglePause: function () {
        window.onkeydown = function (event) {
            if (event.keycode == 65) { // A key 

            }   
        
            
        if (!paused) {
            paused = true;
        }
        else if (paused) {
            paused = false;
        }
    }
},


},

    FrogEscapeApp.init();














