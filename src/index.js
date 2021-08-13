/* eslint-disable quotes */
import { routes } from "./app.js";


// document.getElementById("back").addEventListener("click", onNavigate("/home"));

const rootDiv = document.getElementById("root");


const element = routes[window.location.pathname];
element(rootDiv);


rootDiv.addEventListener("click", (event) => {
  let target = event.target;
});


window.onpopstate = () => {
  const path = routes[window.location.pathname];
  path(rootDiv);
};
