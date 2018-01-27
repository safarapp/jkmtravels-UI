export class BookingRequest {

    from: string;
    to: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    groupSize: number;
    oneWay: boolean;

    constructor() {
        this.from = '';
        this.to = '';
        this.startDate = '';
        this.endDate = '';
        this.startTime = '';
        this.endTime = '';
    }
}