import Liste from "./Liste.js";
import Note from "./Note.js";

const liste1 = new Liste(1, "Date");

const listJS = document.getElementById("middle-section");

// Ajout tache (version Pc)
const userAddPost = document.getElementById("add-btn");

const myTask = {
  id: 1,
  text: "Nouvelle tâche",
  status: "",
};

const middleList = new Liste(myTask);
middleList.setSection(document.getElementById("middle-section"));

userAddPost.onclick = () => {
  const newNote = new Note(myTask);
  listJS.innerHTML += newNote.render();
};

// Ajout tache (version mobile)

const userAddPostMobile = document.getElementById("add-btn-mobile");

userAddPostMobile.onclick = () => {
  const newNote = new Note(listJS.children.length + 1, "Nouvelle tâche");
  listJS.innerHTML += newNote.render();
};
