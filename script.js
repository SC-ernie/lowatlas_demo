/* LOWATLAS — FAQ */

document
  .querySelectorAll(".faq-question")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const item =
        button.closest(".faq-item");

      item.classList.toggle("is-open");

      const open =
        item.classList.contains("is-open");

      button.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

      const icon =
        button.querySelector(".faq-icon");

      if (icon) {
        icon.textContent =
          open ? "−" : "+";
      }

    });

  });
