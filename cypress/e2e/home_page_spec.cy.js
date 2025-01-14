// cypress/integration/home_page.spec.ts

const COUNTRY_CODE = 'ad'

describe('Hub88 Frontend UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should load the homepage', () => {
    cy.contains('Countries').should('be.visible')

    cy.contains(
      "A list of all the countries including the country's name, country's code and country's capital."
    ).should('be.visible')
    cy.get('header').should('exist')
  })

  it('should update table list based on the search query', () => {
    cy.get('#search-input').should('be.visible').type(COUNTRY_CODE)

    cy.get('[data-testid="countries-list"]').should('be.visible').and('contain', COUNTRY_CODE.toUpperCase())
  })
})
