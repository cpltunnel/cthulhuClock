var timer = setInterval(timeNow, 1000);

function timeNow(){
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}