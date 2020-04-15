'use strict';


const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

    const todoData = [];

    const render = function() {

        todoList.textContent = '';
        todoCompleted.textContent = '';
        localStorage.getItem('memory', JSON.stringify(todoData));
        const data = JSON.parse(localStorage.getItem('memory')); // Задание 7. Парсим массив.
        
        todoData.forEach(function(item) {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
                 '</div>';

                 if(item.completed) {
                    todoCompleted.append(li);
                 } else {
                    todoList.append(li);
                 }

                const bntTodoComplete = li.querySelector('.todo-complete');   

                 bntTodoComplete.addEventListener('click', function(){
                     item.completed = !item.completed;
                     render();
                 });
                const todoRemove = li.querySelector('.todo-remove');// Удаление через кнопку корзина
                todoRemove.addEventListener('click', function(){
                        todoData.splice(item, 1);
                        render();
                    });
                 headerInput.value = '';  // Пустая строка, после отправки.
                
        });
    };
  

    const showList = function(){
        todoList.textContent = localStorage.name;
    };

    todoControl.addEventListener('submit', function(event){
        if (headerInput.value === '') {
            console.log('Пустая строка');
            return;
        }
        event.preventDefault();
        const newToDo = {
            value: headerInput.value,
            completed: false
        };
        
        todoData.push(newToDo);

        localStorage.element = headerInput.value;
        localStorage.setItem('memory', JSON.stringify(todoData)); // Задание 7.

        showList();
        render();
    });

    showList();
    render();