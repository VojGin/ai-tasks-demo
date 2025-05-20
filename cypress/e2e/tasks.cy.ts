const uuid = () => Cypress._.random(0, 1e6)
let id = uuid()

describe('Task Management', () => {
  beforeEach(() => {
    id = uuid()
    cy.visit('/tasks')
    // Wait for the page to load
    cy.get('h1').contains('Tasks').should('be.visible')
  })

  it('should create a new task', () => {
    // Click the Add Task button to open the dialog
    cy.get('button').contains('Add Task').click()

    // Wait for the dialog to be visible
    cy.get('[role="dialog"]').should('be.visible')

    // Fill in the form
    cy.get('input#title').type(`New Task ${id}`)
    cy.get('textarea#description').type('Task description')

    // Submit the form
    cy.get('button[type="submit"]').click()

    // Verify the task was created
    cy.contains(`New Task ${id}`).should('be.visible')
  })

  it('should edit an existing task', () => {
    // Create a task first
    cy.get('button').contains('Add Task').click()
    cy.get('[role="dialog"]').should('be.visible')
    cy.get('input#title').type(`Task to Edit ${id}`)
    cy.get('textarea#description').type('Original description')
    cy.get('button[type="submit"]').click()

    // Wait for the task to be created
    cy.contains(`Task to Edit ${id}`).should('be.visible')

    // Click the edit button
    cy.contains(`Task to Edit ${id}`)
      .parents('[data-slot="card"]')
      .find('button')
      .contains('Edit')
      .click()

    // Wait for the edit page to load
    cy.get('h1').contains('Edit Task').should('be.visible')

    // Update the task
    cy.get('input#title').clear().type(`Updated Task ${id}`)
    cy.get('textarea#description').clear().type('Updated description')
    cy.get('button[type="submit"]').click()

    // Verify the task was updated
    cy.contains(`Updated Task ${id}`).should('be.visible')
  })

  it('should delete a task', () => {
    // Create a task first
    cy.get('button').contains('Add Task').click()
    cy.get('[role="dialog"]').should('be.visible')
    cy.get('input#title').type(`Task to Delete ${id}`)
    cy.get('textarea#description').type('Will be deleted')
    cy.get('button[type="submit"]').click()

    // Wait for the task to be created
    cy.contains(`Task to Delete ${id}`).should('be.visible')

    // Click the delete button
    cy.contains(`Task to Delete ${id}`)
      .parents('[data-slot="card"]')
      .find('button')
      .contains('Delete')
      .click()

    // Verify the task was deleted
    cy.contains(`Task to Delete ${id}`).should('not.exist')
  })
}) 