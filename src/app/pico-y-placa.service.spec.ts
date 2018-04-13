import { TestBed, inject } from '@angular/core/testing';

import { PicoYPlacaService } from './pico-y-placa.service';

describe('PicoYPlacaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicoYPlacaService]
    });
  });

  it('should be created', inject([PicoYPlacaService], (service: PicoYPlacaService) => {
    expect(service).toBeTruthy();
  }));
});
