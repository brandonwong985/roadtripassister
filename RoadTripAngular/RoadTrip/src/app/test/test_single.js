var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Stop Detail result', function () {
	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/trip/1/stop/1")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return a json object', function (){
		expect(response).to.have.status(200);
        expect(response).to.be.an.json;
        expect(response.body).to.be.an('object');
    });

	it('The elements in the json object have the expected properties', function(){
		expect(response.body).to.have.property('description');
        expect(response.body).to.have.property('stopId');
        expect(response.body).to.have.property('stopType');
        expect(response.body).to.have.property('review');
        expect(response.body).to.have.property('address');
        expect(response.body).to.have.property('description').that.is.a('string');
        expect(response.body).to.have.property('stopId').that.is.a('Number');
        expect(response.body).to.have.property('stopType').that.is.a('string');
        expect(response.body).to.have.property('review').that.is.a('Number');
        expect(response.body).to.have.property('address').that.is.a('string');
	});	
});