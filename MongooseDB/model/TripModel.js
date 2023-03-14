"use strict";
exports.__esModule = true;
exports.TripModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TripModel = /** @class */ (function () {
    function TripModel() {
        this.createSchema();
        this.createModel();
    }
    TripModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: String,
            name: String,
            tripId: Number,
            owner: String,
            start: String,
            end: String,
            date: String
        }, { collection: 'trips' });
    };
    TripModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("trips", this.schema);
    };
    TripModel.prototype.retrieveAllTrips = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    TripModel.prototype.retrieveTripCount = function (response) {
        console.log("retrieve Trip Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfTrips) {
            console.log("numberOfTrips: " + numberOfTrips);
            response.json(numberOfTrips);
        });
    };
    TripModel.prototype.retrieveTripDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, tripDetails) {
            response.json(tripDetails);
        });
    };
    TripModel.prototype.deleteTrip = function (response, filter) {
        var query = this.model.deleteOne(filter);
        query.exec(function (err) {
            if (err) {
                response.json({ success: false, message: 'Error deleting trip: ' + err });
            }
            else {
                response.json({ success: true, message: 'Trip deleted.' });
            }
        });
    };
    return TripModel;
}());
exports.TripModel = TripModel;
