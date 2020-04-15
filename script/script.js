'use strict';


const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


    const todoData = [];

    const render = function() {

        todoList.textContent = '';
        todoCompleted.textContent = '';
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
                        todoRemove.splice(item, 1);
                        render();
                    });
                 headerInput.value = '';  // Пустая строка, после отправки.
        });
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
        
        render();
    });
    render();