import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IStopModel} from '../interfaces/IStopModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class StopModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                tripId: Number,
                stops: [ 
                    {
                    description: String,
                    stopId: Number,
                    stopType: String,
                    review: Number,
                    address: String,
                    }
                ]
            }, {collection: 'stops'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IStopModel>("stops", this.schema);
    }
    
    public retrieveStopsDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveStopsCount(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, innerStopList) => {
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
    }

}
export {StopModel};