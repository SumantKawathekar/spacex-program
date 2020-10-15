import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchProgramService {

  constructor(private readonly http: HttpClient) { }

  public getAllLaunchData() {
    const url = 'https://api.spacexdata.com/v3/launches?limit=100'
    return this.http.get(url)
  }

  public getFilteredData(body) {
    console.log(body)
    let params = new HttpParams();

    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key) && body[key] !== null) {
        params = params.set(key, body[key])
        
      }
    }
    console.log(params)
    const url = 'https://api.spacexdata.com/v3/launches';
    return this.http.get(url, {params})
  }
}
