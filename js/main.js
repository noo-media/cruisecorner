//Menu Toggle
(function() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    });
})();


//Modal
$(document).ready(function () {
//Fade in delay for the background overlay (control timing here)
$("#bkgOverlay").delay(5000).fadeIn(400);
//Fade in delay for the popup (control timing here)
$("#delayedPopup").delay(6000).fadeIn(400);
//Hide dialogue and background when the user clicks the close button
$("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
});
});
//Controls how the modal popup is closed with the close button
function HideDialog() {
    $("#bkgOverlay").fadeOut(400);
    $("#delayedPopup").fadeOut(300);
}


//Scroll to top
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

//Packages Gallery 
function openModal() {
    document.getElementById('myModal').style.display = "block";
    }

    function closeModal() {
    document.getElementById('myModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
var i;
var slides = document.getElementsByClassName("item-slide");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}