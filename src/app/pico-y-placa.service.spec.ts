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
  it('#ableToDrive should return License Plate Error if license plate is wrong', inject([PicoYPlacaService], (service: PicoYPlacaService) => {
    expect(service.ableToDrive('PCF-123','Tue Apr 10 2018 00:00:00 GMT-0500 (-05)','07:30')).toBe('License Plate Error');
  }));
  it('#ableToDrive should return You can not drive right now!! if the inputs fulfill with the use case', inject([PicoYPlacaService], (service: PicoYPlacaService) => {
    expect(service.ableToDrive('PCF-1234','Tue Apr 10 2018 00:00:00 GMT-0500 (-05)','8:30')).toBe('You can not drive right now!!');
  }));
  it('#ableToDrive should return Free to drive!! if the inputs fulfill with the use case', inject([PicoYPlacaService], (service: PicoYPlacaService) => {
    expect(service.ableToDrive('PCF-1234','Tue Apr 10 2018 00:00:00 GMT-0500 (-05)','10:30')).toBe('Free to drive!!');
  }));
  it('#ableToDrive should return Not null inputs if any of the inputs is null', inject([PicoYPlacaService], (service: PicoYPlacaService) => {
    expect(service.ableToDrive(null,null,null)).toBe('Not null inputs');
  }));
});
