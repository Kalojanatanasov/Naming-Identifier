function onClick(event) {
  var myWindow = window;
  var browserName = myWindow.navigator.appCodeName;
  var isMozilla=(browserName === "Mozzilla");
  if(isMozilla) {
    alert("Yes");
  }  else  {
    alert("No");
  }
}
