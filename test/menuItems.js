const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.should();

chai.use(chaiHttp);

describe("MenuItems API", () => {
  // test the GET route
  describe("GET /api/menuitems", () => {
    it("It should GET all menu items", (done) => {
      chai
        .request(server)
        .get("/api/menuitems")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });
  });

  //   test GET route for specific id
  describe("GET /api/menuitems/:id", () => {
    it("It should GET an item by id", (done) => {
      const itemId = 1;
      chai
        .request(server)
        .get("/api/menuitems/" + itemId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("item_name");
          response.body.should.have.property("price");
          response.body.should.have.property("image_path");
          response.body.should.have.property("id").eq(1);
          done();
        });
    });

    // test GET route for specific id which does not exist
    it("It should NOT GET a item by id", (done) => {
      const itemId = 123;
      chai
        .request(server)
        .get("/api/menuitems/" + itemId)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  // test POST route
  describe("POST /api/menuitems", () => {
    it("It should POST/create new menu items", (done) => {
      const item = {
        item_name: "burger",
        price: 8.99,
        image_path: "/test",
      };
      chai
        .request(server)
        .post("/api/menuitems")
        .send(item)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("item_name").eq("burger");
          response.body.should.have.property("price").eq(8.99);
          response.body.should.have.property("image_path").eq("/test");
          done();
        });
    });
  });

  // test the DELETE route
  describe("DELETE /api/menuitems/:id", () => {
    it("It should DELETE an existing item", (done) => {
      const itemId = 1;
      chai
        .request(server)
        .delete("/api/menuitems/" + itemId)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
