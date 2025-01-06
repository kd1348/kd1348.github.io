// script.js
function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
  }
  
  function filterSOPs() {
    const query = document.getElementById("search").value.toLowerCase();
    const sopItems = document.querySelectorAll(".sop-list li");
  
    sopItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "" : "none";
    });
  }
  