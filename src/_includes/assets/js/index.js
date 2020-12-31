(function (window, document) {
  "use strict";

  const body = document.querySelector("main");
  const nav = document.querySelector("#navigation");
  const winH = window.innerHeight;
  document.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 200) {
      nav.classList.remove("text-gray-100");
      nav.classList.add("bg-white", "text-black");
    } else {
      nav.classList.remove("bg-white", "text-black");
      nav.classList.add("text-gray-100");
    }
    console.log(nav.classList);
  });

  //  var $nav = $("#verschwinden");
  //  var $win = $(window);
  //  var winH = $win.height(); // Get the window height.

  //  $win
  //    .on("scroll", function () {
  //      if ($(this).scrollTop() > winH) {
  //        $nav.addClass("doch");
  //      } else {
  //        $nav.removeClass("doch");
  //      }
  //    })
  //    .on("resize", function () {
  //      // If the user resizes the window
  //      winH = $(this).height(); // you'll need the new height value
  //    });
  // const headerEl = document.querySelector(".header");
  // const sentinalEl = document.querySelector(".sentinal");

  // const handler = (entries) => {
  //   console.log(entries);
  //   // entries is an array of observed dom nodes
  //   // we're only interested in the first one at [0]
  //   // because that's our .sentinal node.
  //   // Here observe whether or not that node is in the viewport
  //   if (!entries[0].isIntersecting) {
  //     headerEl.classList.add("enabled");
  //   } else {
  //     headerEl.classList.remove("enabled");
  //   }
  // };

  // // create the observer
  // const observer = new window.IntersectionObserver(handler);
  // // give the observer some dom nodes to keep an eye on
  // observer.observe(sentinalEl);

  const accordions = document.querySelectorAll("#accordion");
  const containers = document.querySelectorAll("#accordion-detail");

  const handleAccordionClick = (e) => {
    const { name } = e.target;
    const container = document.querySelector(`div[name="${name}"]`);
    console.log(container);
    const classes = Array.from(container.classList);

    containers.forEach((_) => _.classList.add("hidden"));

    if (classes.includes("hidden")) {
      container.classList.remove("hidden");
    } else {
      container.classList.add("hidden");
    }
  };

  accordions.forEach((_) => _.addEventListener("click", handleAccordionClick));
})(window, document);
