import Liste from "./Liste.js";
import Note from "./Note.js";

const liste1 = new Liste(1, "Date");

const listJS = document.getElementById("middle-section");

// Ajout tache (version Pc)
const userAddPost = document.getElementById("add-btn");

const myTask = {
  id: 0,
  text: "Nouvelle tâche",
  status: "",
};

const middleList = new Liste(myTask);
middleList.setSection(document.getElementById("middle-section"));

userAddPost.onclick = () => {
  const newNote = new Note(myTask);
  listJS.innerHTML += newNote.render();
};

const newNote = new Note(myTask);

console.log(newNote);
// Ajout tache (version mobile)

const userAddPostMobile = document.getElementById("add-btn-mobile");

userAddPostMobile.onclick = () => {
  const newNote = new Note(myTask);
  listJS.innerHTML += newNote.render();
};