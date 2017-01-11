import { Component, OnInit } from '@angular/core';
import { Translation } from './translation.model';
import { TRANSLATIONS } from '../mock-translations';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
