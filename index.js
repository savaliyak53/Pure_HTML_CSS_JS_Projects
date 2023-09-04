// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("you must write something!");
//   } else {
//     let li = document.createElement("li");
//     let span = document.createElement("span");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// // listContainer.addEventListener(
// //   "click",
// //   function (e) {
// //     if (e.target.tagName === "LI") {
// //       e.target.classList.toggle("checked");
// //       saveData();
// //     } else if (e.target.tagName === "SPAN") {
// //       e.target.parentElement.remove();
// //       saveData();
// //     }
// //   },
// //   false
// // );

// listContainer.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   sessionStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//   listContainer.innerHTML = sessionStorage.getItem("data");
// }
// showTask();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter text");
  } else {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.innerHTML = inputBox.value;
    span.innerHTML = "\u00d7";
    listContainer.appendChild(li);
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  sessionStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = sessionStorage.getItem("data");
}
showData();
