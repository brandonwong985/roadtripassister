"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var TripModel_1 = require("./model/TripModel");
var StopModel_1 = require("./model/StopModel");
var crypto = require("crypto");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Trips = new TripModel_1.TripModel();
        this.Stops = new StopModel_1.StopModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/json', express.static(__dirname + '/json'));
        router.get('/app/trip/:tripId/count', function (req, res) {
            var id = req.params.tripId;
            console.log('Query single trip with id: ' + id);
            _this.Stops.retrieveStopsCount(res, { tripId: id });
        });
        router.post('/app/trip/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.tripId = id;
            _this.Trips.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/app/trip/:tripId', function (req, res) {
            var id = req.params.tripId;
            console.log('Query single trip with id: ' + id);
            _this.Stops.retrieveStopsDetails(res, { tripId: id });
        });
        router.get('/app/trip/', function (req, res) {
            console.log('Query All trip');
            _this.Trips.retrieveAllTrips(res);
        });
        router.get('/app/tripcount', function (req, res) {
            console.log('Query the number of trip elements in db');
            _this.Trips.retrieveTripCount(res);
        });
        router.get('/app/trip/:tripId/stop/:stopId', function (req, res) {
            var tripId = req.params.tripId;
            var stopId = req.params.stopId;
            _this.Stops.retrieveStopDetail(res, { tripId: tripId, 'stops.stopId': stopId }, stopId);
            console.log('Querying trip: ' + tripId + ' and stop: ' + stopId);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
