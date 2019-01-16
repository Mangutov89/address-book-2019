$(document).ready(function() {
  $("#addressbook").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $("ul").append("<li>" + name + "</li>")
    $("li").click(function() {
      alert("Address: " + address + " Phone number: " + phone + " Email: " + email);
    });
  });
});
