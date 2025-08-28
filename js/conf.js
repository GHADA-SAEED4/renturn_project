const modal = document.getElementById("orderModal");
const openBtn = document.getElementById("orderSummaryBtn");
const closeBtn = document.getElementById("closeModal");
const footerClose = document.querySelector(".btn-close");

openBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

footerClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
