import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Login} from '../models/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.apiUrl + "/api/Authenticate/login";

  constructor(private http: HttpClient) { }

  Login(form:Login): Observable<String>{
    return this.http.post<String>(this.baseUrl, from);
  }
}
