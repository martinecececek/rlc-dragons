// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dropdowns
const dropdowns = document.querySelectorAll(".nav-dropdown");

function closeAllDropdowns() {
   dropdowns.forEach((dd) => {
      const btn = dd.querySelector(".nav-trigger");
      const menu = dd.querySelector(".nav-menu");
      btn?.setAttribute("aria-expanded", "false");
      menu?.classList.remove("open");
   });
}

dropdowns.forEach((dd) => {
   const btn = dd.querySelector(".nav-trigger");
   const menu = dd.querySelector(".nav-menu");
   if (!btn || !menu) return;

   btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = menu.classList.contains("open");
      closeAllDropdowns();

      if (!isOpen) {
         menu.classList.add("open");
         btn.setAttribute("aria-expanded", "true");
      }
   });
});

// Close dropdown on outside click
document.addEventListener("click", () => closeAllDropdowns());

// Mobile burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
   burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
      if (expanded) closeAllDropdowns();
   });

   // Close menu if you click outside on mobile
   document.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      closeAllDropdowns();
   });

   nav.addEventListener("click", (e) => e.stopPropagation());
}
