const API_URL = "https://renturn.vercel.app/api/v1/auth/login";

document.getElementById("signinForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
   l: document.getElementById("email").value,
    nationalID: document.getElementById("nationalID").value,
    password: document.getElementById("password").value,
    
    role: "user",
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("result").innerText = "❌ Error: " + err.message;
  }
});
