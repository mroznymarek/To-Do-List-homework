class toDoList {
    constructor(selector){
        this.container = document.querySelector(selector) || document.body
        this.tasks = []
        this.render()
    }