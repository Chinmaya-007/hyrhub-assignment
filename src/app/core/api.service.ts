import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";

import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'localhost:1000/';

  birthday1(id:string) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+id);
  }
  birthday(loginPayload:string) : Observable<ApiResponse> {
    
    return this.http.get<ApiResponse>('localhost:1000/'+loginPayload);
  }
}