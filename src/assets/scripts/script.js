// Ajout fonction icon post it active
function initializePostItFeatures(postIt) {
  const checkBtn = postIt.querySelector(".check-icon");
  const editText = postIt.querySelector(".text");
  const removePostIt = postIt.querySelector(".fa-trash");

  checkBtn.onclick = () => {
    editText.style.textDecoration = "line-through";
  };

  const oncheckBtn = postIt.querySelector(".fa-x");
  oncheckBtn.onclick = () => {
    editText.style.textDecoration = "none";
  };

  removePostIt.onclick = () => {
    postIt.remove();
  };
}

// Transformation onclick du post it
let addPostItEventListener = () => {
  const postItList = document.querySelectorAll(".post-it");

  postItList.forEach((postIt) => {
    postIt.addEventListener("click", () => {
      const renamePost = postIt.querySelector(".rename-post");
      if (renamePost) {
        renamePost.classList.add("rename-post-display-flex");
        postIt.style.backgroundColor = "rgb(147, 147, 245)";
      }
    });
  });
};

// Crée un nouveau post it (ecran pc)
const middleSection = document.getElementById("middle-section");
const userAddPost = document.getElementById("add-btn");

userAddPost.onclick = () => {
  const newPostIt = document.createElement("div");
  newPostIt.classList.add("post-it");

  newPostIt.innerHTML = `<div class="text" contenteditable="true"> Nouvelle tâche</div><div class="rename-post">
  <div class="shuffle-icon">
    <i class="fa-solid fa-arrows-up-down-left-right" id="shuffle"></i>
  </div>
  <div>
    <span class="check-icon" id="checkBtn"><i class="fa-solid fa-check"></i></span>
    <span><i class="fa-solid fa-x" id="remove-check"></i></span>
    <span><i class="fa-solid fa-trash" id="remove-post"></i></span>
  </div>
</div>
</div>`;

  setTimeout(() => {
    newPostIt.classList.add("fade-in");
    initializePostItFeatures(newPostIt);
    addPostItEventListener();
  }, 100);
  const firstChild = middleSection.firstChild;
  middleSection.insertBefore(newPostIt, firstChild);

  document.addEventListener("click", (event) => {
    const postItList = document.querySelectorAll(".post-it");
    postItList.forEach((postIt) => {
      const renamePost = postIt.querySelector(".rename-post");
      if (renamePost && !postIt.contains(event.target)) {
        renamePost.classList.remove("rename-post-display-flex");
        postIt.style.backgroundColor = "rgb(248, 248, 130)";
      }
    });
  });
};

// Crée un nouveau post it (mobile)
const userAddPostMobile = document.getElementById("add-btn-mobile");

userAddPostMobile.onclick = () => {
  const newPostIt = document.createElement("div");
  newPostIt.classList.add("post-it");

  newPostIt.innerHTML = `<div class="text" contenteditable="true"> Nouvelle tâche</div><div class="rename-post">
  <div class="shuffle-icon">
    <i class="fa-solid fa-arrows-up-down-left-right" id="shuffle"></i>
  </div>
  <div>
    <span class="check-icon" id="checkBtn"><i class="fa-solid fa-check"></i></span>
    <span><i class="fa-solid fa-x" id="remove-check"></i></span>
    <span><i class="fa-solid fa-trash" id="remove-post"></i></span>
  </div>
</div>
</div>`;

  setTimeout(() => {
    newPostIt.classList.add("fade-in");
    initializePostItFeatures(newPostIt);
    addPostItEventListener();
  }, 100);
  const firstChild = middleSection.firstChild;
  middleSection.insertBefore(newPostIt, firstChild);

  document.addEventListener("click", (event) => {
    const postItList = document.querySelectorAll(".post-it");
    postItList.forEach((postIt) => {
      const renamePost = postIt.querySelector(".rename-post");
      if (renamePost && !postIt.contains(event.target)) {
        renamePost.classList.remove("rename-post-display-flex");
        postIt.style.backgroundColor = "rgb(248, 248, 130)";
      }
    });
  });
};
