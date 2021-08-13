// Este es el punto de entrada de tu aplicacion

export const signUp = `
    <header>
        <img src="/src/assets/logo.png" alt="Logo de Nova"/>
    </header>
    <main>
    <form class= "signUp">
      <div>
        <label for="email">e-mail*</label>
        <input type="text" id="email">
        <label for="user">Nombre de usuario*</label>
        <input type="text" id="user">
        <label for="password">Contraseña*</label>
        <input type="text" id="password">
        <label for="passwordRepeat">Repite tu contraseña*</label>
        <input type="text" id="passwordRepeat">  
      </div>
    <button class="signUpButton" type ="submit" id = "signUpButton"> Registrarse </button>
    </form>
    </main>
    <p id="message"></p>
    <footer>
        <a href="#" id="back" aria-label="Link para regresar"><img src="/src/assets/back.png" alt="Ícono para regresar"></a>
    </footer>
`;
export const logIn = `
    <header>
        <img src="/src/assets/logo.png" alt="Logo de Nova"/>
    </header>
    <main>
    <form class= "logIn">
      <div>
        <label for="userOrEmail">Usuario o e-mail*</label>
        <input type="text" id="userOrEmail">
        <label for="password">Contraseña*</label>
        <input type="text" id="password">         
      </div>
    <button class="logInButton" type ="submit" id = "logInButton"> Iniciar Sesión </button>    
    </form>
    <button class="logInGoogleButton" type ="submit" id = "logInGoogleButton"> <img src="/src/assets/google.png" alt="Ícono de Google"> Ingresar con Google </button>
    </main>
    <footer>
        <p>¿Aún no eres miembro?</p>
        <a href="#" id="register">Regístrate</a>
    </footer>
`;
