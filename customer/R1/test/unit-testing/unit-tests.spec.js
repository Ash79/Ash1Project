'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/Customers/v1';
const samplePath = '/../../sampleData/v1/Customer.json';
var CustomerData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var CustomerFD = fs.readFileSync(__dirname + samplePath);
    CustomerData = [];
    if(CustomerFD) {
      CustomerData = JSON.parse(CustomerFD);
    }
  });


                        
  // GET - List all records
  it('GET List of Customers', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(CustomerData.length);
      });
  });
    // GET - List existing record by customerId
  it('GET Existing Customer by customerId', function () {
    var myRecord = CustomerData[0];
    var uniqueParam = myRecord['customerId'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(CustomerData[0]);
      });
  });

  // GET - List non-existing record by customerId
  it('GET Non-Existing Customer by customerId', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing Customer', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+CustomerData[0]['customerId'])
      .send(CustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(CustomerData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing Customer', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(CustomerData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New Customer', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(CustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(CustomerData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing Customer', function () {
    var updatedSting = JSON.stringify(CustomerData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['customerId'];
    delete updatedRecord['customerId'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(CustomerData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing Customer', function () {
    var recordToDelete = CustomerData[0];
    var uniqueParam = recordToDelete['customerId'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing Customer', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});