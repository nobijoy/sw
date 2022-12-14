

function Stopwatch(){

    let startTime, stopTime, running, duration = 0 ;

    this.start = function (){
        if(running)
        throw new Error('Stopwatch already started');

        running = true;
        startTime = new Date();
    };

    this.stop = function (){
        if(!running)
        throw new Error('Already Stopped');

        running = false;
        stopTime = new Date();

        const seconds = ( stopTime.getTime() - startTime.getTime())/1000;

        duration += seconds;
    };

    this.reset = function (){
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function (){ return duration; }
    });


}