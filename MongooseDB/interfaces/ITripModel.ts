import Mongoose = require("mongoose");

interface ITripModel extends Mongoose.Document {
    userId: string;
    name: string;
    tripId: number;
    owner: string;
    start: string;
    end: string;
    date: string;
}
export {ITripModel};