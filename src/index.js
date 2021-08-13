/* eslint-disable quotes */
import { onNavigate, routes } from "./app.js";

document.getElementById('back').addEventListener('click', onNavigate('/home'));

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
