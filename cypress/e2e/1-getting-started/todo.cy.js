describe("Welcome Page Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should navigate to /signup when Google signup button is clicked", () => {
    cy.get("button#google-signup").click();
    cy.url().should("include", "/signup");
  });

  it("should navigate to /signup when Apple signup button is clicked", () => {
    cy.contains("button", "Apple ile kaydol").click();
    cy.url().should("include", "/signup");
  });

  it("should navigate to /signup when Hesap oluştur button is clicked", () => {
    cy.contains("button", "Hesap oluştur").click();
    cy.url().should("include", "/signup");
  });

  it("should navigate to /signup when Giriş yap button is clicked", () => {
    cy.contains("button", "Giriş yap").click();
    cy.url().should("include", "/signup");
  });
});

describe("SignUp Page Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/signup");
  });

  it("should fill in text inputs and select date, then navigate to /home on form submission", () => {
    cy.get('input[name="isim"]').type("John Doe");

    cy.get('input[name="kullanici"]').type("johndoe123");

    cy.get('select[name="day"]').select("10");

    cy.get('select[name="month"]').select("5");

    cy.get('select[name="year"]').select("1990");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/home");
  });

  it("should show validation errors if required fields are empty", () => {
    cy.get('button[type="submit"]').click();
  });
});

describe("PostList and Tweetpost Functionality", () => {
  beforeEach(() => {
    // Testten önce her seferinde ziyaret edilmesi gereken sayfa
    cy.visit("http://localhost:5173/home");
  });

  it("should display new tweet in the post list when a tweet is posted", () => {
    // Tweet içeriğini yaz
    const tweetContent = "Bu bir test tweetidir.";
    cy.get("textarea").type(tweetContent);

    // Tweet gönder
    cy.get("button.btn-tweet").click();

    // Yeni tweet'in post listesinde göründüğünü doğrula
    cy.get(".tweet-content").first().should("contain", tweetContent);
  });
});
