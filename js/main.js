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
    // case '':
    //   let error = document.getElementById("error");
    //   error.style.visibility='visible';
    //   break;
    case 'electronics':
      window.location.href="./electronics.html"
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


                    