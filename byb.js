(function (w) {
    w.BackyardBrains = w.BackyardBrains || {};

    BackyardBrains.ContinuousView = {};

    var canvas, context, height, width, x_axis, y_axis;

    var c = 0;
    var timePassed = 0;
    var pixelScale = 100;

    BackyardBrains.ContinuousView.setup = function () {
        canvas = document.getElementById('waveformCanvas');
        context = canvas.getContext('2d');

        context.fillStyle = 'rgb(0,0,0)';

        context.lineJoin = 'round';

        height = canvas.height;
        width = canvas.width;

        x_axis = height / 2;
        y_axis = 0;

        context.save();

        draw();
    }

    function draw () {
        context.clearRect(0, 0, width, height);
        drawXAxis();
        drawYAxis();
        drawTickmarks();

        context.save();
        context.strokeStyle = 'rgb(0,255,0)';
        drawWave(c);
        context.restore();

        timePassed = timePassed + .01;
        c = timePassed*Math.PI;
        setTimeout(draw, 10);
    }

    function drawWave(c) {
        var x = c;
        var y = Math.sin(c*2);
        context.beginPath();
        context.moveTo(y_axis, pixelScale * y+x_axis);
        for (i = 0; i <= width; i += 1) {
            x = c+i/pixelScale;
            y = Math.sin(x*2);
            context.lineTo(i, pixelScale*y+x_axis);
        }
        context.stroke();
    }

    function drawXAxis () {
        bluePen();
        context.moveTo(0, x_axis);
        context.lineTo(width, x_axis);
        context.stroke();
    }

    function drawYAxis () {
        bluePen();
        context.moveTo(0, 0);
        context.lineTo(0, height);
        context.stroke();
    }

    function drawTickmarks () {
        bluePen();
        for (var i = 0; i < 9; i++) {
            context.moveTo(0, i/8 * height);
            context.lineTo(5, i/8 * height);
            context.stroke();
        }
    }

    function bluePen () {
        context.strokeStyle = 'rgb(0,0,255)';
        context.lineWidth = 2;
        context.beginPath();
    }

    function greenPen() {
        context.strokeStyle = 'rgb(0,255,0)';
        context.lineWidth = 2;
        context.beginPath();
    }
})(window);

/*
var datapointsWidth = 8000;
var datapointsHeight = 4000;



function draw(samplesToDraw) {


           // Fill backing rectangle with black.
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0,0,width,height);

        ctx.strokeStyle = "rgb(0,255,0)";
        ctx.beginPath();
        ctx.moveTo(0, samplesToDraw[0] * heightRatio - height/2);
        for (var i = 1; i < samplesToDraw.length; i++) {
            ctx.lineTo(i, samplesToDraw[i] * heightRatio + height/2);
        }

        ctx.stroke();
    }
}

function generateSineArray(hz, maxAmplitude, len, offset) {
    var sampleArray = new Array();
    offset = typeof(offset) != 'undefined' ? offset : 0;
    for (var i = 0; i < len; i++) {
        sampleArray[i] = Math.sin(i*hz) * maxAmplitude;
    }
    return sampleArray;
}

function generateNoiseArray(maxAmplitude, length) {
    var sampleArray = new Array();
    for(var i = 0; i < length; i++) {
        sampleArray[i] = Math.random() * maxAmplitude;
    }
    return sampleArray;
}

function setDatapointsSize() {
    datapointsHeight = document.getElementById("datapointsHeight").value;
    datapointsWidth = document.getElementById("datapointsWidth").value;
    draw(generateSineArray(0.01, datapointsHeight/2, datapointsWidth, 0));
}
*/
