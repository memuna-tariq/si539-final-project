// Get the menu and the button
let nav_menu = document.querySelector(".nav");
let hamburger_button = document.getElementById("hamburgerButton");
let close_button = document.getElementById("closeButton");

hamburger_button.addEventListener("click", function () {
  nav_menu.style.width = "250px"; // Set the width of the menu
  document.querySelector("#main").style.opacity = "20%";
  document.querySelector("#header_div").style.opacity = "20%";
  document.querySelector("footer").style.opacity = "20%";
  // disable scrolling when menu is open
  document.body.style.overflow = "hidden"; // Hide scrollbars
});

close_button.addEventListener("click", function () {
  nav_menu.style.width = "0px"; // Close the menu by setting its width to 0
  document.querySelector("#main").style.opacity = "100%";
  document.querySelector("#header_div").style.opacity = "100%";
  document.querySelector("footer").style.opacity = "100%";
  document.body.style.overflow = "visible"; // make visible scrollbars
});

let nav_link = document.getElementsByClassName("navLink");
let screen_size = window.matchMedia("(min-width: 800px)");

for (let i = 0; i < nav_link.length; i++) {
  nav_link[i].addEventListener("click", function () {
    if (screen_size.matches) {
    } else {
      // only do this in mobile view
      nav_menu.style.width = "0px"; // Close the menu by setting its width to 0
      document.querySelector("#main").style.opacity = "100%";
      document.querySelector("#header_div").style.opacity = "100%";
      document.querySelector("footer").style.opacity = "100%";
      document.body.style.overflow = "visible"; // make visible scrollbars
    }
  });
}

// Spotify Accessible Fix
// document.querySelector(".ProgressBar_progressBarContainer__glVHh").ariaLabel =
//   "Loading";
