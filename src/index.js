import numeral from "numeral";
import { getUsers } from "../api/userApi";
import css from "./index.css"; // eslint-disable-line no-unused-vars

const courseVal = numeral(1000).format("$0, 0.00");
//debugger;

console.log(`I need ${courseVal}`); // eslint-disable-line no-console

getUsers().then((result, err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
        <td>${user.name}</td>
        <td>${user.age}</td>
      </tr>`;
  });

  global.document.getElementById("users").innerHTML = usersBody;
});
