describe('Status Pengiriman By Waybill', () => {

    beforeEach(() => {
        // url
        cy.visit('https://smartcourier.dev.quadrant-si.id/')

        // Login user
        cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
        cy.get('.ant-input-password > .ant-input').type('fadliamin');
        cy.get('.ant-btn').click()
        cy.get('.ant-modal-confirm-btns > .ant-btn').click()

        // Click Menu Pengiriman
        cy.get(':nth-child(3) > .ant-menu-submenu-title > div').click()
        // Click Status Pengiriman
        cy.get('a[href*="/delivery/status"]').click({ force: true })
    })

    it('Cek Status by Waybill-Diterima', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        cy.get('.ant-input').type('BNKB231113N00001') // waybill diterima
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(2) > .ant-col-16 > div').should('have.text', 'Diterima')
    });
    it('Cek Status by Waybill-Dikembalikan', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        cy.get('.ant-input').type('BNKB231113N00004') // waybill dikembalikan
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(2) > .ant-col-16 > div').should('have.text', 'DikembalikanKe-1(Attempt)')
    });
    it('Cek Status by Waybill-Diproses', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        cy.get('.ant-input').type('BNKB231113N00003') // Waybill diproses
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(2) > .ant-col-16 > div').should('have.text', 'Diproses')
    });
});

describe('Status Pengiriman By Barcode', function () {
    beforeEach(() => {
        // url
        cy.visit('https://smartcourier.dev.quadrant-si.id/')

        // Login user
        cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input').type('fadliamin');
        cy.get('.ant-input-password > .ant-input').type('fadliamin');
        cy.get('.ant-btn').click()
        cy.get('.ant-modal-confirm-btns > .ant-btn').click()

        // Click Menu Pengiriman
        cy.get(':nth-child(3) > .ant-menu-submenu-title > div').click()
        // Click Status Pengiriman
        cy.get('a[href*="/delivery/status"]').click({ force: true })
    })
    it('Cek Status by Barcode - Diterima', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
        cy.get('.ant-input-wrapper > .ant-input').type('13074-PS-0004')
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(1) > .header').click()
        cy.get(':nth-child(13) > .ant-col-15 > div').should('have.text','Diterima')
    });
    it('Cek Status by Barcode - Dikembalikan', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
        cy.get('.ant-input-wrapper > .ant-input').type('13074-PS-0070')
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(1) > .header').click()
        cy.get(':nth-child(13) > .ant-col-15 > div').should('have.text','Dikembalikan')
    });
    it.only('Cek Status by Barcode - Onhold', () => {
        cy.get('.ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
        cy.get('.ant-input-wrapper > .ant-input').type('13074-PS-0070')
        cy.get('.ant-col-6 > .ant-btn').click()
        cy.get(':nth-child(2) > .header').click()
        cy.get(':nth-child(13) > .ant-col-15 > div').should('have.text','OnHold')
    });
    
})


