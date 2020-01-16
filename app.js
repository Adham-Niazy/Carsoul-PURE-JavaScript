var imgs = document.getElementsByClassName("imgs");
var overlay = document.getElementById("overlay");
var overlayImg = document.getElementById("overlayImg");
var closeIcon = document.getElementById("closeIcon");
var prevIcon = document.getElementById("prevIcon");
var nextIcon = document.getElementById("nextIcon");
var imgsArray = [];
var currentIndex = 0;


for ( let i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i]);
    imgs[i].addEventListener("click", function (e) {
        overlay.classList.add("zoomIn");
        overlay.classList.remove("none");
        overlayImg.src = e.target.src
        currentIndex = imgsArray.indexOf(e.target);
    })
}

nextIcon.onclick = function () {
    next();
}
prevIcon.onclick = function () {
    prev();
}

closeIcon.onclick = function () {
    delay ();
}


// Close function
function close () {
    overlay.classList.add("none");
}


// Delay closing function

function delay () {
    overlay.classList.add("zoomOut");
    setTimeout(close ,300);
    setTimeout(function () {overlay.classList.remove("zoomOut");},300);
}

// Next function 
function next () {
    currentIndex ++;
    if ( currentIndex === imgsArray.length ) {
        currentIndex = 0 ;
    }
    overlayImg.src = imgsArray[currentIndex].src;
}

// Prev function 
function prev () {
    currentIndex --;
    if ( currentIndex < 0 ) {
        currentIndex = imgsArray.length - 1;
    }
    overlayImg.src = imgsArray[currentIndex].src;
}


// ACTIONS BY KEYS

document.addEventListener('keydown',function (e) {
    if ( e.keyCode == 27 ) {
        delay();
    }
    else if ( e.keyCode == 39 ) {
        next();
    }
    else if ( e.keyCode == 37 ) {
        prev();
    }
})