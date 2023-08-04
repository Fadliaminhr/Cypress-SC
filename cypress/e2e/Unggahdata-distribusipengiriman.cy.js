import { TIPE_PENGIRIMAN,} from "./Pages/Const";

describe('Dokumen, Unggah Data', () => {
    beforeEach(() => {
      cy.visit('https://smartcourier.dev.quadrant-si.id/')
  
      // Login
      cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
      cy.get('.ant-input-password > .ant-input').type('fadliamin');
      cy.get('.ant-btn').click()
      cy.get('.ant-modal-confirm-btns > .ant-btn').click()
  
      // Navigate to document distribusi
      cy.get(':nth-child(3) > .ant-menu-submenu-title').click()
      cy.get('a[href*="/delivery/document"]').click({ force: true })
      cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()
    })
  
    it('Unggah Data', () => {
      // Navigate to distibusi pengiriman dropdown
      cy.get('[style="border-radius: 10px;"] > .ant-card-body > .ant-row > .ant-col-14 > .ant-btn').click()
  
      // Navigate to cycle date
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input').click()
      cy.get('.ant-calendar-today-btn').click()
  
      // Navigate to pelanggan
      cy.get('[style="margin-left: 20px; padding-right: 20px;"] > :nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
      cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
  
      // Navigate to jenis dokumen
      cy.get('.ant-card-body > :nth-child(1) > :nth-child(2) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
      cy.get('.ant-select-dropdown-menu-item-active').click()
  
      // Navigate to produk
      cy.get(':nth-child(2) > [style="margin-right: 20px; margin-left: 20px;"] > :nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
      cy.get('.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active').click()
  
      // Navigate to sudah di scan
      cy.get('[style="float: left; margin-left: 5px;"] > :nth-child(3) > b').click()
  
      // Copy value waybill
      cy.get(':nth-child(1) > .ant-list-item-meta > .ant-list-item-meta-content > .ant-list-item-meta-description > span').invoke('text')
        .then((text) => {
            const partialText = text.substring(0, 16);
          cy.log(`BNKB230804N00001: ${text}`)
          cy.get('.ant-modal-close-x').click()
          // Menggunakan teks yang telah diambil sebagai nilai input
          cy.get(':nth-child(1) > [style="text-align: left; padding-right: 20px; padding-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
          cy.contains(TIPE_PENGIRIMAN).click()

          cy.get(':nth-child(1) > [style="text-align: left; padding-right: 20px; padding-left: 20px;"] > :nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
          cy.contains('A4').click()

          cy.get('[style="text-align: left; padding-right: 20px; padding-left: 20px;"] > :nth-child(6) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
          cy.contains('Jabodetabek').click()

          cy.get(':nth-child(2) > [style="text-align: left; padding-right: 20px; padding-left: 20px;"] > :nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
          cy.contains('Duren Sawit RDS Express').click()

          cy.get(':nth-child(2) > [style="text-align: left; padding-right: 20px; padding-left: 20px;"] > :nth-child(4) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
          cy.contains('(DRS001)').click()

          // Menggunakan teks yang telah diambil sebagai nilai input
          cy.get('.ant-form-item-children > .ant-input').type(partialText)
          cy.get('.ant-form-item-children > .ant-input').type('{enter}')
          
          // Setelah Anda mengetikkan teks yang diambil, Anda bisa melanjutkan langkah-langkah pengujian lainnya
        })
    })
  })
  