import Mongoose = require("mongoose");

interface ITripModel extends Mongoose.Document {
    name: string;
    tripId: number;
    owner: string;
    start: string;
    end: string;
    date: string;
}
export {ITripModel};