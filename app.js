let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
    addTask();
})

function displayTask() {
    const list = document.querySelector('.task-list');

    todoListHTML = '';

    tasks.forEach((task) => {
        
        const taskHTML = `
            <li class="task"">
                    <input class="checkbox" type="checkbox" id="task" ${task.isDone ? 'checked' : ''}>
                    <label for="task">${task.taskName}</label>
                    <button class="delete-task">Delete</button>
            </li>
        `
    todoListHTML += taskHTML;

    })

    list.innerHTML = todoListHTML;

    document.querySelectorAll('.delete-task').forEach((button, index) => {
        button.addEventListener('click', () => {
            tasks.splice(index, 1);
            displayTask();
            localStorage.setItem('tasks', JSON.stringify(tasks));
        })
    })

    document.querySelectorAll('.checkbox').forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                console.log('checked');
                tasks[index].isDone = checkbox.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById("input-box");

    if (taskInput.value) {
        const taskName = taskInput.value;
        tasks.push( { 
            taskName,
            isDone: false } )
        console.log(tasks); 

    } else {
        throw new Error ('No input');
    }
    
    displayTask();
    taskInput.value = "";
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

displayTask();

