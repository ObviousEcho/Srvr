const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const user_name = document.querySelector("#username-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();

  if (user_name && password) {
    // Send the username and password to the server
    const response = await fetch("/api/users/login", {
      // MANA -MAKE SURE THIS IS CORRECT
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/menu"); // MANA -CHANGE THIS TO CORRECT REDIRECT
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-btn")
  .addEventListener("click", loginFormHandler);