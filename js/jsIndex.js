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

// reference: https://codepen.io/alvarotrigo/pen/ZEJgqLN

let words = ["An HCI Researcher", "who likes designing stuff too!"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 80;
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".element_2 span.light").innerHTML = part;
  }, speed);
};

let reduce_motion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduce_motion.matches) {
  document.querySelector("h2.element_2 .hidden").style.visibility = "visible";
} else {
  // only do this when reduced motion is not enabled
  window.onload = function () {
    wordflick();
  };
}
