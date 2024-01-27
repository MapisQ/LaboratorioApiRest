import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  apiUrl:any
  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }

}
