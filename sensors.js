var handleOrientationEvent = function(e){
    var alpha = e.alpha,
        beta = e.beta
        gamma = e.gamma;
    document.getElementById("gx").innerHTML = alpha;
    document.getElementById("gy").innerHTML = beta;
    document.getElementById("gz").innerHTML = gamma;
};

window.addEventListener('deviceorientation', handleOrientationEvent, false);