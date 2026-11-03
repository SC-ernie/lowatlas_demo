/* =========================================================
   LOWATLAS — JAVASCRIPT
   ========================================================= */


/* Smooth scrolling for links such as #work and #services. */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
