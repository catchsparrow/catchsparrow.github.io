    function changeText(text)
    {
    var display = document.getElementById('text-display');
    display.innerHTML = text;
    }     
    function defaultText(text)
    {
    var display = document.getElementById('text-display');
    display.innerHTML = "projects";
    }

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var toggle = 0;

$("button").on("click", function() {
  
  if (toggle) {
    $("body").css("font-size", "36px");
    toggle = 0;
  } else {
    $("body").css("font-size", "16px");
    toggle = 1;
  }
  
});