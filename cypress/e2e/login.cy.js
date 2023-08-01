import { LoginPage } from "./Pages/LoginPage"

const loginPage = new LoginPage()

beforeEach(function () {
  cy.visit('https://smartcourier.dev.quadrant-si.id')
})

describe('Login CMS SC', () => {
  
  it('Login with valid credentials', () => {
    loginPage.enterUsername('fadliamin')
    loginPage.enterPassword('fadliamin')
    loginPage.clickLogin()
  })
  it('Login with invalid username', () => {
    loginPage.enterUsername('fadliamin12')
    loginPage.enterPassword('fadliamin')
    loginPage.clickLogin()
  })
  it('Login with invalid credentials', () => {
    loginPage.enterUsername('fadliamin')
    loginPage.enterPassword('fadliamin12')
    loginPage.clickLogin()
  })
})