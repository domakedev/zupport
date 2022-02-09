/// <reference types="Cypress" />
import 'cypress-file-upload';

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
    cy.get('[data-test="top-comus"]').should('have.length', 6);
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
    // eslint-disable-next-line
    cy.wait(500).contains('Tours').click();
    cy.location('pathname').should('include', 'Tours');
  });

  it('Doesnt allow to post in community', () => {
    // eslint-disable-next-line
    cy.wait(500).contains('Tours').click();
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
    // eslint-disable-next-line
    cy.wait(500).contains('Ingeniería Estructural').click();
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
    cy.get('[data-test="regbtn"]').contains('REGISTRARME').click();
    // eslint-disable-next-line
    cy.contains('Formulario enviado con éxito!').wait(1000);
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

describe('Profile Visit', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to visit profile', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');
    cy.contains('Anonymous').click();
    cy.contains('Perfil').click();
  });
});

describe('Profile Edit', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to edit profile', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');
    cy.contains('Anonymous').click();
    cy.contains('Configuración').click();
    // eslint-disable-next-line
    cy.get('[data-test="picture"]').then(() => {
        const fileName = 'Profile.jpg';
        cy.fixture('Profile.jpg').then((fileContent) => {
          cy.get('input[type="file"]').attachFile(fileName, fileContent);
        });
      })
      .wait(1200);
    cy.get('[data-test="fullname"]').clear().type('Anonimor');
    // eslint-disable-next-line
    cy.get('[data-test="editname"]').click().wait(500);
    cy.get('textarea').clear().type('Me gusta la pizza, sin piña por favor 🍕');
    cy.get('[data-test="editdesc"]').click();
    cy.contains('--Selecciona--').click();
    cy.get('[data-test="github"]').select('Github').trigger('mousemove');
    cy.get('[data-test="network"]').clear().type('https://github.com/LordDoH');
    cy.get('[data-test="addnetwork"]').click();
    // eslint-disable-next-line
    cy.contains('Editar mis comunidades').click().wait(2000);
  });
});

describe('Create Community', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to create a community', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');
    cy.get('[data-test="createbtn"]').click();
    cy.get('[data-test="titlecom"]').type('Crypress');
    cy.get('textarea').type('Comunidad para testers.');
    // eslint-disable-next-line
    cy.get('[data-test="imagecom"]')
      .then(() => {
        const fileName = 'Cypress.png';
        cy.fixture('Cypress.png').then((fileContent) => {
          cy.get('input[type="file"]').attachFile(fileName, fileContent);
        });
      })
      .wait(2000);
    cy.contains('CREAR').click();
    // eslint-disable-next-line
    cy.contains('Volver').click().wait(500);
    // eslint-disable-next-line
    cy.reload().wait(500);
    cy.get('[data-test="Crypress01"]').click();
    cy.contains('Edit').click();
    cy.get('[data-test="titlecom"]').clear().type('Cypress');
    cy.get('textarea').clear().type('Comunidad para testers del mundo.');
    // eslint-disable-next-line
    cy.contains('EDITAR').click().wait(2000);
  });
});

describe('Create Post, Join a Community', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to create a post', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');
    cy.get('[data-test="Toursun"]').click();
    cy.contains('Preguntar').click();
    cy.get('[data-test="titlein"]').type(
      'Recomendaciones para ir a Machupichu'
    );
    cy.get('[data-test="postin"]').type(
      'En los proximos dias viajare a Peru y quisiera recomendaciones sobre como llegar a Machupichu, he escuchado que se puede llegar en tren o caminando, es seguro caminar en las vías del tren?'
    );
    // eslint-disable-next-line
    cy.get('[data-test="imagepost"]')
      .click()
      .wait(500)
      .then(() => {
        const fileName = 'MachuPichu.jpg';
        cy.fixture('MachuPichu.jpg').then((fileContent) => {
          cy.get('input[type="file"]').attachFile(fileName, fileContent);
        });
      })
      .wait(1000);
    cy.get('[data-test="lorddoh01"]').click();
    cy.get('[data-test="pointsin"]').type('10');
    // eslint-disable-next-line
    cy.contains('PEDIR AYUDA').click().wait(2000);
  });
});

describe('Edit Post', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to edit a post', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');

    cy.get('[data-test="Toursun"]').click();
    cy.get('[data-test="Recomendaciones para ir a Machupichu00"]').click();

    cy.get('[data-test="titlein"]')
      .clear()
      .type('Recomendaciones para ir a Machupichu 🦙');
    cy.get('[data-test="postin"]')
      .clear()
      .type(
        'En los proximos dias viajare a Peru y quisiera recomendaciones sobre como llegar a Machupichu, he escuchado que se puede llegar en tren o caminando, es seguro caminar en las vías del tren? también quisiera saber que tan duro podria ser el recorrido por el camino inca, deberia llevar bloqueador solar?'
      );
    // eslint-disable-next-line
    cy.get('[data-test="imagepost"]')
      .click()
      .wait(500)
      .then(() => {
        const fileName = 'Machu2.jpg';
        cy.fixture('Machu2.jpg').then((fileContent) => {
          cy.get('input[type="file"]').attachFile(fileName, fileContent);
        });
      })
      .wait(1000);
    cy.get('[data-test="domakedev01"]').click();
    cy.get('[data-test="pointsin"]').clear().type('15');
    // eslint-disable-next-line
    cy.contains('GUARDAR CAMBIOS').click().wait(2000);
  });
});

describe('User answer that post, delete, create new answer and edit that answer', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to answer a post', () => {
    cy.get('[data-test="email"]').type('dochoahenao@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');

    cy.get('[data-test="Toursun"]').click();
    // eslint-disable-next-line
    cy.get('[data-test="Recomendaciones para ir a Machupichu 🦙03"]')
      .click()
      .wait(1500);
    cy.get('[data-test="Recomendaciones para ir a Machupichu 🦙03"]').click();
    cy.get('[data-test="answerbox"]').type(
      'La mejor manera de llegar es en tren'
    );
    cy.get('[data-test="sendbtn"]').click();
    cy.get('[data-test="morelorddoh"]').click();
    cy.get('[data-test="deletelorddoh"]').click();
    cy.get('[data-test="answerbox"]').type(
      'La mejor manera de llegar es en tren desde Valle Sagrado'
    );
    cy.get('[data-test="sendbtn"]').click();
    cy.get('[data-test="morelorddoh"]').click();
    cy.get('[data-test="editlorddoh"]').click();
    cy.get('[data-test="lorddohans"]')
      .clear()
      .type(
        'La mejor manera de llegar es en tren desde Valle Sagrado, en este enlace encontraras información valiosa: https://www.peru.travel/'
      );
    // eslint-disable-next-line
    cy.get('[data-test="editlorddoh"]').click().wait(2000);
  });
});

describe('User validates answer and donate', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Allow user to validate answer and donate', () => {
    cy.get('[data-test="email"]').type('dochoahenao+test@gmail.com');
    cy.get('[data-test="password"]').type('123456');
    cy.contains('INICIAR SESIÓN').click();
    cy.location('pathname').should('include', 'communities');

    cy.get('[data-test="Toursun"]').click();
    // eslint-disable-next-line
    cy.get('[data-test="Recomendaciones para ir a Machupichu 🦙03"]')
      .click()
      .wait(1500);
    cy.get('[data-test="vallorddoh"]').click();
    cy.contains('Sí, esta respuesta me sirvió').click();
    cy.contains('OK').click();
    cy.get('[data-test="donate"]').click();
  });
});
