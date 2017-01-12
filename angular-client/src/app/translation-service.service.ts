import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TranslationService {

  constructor(private http: Http) { }

    getTranslation() {
      return this.http.get('http://localhost:3001/translations.json').map(res => res.json());
    }
}
