import HomePage from "./HomePage";

describe("User can visit GoIt page", () => {

    beforeEach("Go to page", () => {
        HomePage.visit();
    });

    it("First log in and log out", () => {
        HomePage.loginUser("m.michalczuk7@o2.pl", "123456789")
        HomePage.logout()
    });

    it("Second log in and log out", () => {
        HomePage.loginUser("m.michalczuk7@o2.pl, 123456789")
        HomePage.logout()
    });

});