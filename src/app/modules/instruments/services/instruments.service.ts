import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrument } from '../models/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private httpClient : HttpClient) { }

  getInstrumentList(){
    return this.httpClient.get<Instrument[]>("http://localhost:5132/api/instruments");
  }
}