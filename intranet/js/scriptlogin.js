document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "David" && password === "David") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else if (username === "Andrea" && password === "Andrea") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else if (username === "Diego" && password === "Diego") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else if (username === "Paloma" && password === "Paloma") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else if (username === "Cesar" && password === "Cesar") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else if (username === "admin" && password === "admin") {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-success">Login successful!</div>';
      setTimeout(function () {
        window.location.href = "users.html";
      }, 1000);
    } else {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-danger">Invalid username or password!</div>';
    }
  });
