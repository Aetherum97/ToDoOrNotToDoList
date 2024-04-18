import Liste from "./Liste.js";

export default class App {
    constructor() {
        this.lists = [];
        this.lists.push(new Liste({container : document.getElementById('left-section')}));
        this.lists.push(new Liste({container : document.getElementById('middle-section')}));
        this.lists.push(new Liste({container : DocumentFragment.getElementById('right-section')}));
    }


}