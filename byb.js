function draw(){
    var canvas = document.getElementById("tutorial");
    if (canvas.getContext && sampleData){
        var ctx = canvas.getContext("2d");

        canvas.width = sampleData.length;
        var height = canvas.height;
        var width = canvas.width;

        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0,0,width,height);

        ctx.strokeStyle = "rgb(0,255,0)";
        ctx.beginPath();
        ctx.moveTo(0,height/2);
        for(var i = 0; i < width; i++) {
            ctx.lineTo(i, Math.random()*height);
        }
        ctx.stroke();
    }
}
