/**
 * @jest-environment jsdom
 */
import { Welcome } from '../src/components/Welcome';

describe('Coleccion de test sobre el DOM', () => {
  const renderWelcome = Welcome();
  test('Test sobre el renderizado principal de welcome', () => {
    expect(renderWelcome.outerHTML).toBe('<div><div id="header"><h1>Red Social</h1></div><div id="content"><button id="into" class="button-welcome">Iniciar sesión</button><button class="button-welcome">Registrate</button></div></div>');
  });
});
