$(document).ready(function() {
  $("#button").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      Swal.fire({
        title: "Todos los campos son obligatorios",
        icon: "warning"
      });
    } else {
      Swal.fire({
        title: "Tus datos fueron enviados correctamente",
        icon: "success"
      });
      
      $("#nameSummary").text(name);
      $("#emailSummary").text(email);
      $("#messageSummary").text(message);
  
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    }
  });
});