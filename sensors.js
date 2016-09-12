var degtorad = Math.PI / 180;

var handleOrientationEvent = function(e){
    var alpha = e.alpha,
        beta = e.beta
        gamma = e.gamma;
    document.getElementById("gx").innerHTML = '<b>X:</b> ' + alpha;
    document.getElementById("gy").innerHTML = '<b>Y:</b> ' + beta;
    document.getElementById("gz").innerHTML = '<b>Z:</b> ' + gamma;

    // calculate compass heading
    var _x = beta ? beta * degtorad : 0; // beta
    var _y = gamma ? gamma * degtorad : 0; // gamma
    var _z = alpha ? alpha * degtorad : 0; // alpha

    var cX = Math.cos(_x);
    var cY = Math.cos(_y);
    var cZ = Math.cos(_z);
    var sX = Math.sin(_x);
    var sY = Math.sin(_y);
    var sZ = Math.sin(_z);

    var Vx = -cZ * sY - sZ * sX * cY;
    var Vy = - sZ * sY + cZ * sX * cY;

    var compassHeading = Math.atan(Vx / Vy);

    if(Vy < 0){
        compassHeading += Math.PI;
    }else if(Vx < 0){
        compassHeading += 2 * Math.PI;
    }

    compassHeading *= (180 / Math.PI); // convert back to degrees

    document.getElementById("direction").innerHTML = '<b>Heading:</b> ' + compassHeading;
};

var handleDeviceMotionEvent = function(e){
    var acc = e.accelerationIncludingGravity,
        x = acc.x,
        y = acc.y,
        z = acc.z;
    document.getElementById("ax").innerHTML = '<b>X:</b> ' + x;
    document.getElementById("ay").innerHTML = '<b>Y:</b> ' + y;
    document.getElementById("az").innerHTML = '<b>Z:</b> ' + z;
};

var handleCompassEvent = function(e){
    var compassHeading = e.webkitCompassHeading;
    document.getElementById("direction").innerHTML = '<b>Heading:</b> ' + compassHeading;
};

window.addEventListener('deviceorientation', handleOrientationEvent, false);
window.addEventListener('devicemotion', handleDeviceMotionEvent, false);