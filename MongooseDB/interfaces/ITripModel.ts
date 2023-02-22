import Mongoose = require("mongoose");

interface ITripModel extends Mongoose.Document {
    name: string;
    tripId: number;
    owner: string;
}
export {ITripModel};