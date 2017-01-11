import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Translation } from './translation.model';

@Injectable()
export class TranslationsService {

  constructor(private http: Http) { }

  getTranslations() {
    return this.http.get('http://localhost:3001/translations.json').map(res => res.json())
  }
}
