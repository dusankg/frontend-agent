import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { CarDTO } from '../model/CarDTO';


@Injectable()
export class AddCarService {
    carCreateUrl : string;

    constructor(private http: HttpClient) {
        this.carCreateUrl = 'http://localhost:8080/car';
      }


      public createCar(carDTO: CarDTO): Observable<any>{
        return this.http.post<any>(this.carCreateUrl , carDTO);
      }
}
