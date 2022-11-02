const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.should();

chai.use(chaiHttp);

describe("User API", () => {
  // test the Get route
  describe("GET /api/users", () => {
    it("It should GET all users", (done) => {
      chai
        .request(server)
        .get("/api/users")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });

    // test GET route with bad URL
    it("It should NOT GET all users", (done) => {
      chai
        .request(server)
        .get("/api/user")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  //   test GET route for specific id
  describe("GET /api/users/:id", () => {
    it("It should GET a user by id", (done) => {
      const userId = 1;
      chai
        .request(server)
        .get("/api/users/" + userId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("user_name");
          response.body.should.have.property("is_server");
          response.body.should.have.property("password");
          response.body.should.have.property("id").eq(1);
          done();
        });
    });

    // test GET route for specific id which does not exist
    it("It should NOT GET a user by id", (done) => {
      const userId = 123;
      chai
        .request(server)
        .get("/api/users/" + userId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  // test POST signup route
  describe("POST /api/users/signup", () => {
    it("It should POST/create new users", (done) => {
      const item = {
        user_name: "Andrew",
        is_server: true,
        password: 1234,
      };
      chai
        .request(server)
        .post("/api/users/signup")
        .send(item)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });

  // test the DELETE route
  describe("DELETE /api/users/:id", () => {
    it("It should DELETE an existing user", (done) => {
      const userId = 1;
      chai
        .request(server)
        .delete("/api/users/" + userId)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
