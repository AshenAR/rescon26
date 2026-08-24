document.addEventListener("DOMContentLoaded", function () {

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Close other dropdowns
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.querySelector(".dropdown-menu").classList.remove("show");
        }
      });

      // Toggle current dropdown
      menu.classList.toggle("show");
    });

    // Close when submenu link is clicked
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      }
    });
  });

});