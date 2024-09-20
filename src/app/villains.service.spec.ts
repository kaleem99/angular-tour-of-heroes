import { TestBed } from '@angular/core/testing';

import { VillainService } from './villain.service';

describe('VillainsService', () => {
  let service: VillainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
