  // TODO: Your code here
  let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();
chai.use(chaiHttp);


describe('/GET cats', () => {
      it('it should GET all the cats', (done) => {
        chai.request(server)
            .get('/cats')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

describe('/POST cats', () => {
      it('it should POST a cat', (done) => {
        let cat = {
            catName:"Fluffy",
			  ownerEmail:"owner@gmail.com",
			  imageUrl:"String",
			  adoptionMessage:"String"
        }
        chai.request(server)
            .post('/cats')
            .send(cat)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                //res.body.should.have.property('message').eql('Cat successfully added!');
                res.body.book.should.have.property('catName');
                res.body.book.should.have.property('imageUrl');
                res.body.book.should.have.property('adoptionMessage');
                res.body.book.should.have.property('ownerEmail');
              done();
            });
      });

  });