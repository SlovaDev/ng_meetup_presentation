/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationServiceService } from './translation-service.service';

describe('TranslationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationServiceService]
    });
  });

  it('should ...', inject([TranslationServiceService], (service: TranslationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
