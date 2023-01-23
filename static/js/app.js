const form = document.querySelector("#form");
let fname = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: fname.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  console.log(formData);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contactMe");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    console.log(xhr.responseText);
    if (xhr.responseText === "success") {
      alert("Email sent");
      (fname.value = ""),
        (email.value = ""),
        (subject.value = ""),
        (message.value = "");
    } else {
      alert("Something went wrong");
    }
  };
  xhr.send(JSON.stringify(formData));
});
