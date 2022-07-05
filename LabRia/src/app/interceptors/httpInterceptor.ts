import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private spinnerSvc: SpinnerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerSvc.show();
        const isLoggedIn = "Bearer "+localStorage.getItem('token');
        if (isLoggedIn!=null) {
            request = request.clone({
                setHeaders: { Authorization: isLoggedIn}
            });
        }

        return next.handle(request).pipe(finalize(()=>this.spinnerSvc.hide()));
    }
}