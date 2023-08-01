/// <reference types="cypress"/>

// it('File Upload Test', function(){
//     cy.visit('https://smartcourier.dev.quadrant-si.id/')
//     cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
//     cy.get('.ant-input-password > .ant-input').type('fadliamin');
//     cy.get('.ant-btn').click()
//     cy.get('.ant-modal-confirm-btns > .ant-btn').click()
//     cy.get(':nth-child(3) > .ant-menu-submenu-title > div').click()
//     cy.get('a[href*="/delivery/document"]').click({force: true})
//     cy.get('.ant-tabs-tab-active').click()
//     cy.get(':nth-child(1) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
//     cy.get('//li[normalize-space()='B N I']').click()
// })
it('File Upload Test', function(){
    cy.visit('https://smartcourier.dev.quadrant-si.id/')
  
    // Login
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
    cy.get('.ant-input-password > .ant-input').type('fadliamin');
    cy.get('.ant-btn').click()
    cy.get('.ant-modal-confirm-btns > .ant-btn').click()
  
    // Navigate to document upload
    cy.get(':nth-child(3) > .ant-menu-submenu-title > div').click()
    cy.get('a[href*="/delivery/document"]').click({ force: true })
  
    // Select 'B N I' from dropdown
    cy.get('.ant-tabs-tab-active').click()
    cy.get(':nth-child(1) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()

    // Select 'Jenis Dokumen' from dropdown
    cy.get(':nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    cy.contains('.ant-select-dropdown-menu-item-active', 'Kartu').click()

    // Select 'Produk' from dropdown
    cy.get(':nth-child(6) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    cy.contains('.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active','Kartu Bni').click()

    // Select 'Template Unggah' from dropdown 
    cy.get(':nth-child(2) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    cy.contains('Format CSV BNI (.csv)').click()

    // Unggah File
    cy.get('.ant-input-affix-wrapper > .ant-input').attachFile('_B N I Format CSV BNI DEV 1.csv')
    
    // Select 'Tanggal Kirim'
    cy.get('[style="margin-top: 30px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input').click()
    cy.get('.ant-calendar-today-btn').click()

    // Select 'Tanggal Upload'
    cy.get(':nth-child(6) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input').click()
    cy.get('.ant-calendar-today-btn').click()

    // Click button 'Lanjut'
    cy.get('[style="float: right;"] > .ant-btn').click()
    cy.wait(8000)
    cy.get('[style="margin-top: 20px; float: right; padding-right: 20px;"] > .ant-btn').click()
  });
