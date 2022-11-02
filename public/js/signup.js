const signUpHandler = async (event) => {
  try {
    event.preventDefault();
    
    const user_name = document.querySelector("#userName").value.trim();
    const password = document.querySelector("#pWord").value.trim();
    // temporary
    const is_server = true;
        
    if (user_name && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ user_name, is_server, password }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (response.ok) {
        // redirect?  another api call to automatically login?
        console.log("success!");
        $("#success").modal({
          keyboard: false,
        });
      }
    }
  } catch (err) {
    $("#error").modal();
  }
};

const submitFrm = document.getElementById("submitForm");
submitFrm.addEventListener("submit", signUpHandler);

const modalBtn = document.querySelector("#successBtn");
modalBtn.addEventListener("click", () => location.reload());
