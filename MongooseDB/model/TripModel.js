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
            name: String,
            tripId: Number,
            owner: String
        }, { collection: 'trips' });
    };
    TripModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Trips", this.schema);
    };
    TripModel.prototype.retrieveAllTrips = function (response) {
        var query = this.model.find({});
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
    return TripModel;
}());
exports.TripModel = TripModel;
