import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const html = (gallery2) => {
  const htmlEl = gallery2.map((img) => {
    const liEl = document.createElement("li");
    const linkEl = document.createElement("a");
    linkEl.classList.add("gallery__item");
    linkEl.href = img.original;
    const imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.alt = img.description;
    imgEl.title = img.description;
    imgEl.src = img.preview;
    liEl.appendChild(linkEl);
    linkEl.appendChild(imgEl);

    return liEl;
  });

  return htmlEl;
};

gallery.append(...html(galleryItems));

let gallery3 = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery3.on("show.simplelightbox", function () {
  console.log(1);
});

// gallery.on("error.simplelightbox", function (e) {
//   console.log(e); // some usefull information
// });
