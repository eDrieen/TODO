/*jshint esversion: 6 */

let todoList = null;
let todoForm = null;
let todoCheckbox = null;
let todoElementText = null;
let count = 1;
let progressWidth = 0;

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
        todoList = document.querySelector("#todoList");
        todoForm = document.querySelector("#todoForm");
        todoCheckbox = document.getElementsByClassName("todoElementCheckbox");
        todoElementText = document.getElementsByClassName("todoElementText");

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

        for (let i = 0; i < todoCheckbox.length; ++i) {

                let number = i + 1;

                todoCheckbox[i].addEventListener("change", function (e) {

                        if (todoCheckbox[i].previousElementSibling.innerHTML !== "") {
                                todoCheckbox[i].previousElementSibling.innerHTML = "";
                                setTimeout(() => {
                                        todoCheckbox[i].checked = false;
                                }, 1500);
                                arr.push(number);
                                arr.sort(function (a, b) {
                                        return a - b;
                                });
                        } else {
                                todoCheckbox[i].checked = false;
                        }
                });

        }

});