export default class Note {
  constructor(id, text, status) {
    this.id = id;
    this.text = text;
    this.status = status || "";
  }

  initializePostItFeatures(postIt) {
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
  
  addPostItActive() {
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
  }
  render() {
   let html =
    `
    <div class="post-it ${this.status}" id="note-${this.id}">
        <div class="text" contenteditable="true"> ${this.text}</div><div class="rename-post">
        <div class="shuffle-icon">
        <i class="fa-solid fa-arrows-up-down-left-right" id="shuffle"></i>
      </div>
    <div>
      <span class="check-icon" id="checkBtn"><i class="fa-solid fa-check"></i></span>
      <span><i class="fa-solid fa-x" id="remove-check"></i></span>
      <span><i class="fa-solid fa-trash" id="remove-post"></i></span>
    </div>
  </div>
  </div>
    </div>
    `;
    return html;
  }
}


