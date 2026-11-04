/* =========================================================
   LOWATLAS — SCRIPT.JS
   01 Smooth scrolling
   02 FAQ accordion
   ========================================================= */

/* ==================== 01. SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ==================== 02. FAQ ==================== */
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const icon = button.querySelector(".faq-icon");

    item.classList.toggle("is-open");
    const isOpen = item.classList.contains("is-open");

    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (icon) icon.textContent = isOpen ? "−" : "+";
  });
});
