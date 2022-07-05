import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class Spinerinterceptor implements HttpInterceptor {
    constructor(private spinnerSvc: SpinnerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerSvc.show();
        return next.handle(request).pipe(
            finalize(()=>this.spinnerSvc.hide())
            );
    }
}