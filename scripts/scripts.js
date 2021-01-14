FrogEscapeApp = {

    lanes: [document.getElementById("pondLane1"),
    document.getElementById("pondLane2"),
    document.getElementById("pondLane3"),
    document.getElementById("pondLane4"),],

    //  score: 0,
    //  scoreElement = document.getElementById("score"),
    bubba: undefined,
    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_pond"),
    paused: false,
    interval: undefined,
    startBtn: document.getElementById("startBtn"),

    init: function () {
        startBtn.style.display = "none";
        for (let i = 0; i < 1; i++) {
            this.createLilypad();

        }
        // window.onkeydown = function() {}
        this.bubba = this.createBubba();
        this.startFrogEscape();
        this.intervalLilypad();
        this.moveBubba();

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
       //  this.checkBubbaPosition();
        // scoreElement.textContent = "Score: " + score;
       // document.getElementById('score').textContent = "Score: " + FrogEscapeApp.bubba.lilypad;
    },

    createLilypad: function () {
        //   console.log("Creating Lilypads.")
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
            y_velocity: 10,
            element: lilypaddiv,
            placement: Math.round(Math.random() * 3),
        }
        if (lilypad.placement == 0) {
            FrogEscapeApp.lanes[0].append(lilypad.element)
        }
        if (lilypad.placement == 1) {
            FrogEscapeApp.lanes[1].append(lilypad.element)
        }
        if (lilypad.placement == 2) {
            FrogEscapeApp.lanes[2].append(lilypad.element)
        }
        if (lilypad.placement == 3) {
            FrogEscapeApp.lanes[3].append(lilypad.element)
        }

        // console.log(lilypad);
        FrogEscapeApp.lilypads.push(lilypad);
    },

    intervalLilypad: function () {
        this.interval = window.setInterval(this.createLilypad.bind(FrogEscapeApp), 200)
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
        document.getElementById('score').textContent = "Score: " + FrogEscapeApp.bubba.lilypad;
    },

    removeLilypads: function () {
        //   console.log("Removing any Lilypads that needs to be removed.")
        for (let i = 0; i < this.lilypads.length; i++) {
            if (this.lilypads[i].y_pos >= 700) {
                if (this.lilypads[i].y_velocity != null) {
                    this.lilypads[i].y_velocity = null;
                    //this.lanes.splice(i, 1);
                    //   console.log(this.lanes[this.lilypads[i].placement])
                    //   console.log(this.lilypads[i].placement)
                    this.lanes[this.lilypads[i].placement].removeChild(this.lilypads[i].element);
                    if (FrogEscapeApp.lilypads[i].element.firstChild != null) {
                        console.log("Bubba Removed");
                        this.gameOver();
                    }
                }
            }
        }



        //  console.log("Removing any Lilypads that needs to be removed.")
    },

    createBubba: function () {
        //CSS Top: 650 Left: 425
        //  console.log("checking bubba")
        let bubbadiv = document.createElement("div");
        bubbadiv.className = "bubba";
        let bubba = {
            lilypad: 0,
            x_pos: 30,
            element: bubbadiv,
        }
        FrogEscapeApp.lilypads[0].element.append(bubbadiv);
        
        return bubba
    },

    moveBubba: function () {
        window.onkeydown = function (event) {
            console.log(event.keyCode);

            if (event.keyCode == 68) {
                if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 0) {
                    console.log("pondLane1")

                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1


                }
                
                }

                // Key: d
                if (event.keyCode == 70) {
                    if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 1) {
                        console.log("pondLane2")
                        FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                        FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                        FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                    }
                    
                    }
                    // Key: f
                    if (event.keyCode == 74) {
                        if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 2) {
                            console.log("pondLane3")

                            FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                            FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                            FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                        }
                        
                        }
                        // Key: j
                        if (event.keyCode == 75) {
                            if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 3) {
                                console.log("pondLane4")

                                FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                                FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                                FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                            }
                            
                            }
                            // Key: k
                            // Triggered by Player pressed wrong button
                        
                    
                
            
        }
    },

   // checkBubbaPosition: function () {
   //     if () {
    //        console.log("Game Over")
    //    }
    
 //   },

    togglePause: function () {
        console.log("pauseGame")
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
    //Acer Cristea's code
    gameOver: function () {
        console.log("Game Over!")
        let gameOver = document.createElement('h1');
        window.clearInterval(this.game);
        window.clearInterval(this.interval);
        for (let i = 0; i < this.lilypads.length; i++) {
                if (this.lilypads[i].y_velocity != null) {
                    this.lilypads[i].y_velocity = null;
                    //this.lanes.splice(i, 1);
                    //   console.log(this.lanes[this.lilypads[i].placement])
                    //   console.log(this.lilypads[i].placement)
                    this.lanes[this.lilypads[i].placement].removeChild(this.lilypads[i].element);
                }
                
        }
        this.lilypads = [];
        gameOver.textContent = "GAME OVER!";
        gameOver.style.textAlign = "center";
        gameOver.style.fontFamily = "fantasy";
        gameOver.style.color = "black"
        gameOver.style.fontSize = "50";
        gameOver.style.verticalAlilgn = "middle";
        gameOver.style.backgroundColor = "white";
        gameOver.className = "gameOver";
        document.body.append(gameOver);
    }
},

    FrogEscapeApp.init();














