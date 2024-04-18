import GenerateId from "./GenerateId.js";

const idGenerator = new GenerateId();

export default class Liste {
  constructor(props) {
    const {container} = props;
    this.container = container;
    this.id = idGenerator.generateId();
    this.notes = [];
  }
  addTask() {
    // TODO Ajoute la task
  }

  removeTask() {
    // TODO Remove la task
  }

  setSection(section) {
    const documentSection = section;
  };


}
