document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementById("submitButton");
  
    submitButton.addEventListener("click", function(event) {
// Prevents the default action to come into play ;

      event.preventDefault();
  
      let emailInput = document.getElementById("emailInput");
      let email = emailInput.value.trim();
  
      let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  
      if (emailRegex.test(email)) {
        window.location.href = "subscribe.html";
      } else {
        alert("Invalid email format!");
      }
    });
  });


  function redirect(){
    window.location.href= 'index.html'
  }