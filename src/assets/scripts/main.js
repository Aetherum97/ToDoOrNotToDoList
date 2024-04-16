import Liste from "./Liste.js";
import Note from "./Note.js";

const liste1 = new Liste(1, "15-04-2024");
const note1 = new Note(1, "Hello world");

let listJS = document.getElementById('middle-section');
const userAddPost = document.getElementById("add-btn");

userAddPost.onclick = () => {
    listJS.innerHTML += note1.render();
}
