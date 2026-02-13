// script.js

// Elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// Function for creating an element
const createTodoElement = (text) => {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '&#128465;'; // Trash can
  deleteBtn.ariaLabel = 'Удалить задачу';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Сборка
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
};

// Обработка отправки формы
todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Отмена перезагрузки страницы

  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    const todoItem = createTodoElement(taskText);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
});