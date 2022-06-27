const signUpForm = $("#Sign-up-form");

const handleSignUp =(event) => {
  event.preventDefault();


  const name =$("#fullName").val();
  const email =$("#email").val();
  const password =$("#password").val();

  const payload = JSON.stringify({
   email,
   password,
   name,
  });

  const response = await fetch("/api/users.signup", {
   method: "POST",
   body: payload,
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to sign up");
  }
  };

  signUpForm.on("submit", handleSignUp);