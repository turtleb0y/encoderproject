$("#inputText").keyup(function(e) {
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
});

$("input[type='radio']").click(function(e) {
  $("input:checked").prop('checked', false );
  $(this).prop('checked', true );
});
