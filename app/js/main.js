var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var registerFormValues = new FormData(registerForm);
  var username = registerFormValues.get("username");
  var password = registerFormValues.get("password");
  var age = registerFormValues.get("age");
  var email = registerFormValues.get("email");
  axios
    .post("/auth/register", { username: username, password: password, age: age, email: email })
    .then(function(response) {
      var user = response.data.user;
      console.log(user);
      alert(`Account created for ${user}`);
    })
    .catch(function(err) {
      console.log(err);
      alert(`That user is already registered`);
    });
});

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var loginFormValues = new FormData(loginForm);
  var username = loginFormValues.get("username");
  var password = loginFormValues.get("password");
  axios
    .post("/auth/login", { username: username, password: password })
    .then(function(response) {
      alert(response.data.message);
    })
    .catch(function(err) {
      console.log(err);
    });
});
