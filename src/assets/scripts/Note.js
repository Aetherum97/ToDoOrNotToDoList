import GenerateId from "./GenerateId.js";

const idGenerator = new GenerateId();

export default class Note {
  constructor(text, status) {
    this.id = idGenerator.generateId();
    this.text = text;
    this.status = status || "";
  }

  editableTask() {
    // TODO Ajouter le post-it active
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


