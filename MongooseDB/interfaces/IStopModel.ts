import Mongoose = require("mongoose");

interface IStopModel extends Mongoose.Document {
    tripId: number;
    stops: [ {
        description: string;
        stopId: number;
        stopType: string;
        review: number;
        address: string;
    }];
}
export {IStopModel};
