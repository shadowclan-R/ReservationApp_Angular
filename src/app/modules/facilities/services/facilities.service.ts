import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Facility } from '../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http:HttpClient) { }

  getFacilityList(){
    return this.http.get<Facility[]>("http://localhost:5132/api/facilities");
  }

  getFacilityById(id: number){ // 
    return this.http.get<Facility>("http://localhost:5132/api/facilities/" + id);

  }

  create(facility : Facility){
    //return this.http.post("http://localhost:5132/api/facilities/" + facility);
    return this.http.post(`http://localhost:5132/api/facilities`, facility );
  }

  edit(facility: Facility){
    return this.http.put(`http://localhost:5132/api/facilities/`+ facility.id, facility );
  }

  deleteFacility(id : number){
    return this.http.delete("http://localhost:5132/api/facilities/" + id);
  }
  
}
