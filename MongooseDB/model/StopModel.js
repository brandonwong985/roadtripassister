"use strict";
exports.__esModule = true;
exports.StopModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var StopModel = /** @class */ (function () {
    function StopModel() {
        this.createSchema();
        this.createModel();
    }
    StopModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            tripId: Number,
            stops: [
                {
                    description: String,
                    stopId: Number,
                    stopType: String,
                    review: Number,
                    address: String
                }
            ]
        }, { collection: 'stops' });
    };
    StopModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Stop", this.schema);
    };
    StopModel.prototype.retrieveStopsDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    StopModel.prototype.retrieveStopsCount = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, innerStopList) {
            if (err) {
                console.log('error retrieving count');
            }
            else {
                if (innerStopList == null) {
                    response.status(404);
                    response.json('{count: -1}');
                }
                else {
                    console.log('number of stops: ' + innerStopList.stops.length);
                    response.json('{count:' + innerStopList.stops.length + '}');
                }
            }
        });
    };
    return StopModel;
}());
exports.StopModel = StopModel;
