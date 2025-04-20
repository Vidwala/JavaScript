function StopWatch(){
    let duration = 0;
    let startTime, endTime, running;

    this.start = function(){
        if(running)
            throw new Error('Stopwatch is Already started..')

        running = true;
        startTime = new Date();
    }

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not yet started..')

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }

    this.reset = function(){
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    });
}
