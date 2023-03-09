interface IStopModelAngular {
    tripId: number;
    stops: [ {
        description: string;
        stopId: number;
        stopType: string;
        review: number;
        address: string;
    }];
}
export default IStopModelAngular;