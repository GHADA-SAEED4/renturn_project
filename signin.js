const API_URL = "https://renturn.vercel.app/api/v1/auth/login";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // زرار تسجيل الدخول
  const signinBtn = document.getElementById("signin");
  const originalText = signinBtn.textContent;
  signinBtn.textContent = "جاري تسجيل الدخول...";
  signinBtn.disabled = true;

  // مسح أي رسائل خطأ قديمة
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.textContent = "";
    resultDiv.className = "";
  }

  // نجمع بيانات الفورم
  const userData = {
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
    "national ID": document.getElementById("nationalId").value.trim() // نستخدم الـ id من غير مسافة
  };


  console.log("User Data Sent:", userData);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error(`خطأ في الخادم: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (data.success) {
      // تخزين التوكن
      localStorage.setItem("token", data.token);

      // التوجيه حسب الدور
      if (data.user.role === "admin") {
        window.location.href = "../pages/adminpage.html";
      } else {
        window.location.href = "../index.html";
      }
    } else {
      if (resultDiv) {
        resultDiv.textContent = "❌ " + (data.error || "فشل تسجيل الدخول");
        resultDiv.className = "error";
      }
    }
  } catch (err) {
    console.error("Error:", err);
    if (resultDiv) {
      resultDiv.textContent = "❌ " + err.message;
      resultDiv.className = "error";
    }
  } finally {
    // رجّعي الزرار لحالته الطبيعية
    signinBtn.textContent = originalText;
    signinBtn.disabled = false;
  }
});