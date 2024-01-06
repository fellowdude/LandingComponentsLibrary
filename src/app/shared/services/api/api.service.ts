import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  formKey: string = environment.formKey || '79935167452e61d026720fd9bbc9baa7';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      return throwError(() => error);
    }
    console.log(error)
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get(routeAPI: string, params: any = null): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    if(localStorage.getItem('token') || sessionStorage.getItem('token')) headers = headers.append("Authorization","Bearer " + (localStorage.getItem('token') || sessionStorage.getItem('token')));
    if(this.formKey) headers = headers.append("Form-Key", this.formKey);
    return this.http.get((environment.apiURL || 'http://127.0.0.1:8000') + routeAPI, { headers, params }).pipe(
      map((response: any)=>{
        if(!response) throw new Error(); 
        if(response.error !== 0) throw new MessageEvent('HandledError', {data: response}); 
        return response;
      }),
      catchError(this.handleError)
    );
  }

  post(routeAPI: string, body: FormData | any, params: any = null): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    if(localStorage.getItem('token') || sessionStorage.getItem('token')) headers = headers.append("Authorization","Bearer " + (localStorage.getItem('token') || sessionStorage.getItem('token')));
    if(this.formKey) headers = headers.append("Form-Key", this.formKey);
    return this.http.post((environment.apiURL || 'http://127.0.0.1:8000') + routeAPI, body, { headers, params }, ).pipe(
      map((response: any)=>{
        if(!response) throw new Error(); 
        if(response.error !== 0) throw new MessageEvent('HandledError', {data: response}); 
        return response;
      }),
      catchError(this.handleError)
    );
  }

  postFile(routeAPI: string, body: FormData, params: any = null): Observable<any>{
    let headers = new HttpHeaders();
    if(localStorage.getItem('token') || sessionStorage.getItem('token')) headers = headers.append("Authorization","Bearer " + (localStorage.getItem('token') || sessionStorage.getItem('token')));
    if(this.formKey) headers = headers.append("Form-Key", this.formKey);
    return this.http.post((environment.apiURL || 'http://127.0.0.1:8000') + routeAPI, body, { headers, params }, ).pipe(
      map((response: any)=>{
        if(!response) throw new Error(); 
        if(response.error !== 0) throw new MessageEvent('HandledError', {data: response}); 
        return response;
      }),
      catchError(this.handleError)
    );
  }
}
