document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollectionDiv = document.getElementById("toy-collection");

  async function fetchImage() {
    try {
      const imageUrl =
        "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist";
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const toyImage = document.createElement("img");
      toyImage.src = URL.createObjectURL(blob);
      toyImage.alt = "Jessie Toy Image";

      toyCollectionDiv.appendChild(toyImage);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  fetchImage();

  let addToy = false;
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
