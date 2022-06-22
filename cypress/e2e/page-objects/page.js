class Page {
    navigate(path) {
        cy.visit(path);
        return this;
    }
}

module.exports = Page;