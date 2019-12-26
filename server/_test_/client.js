const app = require("../app");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

  describe('GET / ', () => {
      it('it should GET /', (done) => {
        chai.request(app)
            .get('/api/client')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
       it("it should GET /auth and FAIL AUTH", done => {
         chai
           .request(app)
           .get("/api/auth")
           .end((err, res) => {
             res.should.have.status(404);
             done();
           });
       });
       it("POST /customers", function(done) {
         chai
           .request(app)
           .post("/api/client/register")
           .send({
             name: "12323",
             password:"12323",
             email:"123331",
             address: "321313",
             phone:312313
           })
           .end(function(err, res) {
             if (err) done(err);
             res.body.should.have.property("customer");
           });
         done();
       });
        it("POST /admin/books", function(done) {
          chai
            .request(app)
            .post("/api/admin/books")
            .send({
              name: "12323",
              password: "12323",
              email: "123331",
              address: "321313",
              phone: 312313
            })
            .end(function(err, res) {
              if (err) done(err);
              res.body.should.have.property("customer");
            });
          done();
        });
  });
