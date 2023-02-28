var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Trip lists result', function () {
	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/trip")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
        expect(response).to.be.an.json;
		expect(response.body).to.have.length.above(1);
        expect(response.body).to.be.an('array');
    });

	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.have.property('_id');
					expect(body[i]).to.have.property('name');
					expect(body[i]).to.have.property('tripId');
					expect(body[i]).to.have.property('owner');
					expect(body[i]).to.have.property('start');
					expect(body[i]).to.have.property('end');
                    expect(body[i]).to.have.property('date');
                    expect(body[i]).to.have.property('name').that.is.a('string');
					expect(body[i]).to.have.property('tripId').that.is.a('Number');
					expect(body[i]).to.have.property('owner').that.is.a('string');
					expect(body[i]).to.have.property('start').that.is.a('string');
					expect(body[i]).to.have.property('end').that.is.a('string');
                    expect(body[i]).to.have.property('date').that.is.a('string');
				}
				return true;
			});
	});	
});

describe('Test Stop Detail result', function () {
	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/trip/1/1")
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