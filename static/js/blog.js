const axios = require("axios");
const form = document.querySelector("#form");
let title = document.getElementById("title");
let subject = document.getElementById("subject");
let blog = document.getElementById("blog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let blogData = {
    title: title.value,
    subject: subject.value,
    blog: blog.value,
  };
  console.log(blogData);
  axios
    .post("/postBlog", { data: "Hello World" })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("error ", err);
    });
});
