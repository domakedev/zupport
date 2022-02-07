/// <reference types="Cypress" />

describe('Landing visitor test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visit another url', () => {
    cy.visit('/login', {
      timeout: 50000,
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line
        expect(typeof contentWindow === 'object').to.be.true;
      },
      onLoad(contentWindow) {
        // eslint-disable-next-line
        expect(typeof contentWindow === 'object').to.be.true;
      },
    });
  });

  it('Renders welcome text', () => {
    cy.contains('Disfruta ayudando a los demas');
  });

  it('Renders top comu', () => {
    cy.get('[data-test="top-comus"]').should('have.length', 5);
  });

  it('Renders specific top comu', () => {
    cy.get('[data-test="top-comu"]').should('contain', 'Tours');
  });

  it('Renders 3 top helpers', () => {
    cy.get('[data-test="top-helpers"]').should('have.length', 3);
  });

  it('Visit Login with Button', () => {
    cy.get('[data-test="loginbtn"]').contains('login').click();
    cy.location('pathname').should('include', 'login');
  });

  it('Visit Register with Button', () => {
    cy.get('[data-test="registerbtn"]').contains('REGISTRARME').click();
    cy.location('pathname').should('include', 'register');
  });

  it('Visit Communities with Button', () => {
    cy.contains('VER MAS COMUNIDADES').click();
    cy.location('pathname').should('include', 'communities');
  });

  it('Allow to visit community', () => {
    cy.contains('Tours').click();
    cy.location('pathname').should('include', 'Tours');
  });

  it('Doesnt allow to post in community', () => {
    cy.contains('Tours').click();
    cy.contains('Preguntar').click();
    cy.location('pathname').should('include', 'auth');
    cy.contains('Inicia sesión');
  });
  it('Doesnt allow to create community', () => {
    cy.contains('VER MAS COMUNIDADES').click();
    cy.get('[data-test="createbtn"]').click();
    cy.location('pathname').should('include', 'auth');
  });
  it('Doesnt allow to answer a Post', () => {
    cy.contains('Ingeniería Estructural').click();
    cy.contains('¿Cómo predimensionar una casa de un piso?').click();
    cy.location('pathname').should('include', 'posts');
    cy.contains('Responder').click();
    cy.contains('Para ayudar a esta persona deberas iniciar sesión');
  });
});

describe('Register test', () => {
  beforeEach(() => {
    cy.visit('/register');
  });
  it('Doesnt allow bad register', () => {
    cy.get('[data-test="username"]').type('AnonymousUser');
    cy.get('[data-test="fullname"]').type('Anonymous User');
    cy.get('[data-test="password1"]').type('123456');
    cy.get('[data-test="password2"]').type('123456');
    cy.get('[data-test="email"]').type(' ');
    cy.get('[data-test="regbtn"]').contains('REGISTRARME').click();
    cy.contains('Revisa los campos señalados');
  });
  it('Allow register', () => {
    cy.get('[data-test="username"]').type('AnonUser');
    cy.get('[data-test="fullname"]').type('Anonymous User');
    cy.get('[data-test="password1"]').type('123456');
    cy.get('[data-test="password2"]').type('123456');
    cy.get('[data-test="email"]').type('dochoahenao+testing@gmail.com');
    cy.contains('Acepto los términos')
      .parent()
      .find('input[type=checkbox]')
      .check();
    // cy.get('[data-test="regbtn"]').contains('REGISTRARME').click();
    // cy.contains('Formulario enviado con éxito!');
  });
  it('Validate username', () => {
    cy.get('[data-test="username"]').type('An');
    cy.contains('El usuario debe poseer de 4 a 16 digitos');
  });
  it('Validate fullname', () => {
    cy.get('[data-test="fullname"]').type('?A');
    cy.contains('El nombre solo debe contener letras y espacios.');
  });
  it('Validate password', () => {
    cy.get('[data-test="password1"]').type('123456789101122');
    cy.contains('La contraseña debe poseer de 4 a 12 digitos.');
  });
  it('Validate 2 password', () => {
    cy.get('[data-test="password1"]').type('123456');
    cy.get('[data-test="password2"]').type('1234567');
    cy.contains('Ambas contraseñas deben ser iguales.');
  });
  it('Validate email', () => {
    cy.get('[data-test="email"]').type('123456');
    cy.contains('Ingrese un correo electronico válido.');
  });
  it('Visit login with Link', () => {
    cy.contains('Accede Aqui').click();
    cy.location('pathname').should('include', 'login');
  });
});

describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Shows welcome message', () => {
    cy.contains('Es bueno volver a verte');
  });
  it('Visit register with Link', () => {
    cy.contains('Registrate aquí').click();
    cy.location('pathname').should('include', 'register');
  });
  it('Allow user to login', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');
  });
  it('Validate email', () => {
    cy.get('[data-test="email"]').type('123456');
    cy.contains('Ingrese un correo electronico válido.');
  });
  it('Validate password', () => {
    cy.get('[data-test="password"]').type('123456789101122');
    cy.contains('La contraseña debe poseer de 4 a 12 digitos.');
  });
});
