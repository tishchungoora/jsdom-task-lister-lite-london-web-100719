document.addEventListener("DOMContentLoaded", () => {
  populateTodo();
});

// declare function for intercepting form submission event, populate the todo and reset form

function populateTodo() {
  const form = document.querySelector("#create-task-form");
  const desc = document.getElementById("new-task-description");
  const todoList = document.getElementById("tasks");

  form.addEventListener("submit", function(e) {

    // prevent submission from refreshing the page
    e.preventDefault();

    // make a list element
    let makeListEl = document.createElement("li");

    // append the list element as a child of the todo list with the description value submitted
    todoList.appendChild(makeListEl).innerHTML = desc.value

    // reset the form
    form.reset();
  });
}






