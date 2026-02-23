(function () {
   function render() {
      const el = document.getElementById("site-footer");
      if (!el) return;

      el.innerHTML = `
         <div class="container footer-inner">
            <div class="footer-social">
               <h3>Sociální sítě</h3>
               <div class="footer-social-icons">
                  <a class="social-icon" href="https://www.facebook.com/rlcDragons/" target="_blank" rel="noreferrer" aria-label="Facebook">
                     <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.503 2 12.06C2 17.08 5.657 21.24 10.438 22v-7.03H7.898v-2.91h2.54V9.845c0-2.52 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.475h-1.26c-1.242 0-1.63.776-1.63 1.57v1.887h2.773l-.443 2.91h-2.33V22C18.343 21.24 22 17.08 22 12.06Z"/>
                     </svg>
                  </a>
                  <a class="social-icon" href="https://www.instagram.com/rlcdragons/" target="_blank" rel="noreferrer" aria-label="Instagram">
                     <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
                     </svg>
                  </a>
               </div>
            </div>

            <div class="footer-logos" aria-label="Partneři / loga">
               <img src="./assets/teplice.jpg" alt="Teplice" />
               <img src="./assets/krupka.png" alt="Krupka" />
               <img src="./assets/nsa.png" alt="Národní sportovní agentura" />
            </div>

            <div class="footer-links">
               <div class="footer-col">
                  <h4>Domovská stránka</h4>
                  <a href="./index.html">Domovská stránka</a>
               </div>
               <div class="footer-col">
                  <h4>Mládež a děti</h4>
                  <a href="./pripravka.html">Přípravka</a>
                  <a href="./u-12.html">U12</a>
                  <a href="./u-16.html">U16</a>
                  <a href="./u-19.html">U19</a>
               </div>
               <div class="footer-col">
                  <h4>Finance</h4>
                  <a href="./sponzori.html">Sponzoři</a>
                  <a href="./ucetnictvi.html">Účetnictví</a>
               </div>
               <div class="footer-col">
                  <h4>Dospělí</h4>
                  <a href="./dospeli.html">Dospělí</a>
               </div>
            </div>

            <div class="footer-bottom">
               <div>© <span id="year"></span> RLC Dragons</div>
            </div>
         </div>`;

      document.getElementById("year").textContent = new Date().getFullYear();
   }

   render();
})();
