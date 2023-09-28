// Get the form element
let form = document.querySelector('form');
// Add an event listener to the form submission event
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()
    // Get the to-do task from the form
    e.target.taskInput.value
});

// Get a reference to the task input element.
const taskInput = document.getElementById('task-input');
// Get a reference to the add task button element.
const addTaskButton = document.getElementById('add-task-button');
// Get a reference to the task list element.
const taskList = document.getElementById('task-list');
// Add an event listener to the add task button element.
addTaskButton.addEventListener('click', ()=> {
    // Get the value of the task input element.
    const task = taskInput.value;
// Create a new task list item element.
    const taskItem = document.createElement('li')
// Add the task text to the task list item element.
    taskItem.textContent = task;
// Add the task list item element to the task list element.
    taskList.appendChild(taskItem)
// clear the task input element
// taskInput.reset();
taskInput.value = '';
})

// Add an event listener to the task list element.
taskList.addEventListener('click', (e)=> {
// Get the target element of the event.
   const target = e.target;
// If the target element is a task list item element, toggle its completed class.
if(target.tagName === 'LI'){
    target.classList.toggle('completed')
}
})


