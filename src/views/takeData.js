import { todo_data, data, check } from "./HomeView.vue";

const takeData = () => {
  if (new Date(todo_data.value.to) - new Date(todo_data.value.from) > 0) {
    todo_data.value.createAt = new Date().toLocaleDateString();
    if (localStorage.getItem("todolistData")) {
      data.value = JSON.parse(localStorage.getItem("todolistData"));
    }
    data.value.push(todo_data.value);
    localStorage.setItem("todolistData", JSON.stringify(data.value));
  } else {
    console.log("Write The Correct Date ,Make Sure Date From Before Date To");
  }
  todo_data.value = {
    title: "",
    from: "",
    to: "",
    isCompleted: false,
    createAt: "",
  };
  if (check.value.checked) {
    console.log("is Checked");
  }
};
