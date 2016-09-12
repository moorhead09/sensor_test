var handleOrientationEvent = function(e){
    var alpha = e.alpha,
        beta = e.beta
        gamma = e.gamma;
    document.getElementById("gx").innerHTML = 'X: ' + alpha;
    document.getElementById("gy").innerHTML = 'Y: ' + beta;
    document.getElementById("gz").innerHTML = 'Z: ' + gamma;
};

var handleDeviceMotionEvent = function(e){
    var acc = e.acceleration,
        x = acc.x,
        y = acc.y,
        z = acc.z;
    document.getElementById("ax").innerHTML = 'X: ' + x;
    document.getElementById("ay").innerHTML = 'Y: ' + y;
    document.getElementById("az").innerHTML = 'Z: ' + z;
}
window.addEventListener('deviceorientation', handleOrientationEvent, false);
window.addEventListener('devicemotion', handleDeviceMotionEvent, false);