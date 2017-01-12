import { Component, OnInit } from '@angular/core';
import { Translation } from './translation.model';
import { TRANSLATIONS } from '../mock-translations';
import { TranslationService } from '../translation-service.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
  provider: [TranslationService]
})
export class TranslationComponent implements OnInit {

  translations: Translation[];

  constructor(private tService: TranslationService) {

   }

  ngOnInit() {
    this.tService.getTranslation().subscribe(res => this.translations = res)
  }

}
