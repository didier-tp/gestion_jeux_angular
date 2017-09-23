import { TestBed, inject } from '@angular/core/testing';

import { ServcliService } from './servcli.service';

describe('ServcliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServcliService]
    });
  });

  it('should be created', inject([ServcliService], (service: ServcliService) => {
    expect(service).toBeTruthy();
  }));
});