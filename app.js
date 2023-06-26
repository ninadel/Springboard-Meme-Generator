// listener which runs when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  let memeForm = this.querySelector("#new-meme-form");
  let memeContainer = this.querySelector("#meme-container");

  // function that creates and appends a meme based on form inputs
  function addMeme(imgAddress, topText, middleText, bottomText) {
    // memeDiv holds the meme content and remove button
    let memeDiv = document.createElement("div");
    // memeContent holds the meme image and overlay text divs
    let memeContent = document.createElement("div");

    let memeImg = document.createElement("img");
    let memeTopText = document.createElement("div");
    let memeBottomText = document.createElement("div");
    let memeMiddleText = document.createElement("div");
    let removeButton = document.createElement("button");
    // adding classes for styling
    memeContent.classList.add("meme-content");
    memeDiv.classList.add("meme");
    memeImg.classList.add("meme-img");
    removeButton.classList.add("remove");
    memeImg.src = imgAddress;

    // divs for meme text
    memeTopText.classList.add("meme-top-text");
    memeTopText.classList.add("meme-text");
    memeTopText.innerText = topText;

    memeMiddleText.classList.add("meme-middle-text");
    memeMiddleText.classList.add("meme-text");
    memeMiddleText.innerText = middleText;

    memeBottomText.classList.add("meme-bottom-text");
    memeBottomText.classList.add("meme-text");
    memeBottomText.innerText = bottomText;

    // append images and text to memeContent div
    memeContent.append(memeImg);
    memeContent.append(memeTopText);
    memeContent.append(memeBottomText);
    memeContent.append(memeMiddleText);

    // append memeContent to memeDiv
    memeDiv.append(memeContent);

    // button for removing meme from page
    removeButton.innerText = "X";
    removeButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });

    // append remove button to memeDiv
    memeDiv.append(removeButton);

    // add to memeContainer
    memeContainer.append(memeDiv);
  }

  // listener for when form is submitted
  memeForm.addEventListener("submit", function (e) {
    // prevent page from reloading
    e.preventDefault();

    // variables to store form values
    imgAddress = document.querySelector("#meme-image").value;
    topText = document.querySelector("#meme-top-text").value;
    middleText = document.querySelector("#meme-middle-text").value;
    bottomText = document.querySelector("#meme-bottom-text").value;
    memeForm.reset();

    // call function to create meme and add meme to page
    addMeme(imgAddress, topText, middleText, bottomText);
  });
});
