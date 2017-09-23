import { TestBed, inject } from '@angular/core/testing';

import { ServprodService } from './servprod.service';

describe('ServprodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServprodService]
    });
  });

  it('should be created', inject([ServprodService], (service: ServprodService) => {
    expect(service).toBeTruthy();
  }));
});
