import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  private requests: HttpRequest<any>[] = []

  constructor(private loaderService: LoaderService,private snackBar: MatSnackBar,private authService: AuthService) { }

  openSnackBar(message: string) {
      this.snackBar.open(message, 'Close', {
        duration: 2000,
        verticalPosition: 'top'
      });
  }

  removeRequest(req: HttpRequest<any>) {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
          this.requests.splice(i, 1);
          console.log(this.requests.length)
      }
      this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.requests.push(req);
      this.loaderService.isLoading.next(true);

      const access_token  = this.authService.getToken()
      console.log(access_token)

      if(access_token){
          req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${access_token}`
            }
          })
      }

      return Observable.create(observer => {
          const subscription = next.handle(req)
              .subscribe(
                  event => {
                      if (event instanceof HttpResponse) {
                          this.removeRequest(req);
                          observer.next(event);
                          this.openSnackBar('Done')
                      }
                  },
                  err => {
                    console.log(err)
                      this.openSnackBar('Something is wrong, please try again !');
                      this.removeRequest(req);
                      observer.error(err);
                      this.loaderService.isLoading.next(false)
                  },
                  () => {
                      this.removeRequest(req);
                      observer.complete();
                      this.loaderService.isLoading.next(false)
                  });
          // remove request from queue when cancelled
          return () => {
              this.removeRequest(req);
              subscription.unsubscribe();
          };
      });
  }
}
