/*jshint esversion: 6 */

let todoList = null;
let todoForm = null;
let elementContainer = null;
let index = null;
let text = null;

let checkboxInput = null;
let todoElementCheckbox = null;

let count = 1;

const arr = [];

function addTask(task) {

        if (arr.length > 0) {
                document.getElementById(arr[0]).innerHTML = task;
                arr.shift();
                count--;
        } else {
                document.getElementById(count).innerHTML = task;
        }

}

document.addEventListener("DOMContentLoaded", function () {

        todoList = document.getElementById("todoList");
        todoForm = document.getElementById("todoForm");


        elementContainer = document.createElement("div");
        elementContainer.classList.add("todoListElement");

        index = document.createElement("h3");
        index.classList.add("todoElementNumber");

        text = document.createElement("div");
        text.classList.add("todoElementText");

        checkboxInput = document.createElement("input");
        checkboxInput.classList.add("todoElementCheckbox");
        checkboxInput.setAttribute("type", "checkbox");

        elementContainer.appendChild(index);
        elementContainer.appendChild(text);
        elementContainer.appendChild(checkboxInput);

        for(let i = 1; i <= 9; i++) {

                elementContainer = document.createElement("div");
                elementContainer.classList.add("todoListElement");
        
                index = document.createElement("h3");
                index.classList.add("todoElementNumber");
                index.innerText = i + ")";
        
                text = document.createElement("div");
                text.classList.add("todoElementText");
                text.setAttribute("id", i);
        
                checkboxInput = document.createElement("input");
                checkboxInput.classList.add("todoElementCheckbox");
                checkboxInput.setAttribute("type", "checkbox");
        
                elementContainer.appendChild(index);
                elementContainer.appendChild(text);
                elementContainer.appendChild(checkboxInput);

                todoList.appendChild(elementContainer);

        }

        todoForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const formTodoMessage = document.querySelector("#formTodoMessage");
                if (formTodoMessage.value !== "") {

                        if (arr.length == 0 && count == 10) {
                                return false;
                        } else {
                                addTask(formTodoMessage.value);
                                count++;
                                formTodoMessage.value = "";
                        }

                }
        });

        todoElementCheckbox = document.querySelectorAll(".todoElementCheckbox");

        [].forEach.call(todoElementCheckbox, function(el, i) {

                let number = i + 1;

                el.addEventListener("change", function() {
                        const todoCheckbox = this;

                        const todoText = todoCheckbox.previousElementSibling;

                        if(todoText.innerHTML !== "") {
                                todoText.innerHTML = "";
                                setTimeout(() => {
                                        el.checked = false;   
                                }, 1500);
                                arr.push(number);
                                arr.sort(function (a, b) {
                                        return a - b;
                                });
                        } else {
                                el.checked = false;
                        }
                });

        });





});
