FrogEscapeApp = {

    lanes: [document.getElementById("pondLane1"),
    document.getElementById("pondLane2"),
    document.getElementById("pondLane3"),
    document.getElementById("pondLane4"),],

    resetBtn: document.getElementById("gameOver"),
    bubba: undefined,
    lilypads: [],
    game: undefined,
    container: document.getElementById("frog_pond"),
    interval: undefined,
    startBtn: document.getElementById("startBtn"),
    test: 0, //for TimeCheck

    //Alex's Code
    init: function () {
        //  startBtn.style.display = "none";
        for (let i = 0; i < 1; i++) {
            this.createLilypad();

        }
        // window.onkeydown = function() {}
        this.bubba = this.createBubba();
        this.startFrogEscape();
        this.intervalLilypad();
        this.moveBubba();
        window.onkeyup = function (event) {
            if (event.keyCode == 27) // ESC key 
            {

                history.back();
            }
        }

    },

    startFrogEscape: function () {
        this.game = window.setInterval(this.animateGame.bind(FrogEscapeApp), 30);
    },

    //Alex's Code
    animateGame: function () {
        this.moveLilypads();
        this.renderLilypads();
        this.removeLilypads();
        this.timeCheck();
    },


    //Erik's Code
    createLilypad: function () {
        //   console.log("Creating Lilypads.")
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

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
        this.interval = window.setInterval(this.createLilypad.bind(FrogEscapeApp), 500)
    },
    //Erik's Code
    timeCheck: function () {
        if (FrogEscapeApp.bubba.lilypad == 20) {
            if (this.test == 0) {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.createLilypad2.bind(FrogEscapeApp), 400)
                console.log("Increase Speed 1");
                this.test = 1;
            }
        }
        if (FrogEscapeApp.bubba.lilypad == 40) {
            if (this.test == 1) {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.createLilypad3.bind(FrogEscapeApp), 350)
                console.log("Increase Speed 2");
                this.test = 2;
            }
        }
        if (FrogEscapeApp.bubba.lilypad == 60) {
            if (this.test == 2) {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.createLilypad4.bind(FrogEscapeApp), 300)
                console.log("Increase Speed 3");
                this.test = 3;
            }
        }
        if (FrogEscapeApp.bubba.lilypad == 80) {
            if (this.test == 3) {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.createLilypad5.bind(FrogEscapeApp), 300)
                console.log("Increase Speed 4");
                this.test = 4;
            }
        }
        if (FrogEscapeApp.bubba.lilypad == 100) {
            if (this.test == 4) {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.createLilypad6.bind(FrogEscapeApp), 300)
                console.log("Increase Speed 5");
                this.test = 5;
            }
        }
    },


    // Erik's Code
    createLilypad2: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 11,
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

    createLilypad3: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 12,
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

    createLilypad4: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 13,
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

    createLilypad5: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 14,
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

    createLilypad6: function () {
        let lilypaddiv = document.createElement("div");
        lilypaddiv.className = "lilypad";

        let lilypad = {
            x_pos: 35,
            y_pos: 10,
            x_velocity: 0,
            y_velocity: 15,
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

    //Erik's Code
    moveLilypads: function () {
        //   console.log("Moving Lilypads")
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].y_pos = this.lilypads[i].y_pos + this.lilypads[i].y_velocity;
            this.lilypads[i].x_pos = this.lilypads[i].x_pos + this.lilypads[i].x_velocity;

        }
    },

    //Erik's Code
    renderLilypads: function () {
        //   console.log("Rendering Lilypads");
        for (let i = 0; i < this.lilypads.length; i++) {
            this.lilypads[i].element.style.top = this.lilypads[i].y_pos + "px";
            this.lilypads[i].element.style.left = this.lilypads[i].x_pos + "px";
        }
        let score = document.getElementById('score')
        score.textContent = "Score: " + FrogEscapeApp.bubba.lilypad;

    },
    //Erik's Code
    removeLilypads: function () {
        //   console.log("Removing any Lilypads that needs to be removed.")
        for (let i = 0; i < this.lilypads.length; i++) {
            if (this.lilypads[i].y_pos >= 660) {
                if (this.lilypads[i].y_velocity != null) {
                    this.lilypads[i].y_velocity = null;
                    this.lanes[this.lilypads[i].placement].removeChild(this.lilypads[i].element);
                    if (FrogEscapeApp.lilypads[i].element.firstChild != null) {
                        this.gameOver();
                    }
                }
            }
        }



        //  console.log("Removing any Lilypads that needs to be removed.")
    },
    // Alex's Code 
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
    //Alex and Erik combined Code
    moveBubba: function () {
        window.onkeydown = function (event) {

            if (event.keyCode == 68) {
                if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 0) {


                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                }
            }

            // Key: d
            if (event.keyCode == 70) {
                if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 1) {

                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                }
            }
            // Key: f
            if (event.keyCode == 74) {
                if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 2) {


                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                }
            }
            // Key: j
            if (event.keyCode == 75) {
                if (FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].placement == 3) {


                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad].element.removeChild(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.lilypads[FrogEscapeApp.bubba.lilypad + 1].element.append(FrogEscapeApp.bubba.element);
                    FrogEscapeApp.bubba.lilypad = FrogEscapeApp.bubba.lilypad + 1
                }
            }
            // Key: k
            // Triggered by Player pressed wrong button
        }
    },

    //Erik modified old code from our friend Acer Cristea 
    gameOver: function () {
        console.log("Game Over!")
        let gameOver = document.createElement('h2');
        let backGround = document.createElement('div');
        backGround.className = "Background";
        //  let container = document.getElementById("frog_pond")
        //  let lanes = document.getElementsByClassName
        window.clearInterval(this.game);
        window.clearInterval(this.interval)
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
        gameOver.textContent = "GAME OVER! Score: " + FrogEscapeApp.bubba.lilypad + " " + "Click to restart";
        gameOver.style.textAlign = "center";
        gameOver.style.fontFamily = "arial";
        gameOver.style.color = "black"
        gameOver.style.fontSize = "80";
        //  gameOver.style.verticalAlign = "middle";
        // gameOver.style.backgroundColor = "green";
        gameOver.className = "gameOver";
        this.bubba = undefined;
        document.body.append(gameOver);
        this.container.append(backGround);
        gameOver.onclick = function () {
            location.reload();
            return false;
            // FrogEscapeApp.init()
            // document.body.removeChild(gameOver);
            // FrogEscapeApp.container.removeChild(backGround);
            console.log("Restarting")
        }
    },
},

    FrogEscapeApp.init();

