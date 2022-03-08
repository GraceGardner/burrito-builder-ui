describe('user flow', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('be able to create an order', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      id: 543,
      name: 'human',
      ingredients: ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco']
    })

    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      orders: [
        {
          id: 1,
          name: 'Pat',
          ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        },
        {
          id: 2,
          name: 'Sam',
          ingredients: ['steak', 'pico de gallo', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        },
        {
          id: 3,
          name: 'Alex',
          ingredients: ['sofritas', 'beans', 'sour cream', 'carnitas', 'queso fresco']
        },
        {
          id: 543,
          name: 'human',
          ingredients: ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco']
        },
      ]
    })

    cy.get('.name-input').type('human')
      .get('.opt-button').eq(0).click()
      .get('.opt-button').eq(1).click()
      .get('.opt-button').eq(2).click()
      .get('.opt-button').eq(3).click()
      .get('.opt-button').eq(4).click()
      .get('.opt-button').eq(5).click()
    cy.get('.order-button').click()
      .get('.order').eq(3)
  })

  it('should not be able to create an order without adding ingredients', () => {
    cy.get('.name-input').type('human')
      .get('.order-button').click()
      .get('.order').eq(2)
  })

})
