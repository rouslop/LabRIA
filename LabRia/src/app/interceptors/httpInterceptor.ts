import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiJhYTJlOWRkMC1lMjE1LTRjMzYtYjgzMi0xNTVlOTQzZWFmMWMiLCJleHAiOjE2NTY2MzczMDd9.qg8FN57tTlJOXYLT916hi3ONnk1_wwQ9_7tF0v31MTI";//localStorage.getItem('token');
        // const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (true) {
            request = request.clone({
                setHeaders: { Authorization: isLoggedIn}
            });
        }

        return next.handle(request);
    }
}