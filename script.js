class ToDoList {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body;
        this.toDo = [];
        this.render();
    }

    render(){
        this.renderForm();
    }

    renderForm() {
        const div = document.createElement('div');
        const input = document.createElement('input');
        const button = document.createElement('button');

        div.classList.add('form-container');
        button.innerText = 'ADD';

        div.appendChild(input);
        div.appendChild(button);
        this.container.appendChild(div);
    }

} 