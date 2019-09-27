//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var hello = "hello";
var bye = "bye";
var bro = "sandia";

var array = [hello, bye, bro];

console.log(array);


$(document).ready(function() {



  $("#box").on("click", function() {
    $(".papaJohn").hide();
  });

  $("#miguText").on("click", function() {
    $(".papaJohn").show();
  });

});

