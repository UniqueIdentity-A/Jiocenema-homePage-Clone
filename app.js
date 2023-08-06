// Nav bar active items
let header = document.getElementById("border");
let btns = header.getElementsByClassName("rest-items");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let hheader = document.getElementById("b-navbar");
let bbtns = hheader.getElementsByClassName("b-rest-items");
for (let i = 0; i < bbtns.length; i++) {
  bbtns[i].addEventListener("click", function() {
  let bcurrent = document.getElementsByClassName("b-active");
  bcurrent[0].className = bcurrent[0].className.replace(" b-active", "");
  this.className += " b-active";
  });
}


// Slideshow
let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("slider");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }

    
          