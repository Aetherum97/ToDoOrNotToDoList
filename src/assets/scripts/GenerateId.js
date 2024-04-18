export default class GenerateId {
    constructor(id) {
        this.id = 0;
    }

    generateId() {
        return ++this.id;
    }
}
