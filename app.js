var color = document.querySelector('.color');
var eraser = document.querySelector('.eraser');
var decr = document.querySelector('.decr');
var incr = document.querySelector('.incr');
var sizeElm = document.querySelector('.size');
var save = document.querySelector('.save');
var clear = document.querySelector('.clear');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var currentPos = { x: 0, y: 0 };
var isPainting = false;
var colorPaint = '#000'
var size = 20;
canvas.addEventListener('mousedown', function (e) {
    currentPos = { x: e.offsetX, y: e.offsetY };
    isPainting = true;
});

canvas.addEventListener('mousemove', function (e) {
    if (isPainting) {
        var currentPosAfter = { x: e.offsetX, y: e.offsetY };
        //fill net ve
        ctx.beginPath();
        ctx.arc(currentPos.x,currentPos.y,size,0,2*Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();
        //
        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(currentPosAfter.x, currentPosAfter.y);
        ctx.strokeStyle =colorPaint
        ctx.lineWidth = size*2;
        ctx.stroke();
        currentPos = currentPosAfter; 
    }
});

canvas.addEventListener('mouseup', function () {
    isPainting = false;
});
color.addEventListener('change',function(e){
    colorPaint = e.target.value
})
eraser.addEventListener('click',function(e){
    colorPaint = "#fff"
})
decr.addEventListener('click',function(e){
    size-=1 
    size = size > 1 ? size : 1;
    sizeElm.innerText = size;
})
incr.addEventListener('click',function(e){
    size+=1 
    size = size < 30 ? size : 30;
    sizeElm.innerText = size;
})
//xoa canvas
clear.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
save.addEventListener('click',function(e){
    var output = canvas.toDataURL();
    save.setAttribute('href',output)
})