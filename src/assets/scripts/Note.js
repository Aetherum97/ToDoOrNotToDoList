export default class Note {
  constructor(id, text, status) {
    this.id = id;
    this.text = text;
    this.status = status || "";
  }
}
