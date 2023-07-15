import { Instrument } from "../../instruments/models/instruments";


export interface Facility{
    id: number;
    name: string;
    //active: boolean;
    description: string;
    instrumentList: Instrument[];

}

