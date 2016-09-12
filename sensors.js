var handleOrientationEvent = function(e){
    var alpha = e.alpha,
        beta = e.beta
        gamma = e.gamma;
    document.getElementById("gx").innerHTML = '<b>X:</b> ' + alpha;
    document.getElementById("gy").innerHTML = '<b>Y:</b> ' + beta;
    document.getElementById("gz").innerHTML = '<b>Z:</b> ' + gamma;
};

var handleDeviceMotionEvent = function(e){
    var acc = e.accelerationIncludingGravity,
        x = acc.x,
        y = acc.y,
        z = acc.z;
    document.getElementById("ax").innerHTML = '<b>X:</b> ' + x;
    document.getElementById("ay").innerHTML = '<b>Y:</b> ' + y;
    document.getElementById("az").innerHTML = '<b>Z:</b> ' + z;
}
window.addEventListener('deviceorientation', handleOrientationEvent, false);
window.addEventListener('devicemotion', handleDeviceMotionEvent, false);