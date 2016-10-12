//$("#inputText").keydown(function(e)) {
//
//});
var letterCopy;

startUp();

function startUp() {
  document.addEventListener("keydown", keyboardHandler);
}

function keyboardHandler(event) {

  if (event.keyCode == 65) {
    letterCopy = "a";
    print = "a"
  }

    console.log(event);

}
