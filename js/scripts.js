$(document).ready(function() {
  while (!pingPongNumber) {
    var pingPongNumber = parseInt(prompt("What number would you like to ping pong up to?"));
    if (!pingPongNumber)  {
      if (pingPongNumber === 0)
        alert("Please enter a number greater than 0.");
      else
        alert("Please enter a valid number.");
    }
  }

  for (var index = 1; index <= pingPongNumber; index+=1) {
    if (index % 3 === 0 && index % 5 == 0) {
      $("ul").append("<li>ping-pong</li>");
    }
    else if (index % 3 === 0)  {
      $("ul").append("<li>ping</li>");
    }
    else if (index % 5 === 0)  {
      $("ul").append("<li>pong</li>");
    }
    else {
      $("ul").append("<li>" + index + "</li>");
    }
  }
});
