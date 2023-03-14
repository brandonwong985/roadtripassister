import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ITripModel} from '../interfaces/ITripModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TripModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userId: String,
                name: String,
                tripId: Number,
                owner: String,
                start: String,
                end: String,
                date: String,
            }, {collection: 'trips'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITripModel>("trips", this.schema);
    }

    public retrieveAllTrips(response:any, filter:Object): any {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveTripCount(response:any): any {
        console.log("retrieve Trip Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfTrips) => {
            console.log("numberOfTrips: " + numberOfTrips);
            response.json(numberOfTrips) ;
        });
    }

    public retrieveTripDetails(response: any, filter: Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, tripDetails) => {
            response.json(tripDetails);
        })
    }

    public deleteTrip(response: any, filter: Object) {
        var query = this.model.deleteOne(filter);
        query.exec( (err) => {
            if (err) {
                response.json({success: false, message: 'Error deleting trip: ' + err});
            }
            else {
                response.json({success: true, message: 'Trip deleted.'});
            }
        })
    }

}
export {TripModel};