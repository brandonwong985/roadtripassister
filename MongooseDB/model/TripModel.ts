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
                name: String,
                tripId: Number,
                owner: String,
            }, {collection: 'trips'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITripModel>("trips", this.schema);
    }

    public retrieveAllTrips(response:any): any {
        var query = this.model.find({});
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

}
export {TripModel};