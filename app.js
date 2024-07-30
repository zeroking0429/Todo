const fetchedName = localStorage.getItem("name");

if (fetchedName) {
  window.location.href = "/todo/todo";
}

let name = "";

const onChange = (e) => {
  name = e.target.value;
  console.log(name);
};

const onSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("name", name);
  localStorage.setItem("todoList", "{}");
  window.location.href = "/todo/todo";
};
