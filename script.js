let tasks = [];
let taskId = 1;

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    
    if (text === '') return;
    
    tasks.push({
        id: taskId++,
        text: text,
        completed: false
    });
    
    input.value = '';
    updateDisplay();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        updateDisplay();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateDisplay();
}

function updateDisplay() {
    const taskList = document.getElementById('taskList');
    const counter = document.getElementById('counter');
    
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = `task-item ${task.completed ? 'completed' : ''}`;
        div.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})">
            ${task.text}
            <button onclick="deleteTask(${task.id})">删除</button>
        `;
        taskList.appendChild(div);
    });
    
    counter.textContent = `总任务: ${tasks.length}`;
}

// 初始化
updateDisplay();