function initNavbar() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!button || !menu) return;

    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector(".dropdown-menu");
          if (otherMenu) {
            otherMenu.classList.remove("show");
          }
        }
      });

      // Toggle current dropdown
      menu.classList.toggle("show");
    });

    // Close when clicking a menu item
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
      });
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        const menu = dropdown.querySelector(".dropdown-menu");

        if (menu) {
          menu.classList.remove("show");
        }
      }
    });
  });
}