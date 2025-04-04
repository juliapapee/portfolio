document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const link = item.querySelector(".accordion-link");
  
      link.addEventListener("click", function () {
        // Sprawdź, czy ten element jest już aktywny
        const isActive = item.classList.contains("active");
  
        // Zamknij wszystkie otwarte elementy
        accordionItems.forEach((i) => i.classList.remove("active"));
  
        // Jeśli ten element NIE był aktywny, otwórz go
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  });
