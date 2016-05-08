function changeText(text) {
  var display = document.getElementById('text-display');
  display.innerHTML = text;
}

    function changeDesc(text)
    {
    var display = document.getElementById('desc-display');
    display.innerHTML = text;
    }  

    function defaultText(text)
    {
    var display = document.getElementById('text-display');
    display.innerHTML = "projects";
    }
    function defaultDesc(text)
    {
    var display = document.getElementById('desc-display');
    display.innerHTML = "text desc this is to make it a little longer just so we can see it work";
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

