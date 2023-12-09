

/* Slieshow code 



let currentImage = 1;
 revealImage(currentImage);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


function changeImage(n) {
    revealImage(currentImage += n)
};

function activeImage(n) {
    revealImage(currentImage = n)

};

function revealImage(n) {
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

/* Shipping Calculator 

let cost = 0


let continent = document.getElementById("continent").value

let shippingType = document.getElementById("shipping-type").value

shippingForm.addEventListener("submit", totalCost)



function destinationCost() {
    if ( continent = "AF") {
        return 15
    }

    else if (continent === "AS" ) {
        return 20
    }

    else if (continent = "EU") {
        return 10
    }

    else if (continent === "NA") {
        return 18
    }

    else if (continent === "SA") {
        return 20
    }

    else if (continent === "OC") {
        return 25
    }

    else if (continent === "AN") { 
        return 35
    }

    else {
        console.log("Please select a destination")
    }
    console.log("OC")
}

function shippingSpeed() {
    if (shippingType === "STD") {
        return 12
    }

    else {
        return 20
    }

    
}

function totalCost() {
    
  let cost =  destinationCost() + shippingSpeed()  
  return cost
    
}
*/

// Read More Button

 /* let collapseBtn = document.getElementsByClassName("collapse-btn")

let hiddenInfo = document.getElementsByClassName("hidden-information")

collapseBtn.addEventListener("click", revealContent())


for (i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener("click", revealContent())
}
function revealContent() {
    hiddenInfo.className.toggle("activated");
    if (hiddenInfo.style.display === "block") {
        hiddenInfo.style.display = "none";
    } else {
        hiddenInfo.style.display = "block"
    }

}
*/

let coll = document.getElementsByClassName("collapse-btn");



for (let inis = 0; inis < coll.length; inis++) {
    coll[inis].addEventListener("click", function() {
      this.classList.toggle("activated");
      let hiddenContent = this.nextElementSibling;
      if (hiddenContent.style.display === "block") {
        hiddenContent.style.display = "none"
      } else {
        hiddenContent.style.display = "block"
      }
    });
  }

  
