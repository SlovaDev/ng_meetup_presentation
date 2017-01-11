import { Component, OnInit } from '@angular/core';

import { Translation } from './translation.model';
import { TranslationsService } from './translations.service';
import { TRANSLATIONS } from '../mock-translations';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
  providers: [TranslationsService]
})
export class TranslationComponent implements OnInit {

  translations: Translation[];
  
  constructor(private translationsService: TranslationsService) {
    this.translations = TRANSLATIONS;
   }

  ngOnInit() {
    this.translationsService.getTranslations().subscribe(response => this.translations = response)
  }

}
