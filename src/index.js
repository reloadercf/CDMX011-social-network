import { onNavigate } from "./app";

document.getElementById('back').addEventListener('click', onNavigate('/home'));

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];