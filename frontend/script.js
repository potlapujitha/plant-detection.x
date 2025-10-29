document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  const msg = document.getElementById("msg");
  if (data.success) {
    msg.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "scanner.html";
    }, 1000);
  } else {
    msg.textContent = "Invalid login. Try again.";
  }
});
