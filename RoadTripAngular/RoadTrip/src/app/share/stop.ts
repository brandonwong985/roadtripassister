export default class Stop {
    tripId!: number;
    stops!: [ {
        description: string;
        stopId: number;
        stopType: string;
        review: number;
        address: string;
    }];
}