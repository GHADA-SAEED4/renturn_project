const btn = document.getElementById("langToggle");
const path = window.location.pathname;   // المسار كامل
const fileName = path.split("/").pop();  // اسم الفايل بس

// أسماء الفولدرات
const englishFolder = "Renturn";
const arabicFolder = "Renturn.ar";

// اتأكد إنتي في أنهي فولدر
const isArabic = path.includes(`/${arabicFolder}/`);
const isEnglish = path.includes(`/${englishFolder}/`);

if (isArabic) {
  btn.title = "English";
} else if (isEnglish) {
  btn.title = "العربية";
}

btn.addEventListener("click", () => {
  if (isArabic) {
    // يبدل للإنجليزي
    window.location.href = path.replace(`/${arabicFolder}/`, `/${englishFolder}/`);
  } else if (isEnglish) {
    // يبدل للعربي
    window.location.href = path.replace(`/${englishFolder}/`, `/${arabicFolder}/`);
  }
});



