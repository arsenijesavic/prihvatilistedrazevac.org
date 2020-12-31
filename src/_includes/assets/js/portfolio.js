(function (window, document) {
  "use strict";

  let isVisible = true;

  const galleryItem = document.querySelector("#gallery-item");
  const galleryItemPhoto = document.querySelector("#gallery-item-photo");
  const handlePhotoClick = (e) => {
    // console.log("isVisible", isVisible);
    // console.log(e.target.src);
    if (isVisible) {
      gallery.classList.remove("opacity-100");
      gallery.classList.add("opacity-0");
      //   console.log(galleryItemPhoto.src);
      galleryItemPhoto.src = e.target.src;
      galleryItem.classList.add("opacity-100");
      galleryItem.classList.remove("opacity-0");
    } else {
      galleryItem.classList.remove("opacity-100");
      galleryItem.classList.add("opacity-0");

      gallery.classList.add("opacity-100");
      gallery.classList.remove("opacity-0");
    }

    isVisible = !isVisible;
  };

  const photos = document.querySelectorAll("#photo");
  photos.forEach((country) =>
    country.addEventListener("click", handlePhotoClick)
  );

  //   const gallery = document.querySelector("#gallery");
  const handleClick = (e) => {
    //   console.log(e.target.textContent);
    //   gallery.classList.toggle("active");
  };

  const countries = document.querySelectorAll("#country");
  countries.forEach((country) =>
    country.addEventListener("click", handleClick)
  );
})(window, document);
