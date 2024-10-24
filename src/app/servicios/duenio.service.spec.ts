import { TestBed } from '@angular/core/testing';

import { DuenioService } from './duenio.service';

describe('DuenioService', () => {
  let service: DuenioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuenioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
