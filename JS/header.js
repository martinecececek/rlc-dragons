(function () {
   const NAV_ITEMS = [
      { label: "Domovská stránka", href: "./index.html" },
      {
         label: "Mládež a děti",
         dropdown: [
            { label: "Přípravka", href: "./pripravka.html" },
            { label: "U12", href: "./u12.html" },
            { label: "U16", href: "./u16.html" },
            { label: "U19", href: "./u19.html" },
         ],
      },
      { label: "Dospělí", href: "./dospeli.html" },
      {
         label: "Finance",
         dropdown: [
            { label: "Sponzoři", href: "./sponzori.html" },
            { label: "Účetnictví", href: "./ucetnictvi.html" },
         ],
      },
   ];

   function isActive(href) {
      const page = window.location.pathname.split("/").pop() || "index.html";
      return href.replace("./", "") === page;
   }

   function buildNavHTML() {
      return NAV_ITEMS.map((item) => {
         if (item.dropdown) {
            const dropdownActive = item.dropdown.some((d) => isActive(d.href));
            const items = item.dropdown
               .map(
                  (d) =>
                     `<a role="menuitem" href="${d.href}"${isActive(d.href) ? ' class="is-active"' : ""}>${d.label}</a>`
               )
               .join("");
            return `<div class="nav-dropdown">
               <button class="nav-link nav-trigger${dropdownActive ? " is-active" : ""}" type="button" aria-haspopup="true" aria-expanded="false">
                  ${item.label} <span class="chev" aria-hidden="true">▾</span>
               </button>
               <div class="nav-menu" role="menu">${items}</div>
            </div>`;
         }
         return `<a class="nav-link${isActive(item.href) ? " is-active" : ""}" href="${item.href}">${item.label}</a>`;
      }).join("");
   }

   function render() {
      const el = document.getElementById("site-header");
      if (!el) return;

      el.innerHTML = `
         <div class="container header-inner">
            <a class="brand" href="./index.html" aria-label="RLC Dragons – Domů">
               <img class="brand-logo" src="./assets/images.png" alt="RLC Dragons logo" />
               <span class="brand-text">
                  <span class="brand-mark">RLC</span>
                  <span class="brand-name">Dragons</span>
               </span>
            </a>
            <nav class="nav" aria-label="Hlavní navigace">
               ${buildNavHTML()}
            </nav>
            <button class="burger" type="button" aria-label="Otevřít menu" aria-expanded="false">
               <span></span><span></span><span></span>
            </button>
         </div>`;

      initMenu();
   }

   function initMenu() {
      const dropdowns = document.querySelectorAll(".nav-dropdown");

      function closeAllDropdowns() {
         dropdowns.forEach((dd) => {
            dd.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
            dd.querySelector(".nav-menu")?.classList.remove("open");
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

      document.addEventListener("click", () => closeAllDropdowns());

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

         document.addEventListener("click", () => {
            nav.classList.remove("open");
            burger.setAttribute("aria-expanded", "false");
            closeAllDropdowns();
         });

         nav.addEventListener("click", (e) => e.stopPropagation());
      }
   }

   render();
})();
