/// <reference types="cypress" />

describe('[Navigate]', () => {
    it("플레이리스트 페이지로 이동한다.", () => {
        cy.visit("http://localhost:3000");
        cy.get("h1")
            .contains("플레이리스트");
    });
    if("잘못된 주소를 입력할 경우 NOTFoundPage로 이동한다.", () => {
        cy.request({
            url: '/404',
            failOnStatusCode: false,
        }).its("status").should("equal", 404);
        cy.visit('/404', { failOnStatusCode: false });
    });
})