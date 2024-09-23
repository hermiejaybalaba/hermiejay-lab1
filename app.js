function myFunction() {
  alert("The form was submitted");

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let hobbies = document.getElementById("hobbies").value;

  let myData = {
    name: name,
    age: age,
    email: email,
    hobbies: hobbies,
  };

  let jsonString = JSON.stringify(myData);
  document.getElementById("jsonOutput").innerHTML =
    "<pre><b>" + jsonString + "</b></pre>";
}
