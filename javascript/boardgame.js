


let currentImage = 1;
 revealImage(currentImage);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


function changeImage(n) {
    revealImage(currentImage += n)
}

function activeImage(n) {
    revealImage(currentImage = n)

}

function revealImage(n) {
let i;
const images = document.getElementsByClassName("featured-image");
const thumbnail = document.getElementsByClassName("thumbnail-circle");

if (n > images.length) {currentImage = 1}
if (n < 1) {currentImage = images.length}
for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
}
for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
}
images[currentImage-1].style.display = "block";
thumbnail[currentImage-1].className += " active";
}