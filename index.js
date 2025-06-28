    "use strict";
    let todoInput = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");
    let arr = [];
    let addTodo = () => {
        console.log(todoInput.value);
        todoList.innerHTML = "";
        console.log(arr);
        const getLocalStor = localStorage.getItem("todos");
        arr = getLocalStor ? JSON.parse(getLocalStor) : [];
        for (let i = 0; i < arr.length; i++) {
            todoList.innerHTML += `<h3><li>${arr[i]}
    <button type="button" class="btn btn-danger" onClick="deleteTodo(${i})">Delete</button>
    <button  class="btn btn-primary" onClick="editTodo(${i})">edit</button></h3>`;
        }
    };
    addTodo();
    function Add() {
        arr.push(todoInput.value);
        let localStor = localStorage.setItem("todos", JSON.stringify(arr));
        todoInput.value = "";
        addTodo();
    }
    let deleteTodo = (index) => {
        arr.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(arr));
        addTodo();
    };
    window.deleteTodo = deleteTodo;
    let editTodo = (index) => {
        let updatedVal = prompt("Enter updated value", arr[index]);
        if (updatedVal !== null && updatedVal.trim() !== "") {
            arr[index] = updatedVal.trim();
            localStorage.setItem("todos", JSON.stringify(arr));
            addTodo();
        }
    };
    window.editTodo = editTodo;
    let addBtn = document.getElementById("addBtn");
    addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", Add);
