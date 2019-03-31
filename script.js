class ToDoList {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body;
        this.tasks = JSON.parse(localStorage.getItem('to-do-list')) || []
        this.render();
    }

    addTask(text) {
        const task = {
            text: text,
            isTaskCompleted: false
        }
        this.tasks = this.tasks.concat(task)
        this.render()
        this.saveTask()
    }
    
    saveTask(){
        localStorage.cdsetItem('to-do-list', JSON.stringify(this.tasks))
    }

    removeTask(index) {
        this.tasks.splice(index, 1)
        this.render()
        this.saveTask()
    }

    toggleTask(element) {
        if (element.isTaskCompleted === false) {
            element.isTaskCompleted = true
            } else if (element.isTaskCompleted === true) {
            element.isTaskCompleted = false
            }
            this.render()
            this.saveTask()
    }

    render() {
        this.container.innerHTML = ''
        this.renderForm();
        this.renderTask();
    }

    renderForm() {
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')

        input.setAttribute('placeholder', 'Wpisz nowe zadanie')
        buttonAdd.innerText = 'Dodaj zadanie'

        buttonAdd.addEventListener(
            'click',
            () => {
                if (input.value) this.addTask(input.value)
            }
        )

        this.container.appendChild(input)
        this.container.appendChild(buttonAdd)
    }

    renderTask() {
        this.tasks.forEach((element, index) => {
            const div = document.createElement('div')
            const span = document.createElement('span')
            const buttonDelete = document.createElement('button')

            span.innerText = `${index + 1}. ${element.text}`
            if (element.isTaskCompleted) span.style.textDecoration = 'line-through'
            buttonDelete.innerText = 'Usuń zadanie'

            buttonDelete.addEventListener(
                'click',
                () => this.removeTask(index)
            )

            span.addEventListener(
                'click',
                () => this.toggleTask(element, span)
            )

            this.container.appendChild(div)
            div.appendChild(span)
            div.appendChild(buttonDelete)
        })
    }
}
