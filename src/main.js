/* import './style.css'; */
import Flickity from 'flickity';
import flickityFade from 'flickity-fade';

//Hamburger Toggle menu
jQuery(function ($) {
  $('#hamburger_toggle').click(function () {
      $(this).toggleClass('is-active');
      $('#mobile_menu').toggle();
  });
});

/* TEAM MEMBER */
jQuery(function ($) {
  const viewButtons = document.querySelectorAll("[data-toggle='bio']");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.toggle("hidden");
      }
    });
  });
});



