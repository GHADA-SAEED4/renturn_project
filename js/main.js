// CATEGORY BUTTONS - active state
const categoryButtons = document.querySelectorAll(".cat-btn");
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// -----------------------------------------------------Search bar validation--------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      validateSearch();
    }
  });
})

function validateSearch() {
  let input = document.getElementById("search").value.trim().toLowerCase();
  if (input===""){
    let error = document.getElementById("error");
      error.style.visibility='visible';
  }
  else{
  switch(input){
    case 'electronics':
      window.location.href="./pages/electronics.html"
      break;
      
    case 'tools':
      window.location.href="./pages/tools.html"
      break;

    case 'clothes': 
      window.location.href="./pages/clothes.html"
      break;
      
    case 'event supplies':
      window.location.href="./pages/event.html"
      break;
      
    case 'music':
      window.location.href="./pages/music.html"
      break;
      
    }
    }
  }
// -----------------------------------------------------Scroller--------------------------------------
const scrollContainer = document.getElementById("latestPro");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 150; // scroll left
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollLeft += 150; // scroll right
});

const scrollDiv = document.getElementById("catScroll");
document.getElementById("leftArrow").addEventListener("click", ()=>{
  scrollDiv.scrollLeft -= 150;
});
document.getElementById("rightArrow").addEventListener("click", ()=>{
  scrollDiv.scrollLeft += 150;
});
let currentSlide = 0;
const slides = document.querySelectorAll(".hero .slide");
const dotsContainer = document.querySelector(".hero .dots");

  
// ---------------- عرض الكاتيجوريز في الجدول ----------------
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const categories = await API.getCategories();
    console.log("Categories from API:", categories);

    // نجيب tbody بتاع الجدول
    const tableBody = document.querySelector("#userTable");
    tableBody.innerHTML = ""; // نمسح أي داتا قديمة

    categories.forEach((cat) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>#${cat.id}</td>
        <td>${cat.name}</td>
        <td>${cat.productsCount || 0}</td>
        <td class="status">
          <button class="${cat.active ? "active-button" : "inactive-button"}">
            ${cat.active ? "Active" : "Inactive"}
          </button>
        </td>
        <td class="actions">
          <button class="edit-btn"><img src="../photos/edit.png" alt="Edit" /></button>
          <button class="delete-btn" data-id="${cat.id}"><img src="../photos/trash.png" alt="Delete" /></button>
        </td>
      `;

      tableBody.appendChild(row);
    });

  } catch (err) {
    console.error("Error loading categories:", err);
    alert("في مشكلة في تحميل الكاتيجوريز 🚨");
  }
});

// نربط زرار الـ delete بالـ API
row.querySelector(".delete-btn").addEventListener("click", async (e) => {
  const id = e.currentTarget.dataset.id;

  if (confirm("هل أنت متأكد أنك عايز تمسح الكاتيجوري دي؟")) {
    try {
      await API.deleteCategory(id); // ننده على الـ API
      row.remove(); // نشيل الصف من الجدول مباشرة
      alert("تم مسح الكاتيجوري ✅");
    } catch (err) {
      console.error("Error deleting category:", err);
      alert("حصل خطأ أثناء مسح الكاتيجوري 🚨");
    }
  }
});
