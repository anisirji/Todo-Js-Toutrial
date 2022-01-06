"use strict";

//retriving data from local storage
let retriveData = localStorage.getItem("task");

let inpt = document.getElementById("input");
let btn = document.getElementById("btn");

let tasks = [];
let rdata;

// showing all old todos at top
if (retriveData != null) {
  rdata = JSON.parse(retriveData);
  for (let i = 0; i < rdata.length; i++) {
    createEle(rdata[i]);
  }
  console.log(rdata);
}

function add() {
  if (inpt.value != "") {
    tasks.push(inpt.value);
    createEle(tasks[tasks.length - 1]);
    storeEle();
    inpt.value = "";
  }
}

function createEle(data) {
  let result = document.createElement("div");
  result.id = "result";
  document.body.appendChild(result);

  let todo = document.createElement("div");
  todo.innerHTML = data;
  result.appendChild(todo);

  let del = document.createElement("div");
  del.innerHTML = "x";
  del.className = "del";
  result.append(del);

  del.addEventListener("click", () => {
    console.log(tasks);
  });
}

function storeEle() {
  let save;
  if (retriveData) {
    save = rdata.concat(tasks);
  } else {
    save = tasks;
  }
  localStorage.setItem("task", JSON.stringify(save));
  console.log("Saved", save);
}

btn.addEventListener("click", add);

document.getElementById("Cbtn").addEventListener("click", () => {
  localStorage.clear();
  document.location.reload(true);
});

console.log(document.getElementById("result"));

document.onkeydown = function (e) {
  if (e.key == "Enter") {
    add();
  }
};
