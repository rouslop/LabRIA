import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn = "Bearer "+localStorage.getItem('token');
        if (isLoggedIn!=null) {
            request = request.clone({
                setHeaders: { Authorization: isLoggedIn}
            });
        }

        return next.handle(request);
    }
}