/// <reference types="cypress" />

describe("[API] /musics", () => {
    it("200 SUCCESS를 리턴한다.", () => {
        cy.request("http://localhost:8000/musics")
            .its('status')
            .should('be.equal', 200);
    });
    it("Music객체 배열을 리턴한다.", () => {
        cy.request("http://localhost:8000/musics")
            .its("body.items")
            .each((music) => {
                expect(music)
                    .to.have.keys("id", "title", "moods", "genre", "public_date", "url");
            })
    })
})

describe("[API] /musics/:musicId", () => {
    it("200 SUCCESS를 리턴한다.", () => {
        cy.request("http://localhost:8000/musics/")
            .its('status')
            .should('be.equal', 200);
    });
    it("MusicUrl객체를 리턴한다.", () => {
        cy.request("http://localhost:8000/musics/av3Xmt7DZ9")
            .then(({body}) => {
                expect(body)
                    .to.have.keys("url");
            });
    });
    it("MusicId가 잘못된 경우 404를 리턴한다.", () => {
        cy.request({
            url: "http://localhost:8000/musics/asdfasdfa",
            failOnStatusCode: false,
        })
            .its('status')
            .should('be.equal', 404);
    })
})