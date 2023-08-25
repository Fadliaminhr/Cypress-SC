 
 beforeEach (function () {
  cy.visit('https://smartcourier.dev.quadrant-si.id/')

  // Login user
  cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
  cy.get('.ant-input-password > .ant-input').type('fadliamin');
  cy.get('.ant-btn').click()
  cy.get('.ant-modal-confirm-btns > .ant-btn').click()

  // Click Menu pengiriman 
  cy.get(':nth-child(3) > .ant-menu-submenu-title').click()
  // Click Dokumen
  cy.get('a[href*="/delivery/document"]').click({ force: true })
  // Click Unggah data
  cy.get('.ant-tabs-tab-active').click()
  // cy.wait(3000)
})


it('Unggah Data ', function(){
  
    // Select 'B N I' from dropdown
    cy.get('.ant-tabs-tab-active').click()
    // Click Pelanggan
    cy.get(':nth-child(1) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    // Pilih BNI
    cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()

    /// Click Jenis dokumen
    cy.get(':nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    // Pilih Kartu
    cy.contains('.ant-select-dropdown-menu-item-active', 'Kartu').click()

    // Click produk
    cy.get(':nth-child(6) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    // Pilih produk
    cy.contains('.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active','Kartu Bni').click()

    // Click template unggah 
    cy.get(':nth-child(2) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
    // Pilih template  
    cy.contains('Format CSV BNI (.csv)').click()

    // Click Unggah file
    // Unggah file
    cy.get('.ant-input-affix-wrapper > .ant-input').attachFile('_B N I Format CSV BNI DEV 1.csv')
    
    // Click 'Tanggal Kirim'
    cy.get('[style="margin-top: 30px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input').click()
    // Pilih tanggal "Hari ini"
    cy.get('.ant-calendar-today-btn').click()

    // Click 'Tanggal Upload'
    cy.get(':nth-child(6) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input').click()
    // Pilih tanggal "Hari ini"
    cy.get('.ant-calendar-today-btn').click()

    // Click button 'Lanjut'
    cy.get('[style="float: right;"] > .ant-btn').click()
    cy.wait(4000)
    cy.get('[style="margin-top: 20px; float: right; padding-right: 20px;"] > .ant-btn').click()
    
  });
