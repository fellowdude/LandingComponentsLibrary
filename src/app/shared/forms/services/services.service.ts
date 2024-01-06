import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private apiService: ApiService) { }

  getForm(p_lang_code: string = 'en'): Observable<any> {
    return this.apiService.get('/v1/forms/init', { p_lang_code });
  }

  submitForm(p_form_inputs: string, p_lang_code: string = 'en'): Observable<any> {
    return this.apiService.post('/v1/forms/submit', { p_form_inputs, p_lang_code });
  }
}
