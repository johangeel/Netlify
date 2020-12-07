
let WhapIt = document.getElementById('WhapIt');
let invul = document.getElementById('invul');

document.getElementById("WhapIt").onclick = function(e){
  console.log("Clicked")
  console.log("New Link is: " + "https://api.whatsapp.com/send?phone=" + invul.value)
  var link = document.createElement("a")
  link.setAttribute("target","_blank");
  var val = invul.value

  if(val.startsWith("06") && val.length == 10){
    val = "31" + val.slice(1)
  }
  else if(val.length == 8){
    val = "316" + val
  }
  link.setAttribute("href", "https://api.whatsapp.com/send?phone=" + val);
  link.click();
}
