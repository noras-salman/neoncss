var element = document.getElementById("apple");
var text = "";
for (var i = 1; i < 10; i++) {
  text += "Apple" + i + "<br/>";
}

element.innerHTML = text;
