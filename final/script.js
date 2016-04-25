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