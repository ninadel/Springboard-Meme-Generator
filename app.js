// form inputs https://www.youtube.com/watch?v=dw7alNjkYro

// prevent text overflow using javascript https://dev.to/jankapunkt/make-text-fit-it-s-parent-size-using-javascript-m40

// **Requirements**

// - The HTML page shows a form with three input options - Top Text, Bottom Text, Image - and a submit button
// - Users should be able to submit a form on the page to generate a new meme on the page
// - They should be able to add **multiple memes** to the page by submitting the form multiple times
// - Users should be able to click on a button to delete/remove a meme from the page
// - The form boxes should clear out automatically after the submit is clicked
// - The form fields need to have validation so they will not submit if a field is missing
// - Be sure to style your meme generator! It should be functional but also look nice
// - **Only use vanilla JavaScript: no frameworks/third-party libraries are allowed**

// You can find a 30 second video demo of a possible solution [here](https://drive.google.com/file/d/1QfeF85FwMzyoowpR1imqfMmYWbMsInhO/view)

// - **Want a hint on how to get the meme text over the image?**

//     Approach

//     You could do this by:

//     - Add a ***div*** around your img and text and give it a `position: relative`.
//     - To position text divs, give them each a `position: absolute` and set their positioning by using the properties of ***top***, ***right***, ***bottom*** and ***left***.
//     - If you need help on positioning, check out our [free resources](https://lessons.springboard.com/d792a9c4608149a7bf84cf943e6f40be?pvs=21).
// - **Want a hint on handling the form submit to add a meme?**

//     Approach

//     The standard way to handle a form submit is to include an input in the form with a ***type*** attribute of “submit”. In JavaScript, you should then listen for “submit” events on the form element rather than click events on the button (form submits are triggered not only by clickong on the submit button, but also by hitting “enter” when you’re inside the form).

//     After submission, if you see the page refresh, it’s because this is the default behavior of HTML forms! To stop the page from refreshing, you need to call `e.preventDefault()` on the event object `e`. To learn more about the event object, check out our free resources: [Introduction to Events](https://lessons.springboard.com/e9f770f3008c4bd8b6b40b5a47f8cc35?pvs=21).

// - **Want a hint on deleting a meme?**

//     Approach

//     Just like with submitting a new meme, to delete a meme you may need access to the event object. When you click on delete, take a look at what the `e.target` is. Using JavaScript, can you navigate from the target to the meme, and then remove the meme from the DOM?

// VARIABLES

// GENERATOR LEVEL VARIABLES
// ? Number of rendered memes

// MEME LEVEL VARIABLES
// Native width of meme image
// Native height Height of meme image

// Adjusted width of meme image
// Adjusted height of meme image

// Width of meme text (same for all positions?)
// Height of meme text (same for all positions?)

// FUNCTIONS

// FORM LEVEL FUNCTIONS

// Function for event listener for submit button - render

// ? Function for event listener for submit button - reset

// MEME LEVEL FUNCTIONS

// PARENT MEME DIV LEVEL FUNCTIONS

// Function to create a meme div and append to parent div (SEE MEMORY GAME)

// Function to delete a meme

// CHILD MEME DIV LEVEL FUNCTIONS

// Function which resizes image to display on page

// Function which renders text boxes

// Function which sizes the text to fit the parent div

// End of FUNCTIONS

// FORM
// Input for top text

// Input for middle text

// Input for bottom text

// End of FORM

// DIV which holds all the memes
// DIV which holds a single meme

// Test div for one meme - black box

document.addEventListener("DOMContentLoaded", function () {
  let memeForm = this.querySelector("#new-meme-form");
  let memeContainer = this.querySelector("#meme-container");
  console.log(memeForm);
  console.log(memeContainer);

  // image resize function
  function resizeImg(img) {
    img.addEventListener("load", function (e) {
      console.log("image loaded");
      console.log(img.naturalHeight, img.clientHeight);
      console.log(window.innerHeight, window.innerWidth);
    });
  }

  // meme list recall function?

  // meme add function
  // height of rendered to fill

  function addMeme(imgAddress, topText, middleText, bottomText) {
    // let imgAddress =
    //   "https://static.wikia.nocookie.net/survivor/images/2/26/S23_Coach_Wade.jpg/revision/latest/scale-to-width-down/666?cb=20120617045445";
    let memeDiv = document.createElement("div");
    let memeContent = document.createElement("div");
    let memeImg = document.createElement("img");
    let memeTopText = document.createElement("div");
    let memeBottomText = document.createElement("div");
    let memeMiddleText = document.createElement("div");
    let removeButton = document.createElement("button");
    console.log(removeButton);
    memeContent.classList.add("meme-content");
    memeDiv.classList.add("meme");
    memeImg.classList.add("meme-img");
    removeButton.classList.add("remove");
    memeImg.style.zIndex = 0;
    memeImg.src = imgAddress;
    // console.log(memeImgHeight);

    // testing text divs
    memeTopText.style.zIndez = 1;
    memeTopText.classList.add("meme-top-text");
    memeTopText.classList.add("meme-text");
    memeTopText.innerText = topText;

    memeMiddleText.style.zIndez = 1;
    memeMiddleText.classList.add("meme-middle-text");
    memeMiddleText.classList.add("meme-text");
    memeMiddleText.innerText = middleText;

    memeBottomText.style.zIndez = 1;
    memeBottomText.classList.add("meme-bottom-text");
    memeBottomText.classList.add("meme-text");
    memeBottomText.innerText = bottomText;

    memeContent.append(memeImg);
    memeContent.append(memeTopText);
    memeContent.append(memeBottomText);
    memeContent.append(memeMiddleText);

    memeDiv.append(memeContent);

    removeButton.innerText = "X";

    removeButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });

    memeDiv.append(removeButton);

    memeContainer.append(memeDiv);

    resizeImg(memeImg);
    console.log("addMeme()");
  }

  // meme remove function

  // form submit listener
  // TODO
  // validation of text
  memeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    imgAddress = document.querySelector("#meme-image").value;
    // at least one text string should be required
    topText = document.querySelector("#meme-top-text").value;
    middleText = document.querySelector("#meme-middle-text").value;
    bottomText = document.querySelector("#meme-bottom-text").value;
    memeForm.reset();

    addMeme(imgAddress, topText, middleText, bottomText);
  });
});
