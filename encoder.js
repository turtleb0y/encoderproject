$("#inputArea").keydown(function(e)) {
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
});
