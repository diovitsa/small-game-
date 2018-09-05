class Squere {
    constructor(elem,t = 60){
        this.elem = document.querySelector(elem);
        this.time = t*1000;
    }
    random(){
        this.elem.style.left =   Math.floor(Math.random()*20)*40;
        this.elem.style.top = Math.floor(Math.random()*20)*40;
    }
    changePosition(){
        this.interval = setInterval(() => {
            this.random();
        },4000)
    }
    stopChanging(){
        clearInterval(this.interval);
    }
    moving(){
        setTimeout(() => {
            this.stopMoving();
        }, this.time);
        document.addEventListener('keydown',(event) => {
            switch(event.keyCode){
                case 37 : if(parseInt(this.elem.style.left) > 0){
                    this.elem.style.left = parseInt(this.elem.style.left) - 40 + "px";
                };
                this.counting("#greenS","#redS");
                break;
                case 38 : if(parseInt(this.elem.style.top) > 0){
                    this.elem.style.top = parseInt(this.elem.style.top) - 40 + "px";
                };
                this.counting("#greenS","#redS");
                break;
                case 39 : if(parseInt(this.elem.style.left) <= 720){ 
                    this.elem.style.left = parseInt(this.elem.style.left) + 40 + "px";
                };
                this.counting("#greenS","#redS");
                break;
                case 40 : if(parseInt(this.elem.style.top) <= 720){
                    this.elem.style.top = parseInt(this.elem.style.top) + 40 + "px";
                };
                this.counting("#greenS","#redS");
                break;
            }
        });
    }
    stopMoving(){
        document.addEventListener("keydown",(event)=>{
            switch(event.keyCode){
                case 37 : this.elem.style.left = 0;
                this.elem.style.top = 0;
                break;
                case 38 : this.elem.style.left = 0;
                this.elem.style.top = 0;
                break;
                case 39 : this.elem.style.left = 0;
                this.elem.style.top = 0;
                break;
                case 40 : this.elem.style.left = 0;
                this.elem.style.top = 0;
                break;
            }
        });
    }
    counting(elem1, elem2){
        var greenS = document.querySelector(elem1);
        var redS = document.querySelector(elem2);
        if(parseInt(greenS.style.left) == parseInt(redS.style.left) && parseInt(greenS.style.top) == parseInt(redS.style.top)){
            this.counter("#points");
            this.random.call(redSquere);
            this.stopChanging.call(redSquere);
            this.changePosition.call(redSquere);
        }
    }
    counter(points){
        var score = document.querySelector(points);
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }

}


class Timer extends Squere{
    constructor(elem,t = 60){
        super();
        this.elem = document.querySelector(elem);
        this.time = t;
    }
    tick(){
        this.score = document.querySelector("#points")
        this.time--;
        this.elem.innerHTML = "Time left: " + this.time;
        if(this.time == 0){
            this.stop();
            alert("Finish, your score is " + this.score.innerHTML);
            this.stopChanging.call(redSquere);
        }
    }
    run(){
        this.elem.innerHTML = "Time left: " + this.time;
        this.interval = setInterval(() => {
            this.tick();
        },1000)
    
    }
    stop(){
        clearInterval(this.interval);
    }
}

var startBtn = document.querySelector('#start');
startBtn.onclick = function(){
    redSquere.random();
    redSquere.changePosition();
    
    greenSquere.moving();
    greenSquere.random();
    timer.run();


}

var redSquere = new Squere('#redS');

var greenSquere = new Squere('#greenS');

var timer = new Timer("#timer");




