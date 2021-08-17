/* eslint-disable quotes */
import { onNavigate } from "./app.js";

export const signUp = (target) => {
  const signUpContainer = `
    <header>
        <img src="./assets/logo.png" alt="Logo de Nova"/>
    </header>
    <main>
    <form class= "signUp">
      <div class = "formContainer">
        <label for="email">e-mail*</label><br>
        <input type="text" id="email"><br>
        <label for="user">Nombre de usuario*</label><br>
        <input type="text" id="user"><br>
        <label for="password">Contraseña*</label><br>
        <input type="text" id="password"><br>
        <label for="passwordRepeat">Repite tu contraseña*</label><br>
        <input type="text" id="passwordRepeat"><br>  
      </div>
    <button class="signUpButton" type ="submit" id = "signUpButton"> Registrarse </button>
    </form>
    </main>
    <p id="message"></p>
    <footer class= "signUpFooter">
        <a href="#" id="back" aria-label="Link para regresar"><img src="./assets/back.png" alt="Ícono para regresar"></a>
    </footer>
`;

  target.innerHTML = signUpContainer;

  const toLogIn = document.getElementById("back");
  toLogIn.addEventListener("click", (event) => {
    event.preventDefault();
    onNavigate("/");
  });
};

export const logIn = (target) => {
  const logInContainer = `
    <header>
        <img src="./assets/logo.png" alt="Logo de Nova"/>
    </header>
    <main>
    <form class= "logIn">
      <div id="login-container">
        <label for="userOrEmail">Usuario o e-mail*</label><br>
        <input type="text" id="userOrEmail"><br>
        <label for="password">Contraseña*</label><br>
        <input type="text" id="password"><br>         
      </div>
    <button class="logInButton" type ="submit" id = "logInButton"> Iniciar Sesión </button>    
    </form>
    <button class="logInGoogleButton" type ="submit" id = "logInGoogleButton"> <img src="./assets/google.png" alt="Ícono de Google"> Ingresar con Google </button>
    </main>
    <footer>
        <p id="miembro">¿Aún no eres miembro?</p>
        <a href="#" id="register">Regístrate</a>
    </footer>
`;
  target.innerHTML = logInContainer;

  const toSignUp = document.getElementById("register");
  toSignUp.addEventListener("click", (event) => {
    event.preventDefault();
    onNavigate("/registro");
  });
};
