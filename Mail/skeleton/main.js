document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll(".sidebar-nav li").forEach( (el) => {
    el.addEventListener('click',() => {
      let hash = el.innerText.toLowerCase();
      window.location.hash = hash;
    }, false);
  });

});
