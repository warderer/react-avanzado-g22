describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado de mi aplicación
    cy.visit('/')

    // 02. Act: Interactuar con la aplicación
    cy.get('h1')
      .contains('Home') // 03. Assert: Espero un resultado
  })

  it('Probar el login como CUSTOMER', () => {
    // Intercept lo uso para saber cuando una llamada a API es resulta y puedo esperarla en otro momento usando cy.wait('@login')
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01. Arrange: Setup del estado de mi aplicación
    cy.visit('/login')

    // 02. Act: Interactuar con la aplicación
    cy.doLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')

    cy.get('h1').contains('Dashboard') // 03. Assert: Espero un resultado
  })

  it('Cuando haga Logout como ADMIN me lleve a la página de Home', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01. Arrange: Setup del estado de mi aplicación
    cy.visit('/login')

    // 02. Act: Interactuar con la aplicación
    cy.doLogin('superman@dc.com', 'superman')

    cy.wait('@login')
    cy.get('nav > ul > li:last').click()

    cy.get('h1').contains('Please sign in') // 03. Assert: Espero un resultado
  })
})
