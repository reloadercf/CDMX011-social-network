export const home = (target) => {
    const homeContainer = `
    <header>
        <img src="./assets/logo.png" alt="Logo de Nova" id="img-signup"/>
    </header>
    <main>
    <p id="message"></p>
    </main>
    `;
    target.innerHTML = homeContainer;
};
